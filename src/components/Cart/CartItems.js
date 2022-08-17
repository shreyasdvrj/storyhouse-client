import axios from "axios";
import { Component } from "react";
import Itemcard from "./itemCard";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Modal from "../Modal/modal";
import "./cart.css";

class CartItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      cartItem: {},
      openModal: false,
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "https://storyhouse-bookstore.herokuapp.com/users/profile",
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        const userid = response.data.userid;
        this.setState({ id: userid });
        axios({
          method: "POST",
          url: "https://storyhouse-bookstore.herokuapp.com/cart/all",
          data: { userid },
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => {
            this.setState({ cartItem: res.data[0] });
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  handleDeleteProperty = async (id) => {
    try {
      axios({
        method: "POST",
        url: "https://storyhouse-bookstore.herokuapp.com/cart/clear",
        data: { userid: id },
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          console.log("Cart Cleared");
          toast.success("Cart Cleared");
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      console.error(err);
    }
  };

  orderCheckout = async () => {
    console.log(this.state.cartItem.products)
    try {
      axios({
        method: "POST",
        url: "https://storyhouse-bookstore.herokuapp.com/order/add",
        data: { userid: this.state.id, items :  this.state.cartItem.products},
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          console.log("Checked Out");
          toast("Checked Out");
          this.handleDeleteProperty(this.state.id);
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      console.error(err);
    }
  };
    wait= (ms) => {
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
  checkout = () => {
    this.setState({openModal : true})
    
    setTimeout(() => {  this.orderCheckout(); }, 4000);
  }
  render() {
    function round(value, precision) {
      var multiplier = Math.pow(10, precision || 0);
      return Math.round(value * multiplier) / multiplier;
    }

    var subtotal = 0.0;
    {
      this.state.cartItem.products &&
        this.state.cartItem.products.map(
          (item) => (subtotal = subtotal + item[2])
        );
    }
    subtotal = round(subtotal, 1);
    return (
      <div>
        <ToastContainer></ToastContainer>
        <div className="cart-detail">
          <div className="cart-container">
            <h2>Shopping Cart</h2>
            <div>
              <div className="titles">
                <h3 className="product-title">Product</h3>
                <h3 className="price">Price</h3>
                <h3 className="quantity">Type</h3>
                <h3 className="total">Total</h3>
              </div>
              {this.state.cartItem.products &&
                this.state.cartItem.products.map((item, index) => (
                  <>
                    <Itemcard
                      props={item}
                      index={index}
                      userid={this.state.id}
                      style={{ padding: "15px" }}
                    />
                  </>
                ))}
              <div className="cart-summary">
                <button
                  className="clear-btn"
                  onClick={(e) => this.handleDeleteProperty(this.state.id)}
                >
                  Clear Cart
                </button>
                <div className="cart-checkout">
                  <div className="subtotal">
                    <span className="info">Subtotal</span>
                    <span className="amount">&#8377;{subtotal}</span>
                  </div>
                  <p>Taxes and shipping calculated at checkout</p>
                  {/* <Link to="/checkout/summary"> */}
                    <button onClick={this.checkout}>Checkout</button>
                  {/* </Link> */}
                  <Modal 
        open={this.state.openModal} 
        orderid ={this.state.cartItem._id}
        />
                  <div className="continue-shopping">
                    <Link to="/all">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-arrow-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        />
                      </svg>
                      <span className="info">Continue Shopping</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItems;
