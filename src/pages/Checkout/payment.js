import React from "react";
import {Link} from "react-router-dom";
import "./summary.css";
import Header from "../../components/Header/header";
import Navigation from "../../components/Navbar/navbar";
import FooterPage from "../../components/Footer/footer";

import OrderHistory from "../../components/Orders/orderHistory";
import ShippingInfo from "../../components/shippingInfo";
import { CDBInput, CDBBtn } from "cdbreact";
import { MDBProgress, MDBProgressBar } from "mdb-react-ui-kit";
import PaymentInputs from "../../components/Account/paymentInput";


class Payment extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <MDBProgress  height='3'>
          <MDBProgressBar variant="striped" width={90}></MDBProgressBar>
        </MDBProgress>
        <div className="splitScreen">
          <div className="topPane">
            <h4 style={{ fontWeight: "bold", marginBottom: "10%" }}>
              Checkout
            </h4>
            <p style={{ textAlign: "center" }}>
                <b>Payment Information</b>
              </p>
            <PaymentInputs />
          </div>
          <div className="bottomPane">
            <h4 style={{ fontWeight: "bold", marginBottom: "10%" }}>
              Your Cart
            </h4>
            <OrderHistory />
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
            <Link to="/checkout/confirm">
            <CDBBtn color="dark" className="mx-auto">Confirm</CDBBtn>
            </Link>
          </div>
        </div>
        <FooterPage />
      </div>
    );
  }
}

export default Payment;
