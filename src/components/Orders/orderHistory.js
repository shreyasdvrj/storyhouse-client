import React from "react";
import OrderCard from "./orderCard";
import Itemcard from "../Cart/itemCard";
import axios from "axios";

class OrderHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      orders: [],
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
          url: "https://storyhouse-bookstore.herokuapp.com/order/all",
          data: { userid },
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => {
            this.setState({ orders: res.data[0].products });
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
    console.log(this.state.orders);
    return (
      <div className="order-history">
         <h2>Order History</h2><br/>
        {this.state.orders &&
          this.state.orders.map((item, index) => (
            <>
              <hr />
              <bold>Order Date : {item.shift()}</bold>

              {item &&
                item.map((order) => (
                  <OrderCard
                    props={order}
                    style={{ padding: "15px" }}
                  />
                ))}

           </>
          ))}
      </div>
    );
  }
}

export default OrderHistory;
