import { Link } from "react-router-dom";
import React from "react";
import "./sidenav.css";

import OrderHistory from "../Orders/orderHistory";
import Account from "../Account/account";
import ProductList from "../Orders/product";
import { LaptopWindows } from "@material-ui/icons";

export default function () {
  const category = window.location.pathname.split("/")[2];
  // window.location.reload();
  return (
    <div className="page"> 
      <div className="product-list-div">
        <div className="filter">
          <Link
            className={
              category === "account" ? "curr-filter-link" : "filter-link"
            }
            to="/profile/account"
          >
            Account
          </Link>
          <Link
            className={
              category === "orders" ? "curr-filter-link" : "filter-link"
            }
            to="/profile/orders"
          >
            Your Orders
          </Link>
          <Link
            className={
              category === "settings" ? "curr-filter-link" : "filter-link"
            }
            to="/profile/settings"
          >
            Settings
          </Link>
        </div>
        <div className="product-list">
            {(category === undefined || category === "account") && (
              <div className="shop-product-container">
                <Account />
              </div>
            )}
            {(category === "orders") && (
              <div className="shop-product-container">
                <OrderHistory />
              </div>
            )}
            {(category === "settings") && (
              <div className="shop-product-container">
                Settings
              </div>
            )}
            </div>
      </div>
    </div>
  );
}
