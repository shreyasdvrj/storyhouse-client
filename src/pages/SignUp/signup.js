import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import {
  CDBInput,
  CDBCard,
  CDBCardBody,
  CDBBtn,
  CDBLink,
  CDBContainer,
} from "cdbreact";
import Waves from "../../components/Wave/wave";
import "../Login/login.css";

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, 
      [name]: value,
    });
  };


  const register = () => {
    const { username, email, password } = user;
    console.log(user);
    if (username && email && password) {
      axios({
        method: "POST",
        url: "https://storyhouse-bookstore.herokuapp.com/users/register",
        data: user,
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          toast("Success");
          console.log(res);
          history.push("/login");
          
        })
        .catch((res,error) => {
          console.log("Problem submitting New Post", error);
          toast.warn(res.response.data.msg)
          window.location.reload()
          setUser(() => "");

        });
     
    } else {
      alert("Reload Page");
    }
  
  };

  return (
    <div>
      <Header />
      <Navbar />
      <br />
      <div className="Form">
        <CDBContainer>
          <CDBCard style={{ width: "50%" }}>
            <CDBCardBody className="mx-4">
              <div
                className="text-center text-white"
                style={{ background: "#1F7A8C" }}
              >
                <p className="h5 mt-2 py-4 font-weight-bold"> Sign up </p>
              </div>
              <form action="#">
                <CDBInput
                  material
                  name="username"
                  placeholder="Username"
                  type="text"
                  value={user.username}
                  onChange={handleChange}
                />
                {/* <CDBInput
                  material
                  name="lastname"
                  placeholder="Lastname"
                  type="text"
                  value={user.lastname}
                  onChange={handleChange}
                /> */}
                <CDBInput
                  material
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={user.email}
                  onChange={handleChange}
                />
                <CDBInput
                  material
                  name="password"
                  placeholder="Password"
                  type="password"
                  value={user.password}
                  onChange={handleChange}
                />

                <CDBBtn
                  color="dark"
                  outline
                  className="btn-block my-3 mx-auto"
                  onClick={register}
                >
                  Register
                </CDBBtn>
              </form>
              <p className="text-center m-0">
                Already have an account?{" "}
                <CDBLink className="d-inline p-0" to="/login">
                  Sign In
                </CDBLink>
              </p>
              <hr />
              <p className="text-center">
                By clicking <em>Sign up</em> you agree to our{" "}
                <CDBLink className="d-inline p-0" to="#">
                  terms of service
                </CDBLink>
              </p>
            </CDBCardBody>
          </CDBCard>
        </CDBContainer>
        <ToastContainer />
      </div>
      <br />
      <Waves />
      <Footer />
    </div>
  );
};

export default Signup;
