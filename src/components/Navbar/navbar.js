import React from "react";
import logoImg from "../../assets/logo.png";
import "bootstrap/dist/css/bootstrap.css";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchBar from "../Searchbar/searchBar.js"

import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import axios from "axios";

export default function Navigation() {
const history = useHistory();
  const logout = () =>{
    console.log("Logging out")
    axios({
      method: "GET",
      url: "http://localhost:5000/users/logout",
      withCredentials: true,
    })
    .then((res) => {
      toast("Logged Out");
      history.push("/")
      window.location.reload();
    })
    .catch((err) => {
      console.log(err)
    })
  }
  var token = Cookies.get("jwt");
  return (
    <div>
      <ToastContainer />
      <Navbar bg="white" expand="lg" className="py-0">
        <Container className="ml-3">
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logoImg}
              width="30px"
              height="30px"
              className="d-inline-block align-top"
            />{" "}
            <strong>StoryHouse</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/all">All Books</Nav.Link>
              <Nav.Link href="/best">Best Sellers</Nav.Link>
              <NavDropdown title="Genre" id="basic-nav-dropdown">
                <NavDropdown.Item href="/exploreFiction">
                  Fiction
                </NavDropdown.Item>
                <NavDropdown.Item href="/exploreNonFiction">
                  Non Fiction
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
         
            
            
            <Nav className="justify-content-end">
            <Nav.Link href="/search">Search</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>
              {token ? (
                <>
                <Nav.Link href="/profile/account">Profile</Nav.Link>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/signup">Signup</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
