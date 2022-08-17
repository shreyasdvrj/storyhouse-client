import axios from "axios";
import react, { Component } from "react";
import CartItems from "../../components/Cart/CartItems";
import { Link } from "react-router-dom";
import Header from "../../components/Header/header";
import Navigation from "../../components/Navbar/navbar";
import TopBar from "../../components/TopBar/topBar";
import FooterPage from "../../components/Footer/footer";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "",
      cartItem: {},
      userFlag: false,
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
        this.setState({ userid: userid });
        axios({
          method: "POST",
          url: "https://storyhouse-bookstore.herokuapp.com/cart/all",
          data: { userid },
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => {
            this.setState({ cartItem: res.data });
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    var userFlag = false;
    var cartFlag = false;
    if (typeof this.state.userid != "undefined") userFlag = true;
    if (Object.keys(this.state.cartItem).length != 0) cartFlag = true;
    return (
      <div>
        <Header />
        <Navigation />
        <TopBar name="Cart" value="Items in your cart"></TopBar>
        {userFlag ? (
          <>
            {cartFlag ? (
              <CartItems />
            ) : (
              <>
                <h5>No items in your cart</h5>
                <br/>
                <div className="continue-shopping" style={{marginLeft : '43%'}}>
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
                <br/><br/><br/>
              </>
            )}
          </>
        ) : (
          <>
            <h5>Please login to add to cart</h5>
            <br />
            <br />
            <Link to="/login">
              <button>Login</button>
            </Link>
            <br />
            <br />
          </>
        )}
        {/* { true ? (
                <CartItems />
               ) :
              (
                <p>No items</p> 
               
              )} */}
        <FooterPage />
      </div>
    );
  }
}

export default Cart;
