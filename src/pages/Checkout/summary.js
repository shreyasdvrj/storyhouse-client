import React from "react";
import { Link } from "react-router-dom";
import "./summary.css";
import Header from "../../components/Header/header";
import Navigation from "../../components/Navbar/navbar";
import FooterPage from "../../components/Footer/footer";
import { MDBProgress, MDBProgressBar } from "mdb-react-ui-kit";
import Cart from "../../components/Cart/CartItems"
import OrderHistory from "../../components/Orders/orderHistory";
import { CDBInput, CDBBtn } from "cdbreact";

class Summary extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <MDBProgress height="3">
          <MDBProgressBar width={33}></MDBProgressBar>
        </MDBProgress>
        <div className="splitScreen">
          <div className="topPane">
            <h4 style={{ fontWeight: "bold", marginBottom: "10%" }}>
              Your Cart
            </h4>
            <p style={{ textAlign: "left" }}>
              <b>Not ready? </b>
              <a style={{ color: "black" }} href="/exploreFiction">
                Continue Shopping
              </a>
            </p>
            <Cart />
          </div>
          <div className="bottomPane">
            <h4 style={{ fontWeight: "bold", marginBottom: "10%" }}>
              Order Summary
            </h4>
            <CDBInput type="text" placeholder="Enter Coupon" />
            <hr />

            <div className="split">
              <p style={{ textAlign: "left" }}>
                <b>Subtotal</b>
              </p>
              <p style={{ textAlign: "right" }}>
                <b>₹250</b>
              </p>
            </div>
            <div className="split">
              <p style={{ textAlign: "left" }}>
                <b>Shipping</b>
              </p>
              <p style={{ textAlign: "right" }}>
                <b>Free</b>
              </p>
            </div>
            <hr />
            <div className="split">
              <p style={{ textAlign: "left" }}>
                <b>Total</b>
              </p>
              <p style={{ textAlign: "right" }}>
                <b>₹250</b>
              </p>
            </div>
            <Link to="/checkout/address">
              <CDBBtn color="dark" className="mx-auto">
                Continue to Checkout
              </CDBBtn>
            </Link>
          </div>
        </div>
        <FooterPage />
      </div>
    );
  }
}

export default Summary;
