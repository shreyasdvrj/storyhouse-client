import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useEffect, StrictMode } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header/header";
import Landing from "./components/Landing/landing";
import BestsellersCarousel from "./components/Bestseller/bestsellersCarousel";
import Footer from "./components/Footer/footer";
import Navigation from "./components/Navbar/navbar";
import Login from "./pages/Login/login";
import Signup from "./pages//SignUp/signup";
import ExploreFiction from "./pages/Fiction/exploreFiction";
import ExploreNonFiction from "./pages/NonFiction/exploreNonFiction";
import ProductDetail from "./components/Product/productDetail";
import PostReview from "./components/Product/postReview";
import Cart from "./pages/Cart/cart";
import Bestsellers from "./pages/Bestsellers/bestsellers";
import AllBooks from "./pages/AllBooks/allBooks";
import Profile from "./pages/Profile/profile";
import Summary from "./pages/Checkout/summary";
import Address from "./pages/Checkout/address";
import Payment from "./pages/Checkout/payment";
import Test from "./test";
import OrderHistory from "./components/Orders/orderHistory";
import Sidebar from "./components/Sidebar/sidenav";
import ProductList from "./components/Orders/product";
import SearchResult from "./pages/SearchResult/searchResult";
import ProductDetailByTitle from "./components/Product/productDetailByTitle";

function App() {
  var token = Cookies.get("jwt");
  var loggedIn = false;
  if (token) loggedIn = true;

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <div style={{ position: "sticky" }}>
              <Header />
              <Navigation />
            </div>
            <Landing />
            <BestsellersCarousel></BestsellersCarousel>
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/product">
            <ProductDetail />
          </Route>
          <Route path="/byTitle/:t">
            <ProductDetailByTitle />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout/summary">
            <Summary />
          </Route>
          <Route path="/checkout/address">
            <Address />
          </Route>
          <Route path="/checkout/payment">
            <Payment />
          </Route>
          <Route path="/exploreFiction">
            <ExploreFiction />
          </Route>
          <Route path="/exploreNonFiction">
            <ExploreNonFiction />
          </Route>
          <Route path="/all">
            <AllBooks />
          </Route>
          <Route path="/best">
            <Bestsellers />
          </Route>
          <Route path="/search">
            <SearchResult />
          </Route>
          <Route path="/postReview">
            <PostReview />
          </Route>
          {loggedIn ? (
            <>
              <Route path="/profile">
                <Profile />
              </Route>
            </>
          ) : (
            <>
              <Route path="/profile">
                <Login />
              </Route>
            </>
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
