import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
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
import "./login.css";

const customId = "custom-id-yes";
const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };

  const login = () => {
    const { email, password } = user;
    if (email && password) {
      axios({
        method: "POST",
        url: "https://storyhouse-bookstore.herokuapp.com/users/login",
        data: user,
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        history.push("/")
        window.location.reload()
      })
      .catch((res, error) => {
        console.log("Login error");
        toast.error(res.response.data.msg, {
          toastId: customId});
      });
    } else {
      alert("invalid input");
    }
  };
  return (
    <div>
      <Header />
      <Navbar />
      <ToastContainer closeOnClick = 'true' limit = {1}/>
      <br />
      <div className="Form">
        <CDBContainer>
          <CDBCard className="Login" style={{ width: "50%" }}>
            <CDBCardBody className="mx-4">
              <div
                style={{ background: "#1F7A8C" }}
                className="text-center text-white"
              >
                <p className="h5 mt-2 py-4 font-weight-bold">Sign in</p>
              </div>
              <CDBInput
                label="Email"
                placeholder="Email"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              <CDBInput
                label="Password"
                placeholder="Password"
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
              <div className="mt-3 d-flex flex-wrap justify-content-center align-items-center">
                <CDBLink to="#">Forgot Password ?</CDBLink>
              </div>
              <div>
                <CDBBtn
                  color="dark"
                  type="submit"
                  outline
                  className="btn-block my-3 mx-auto align-items-center "
                  onClick={login}
                >
                  Sign in
                </CDBBtn>
              </div>
              <hr />
              <p className="text-center">
                Not a member?{" "}
                <CDBLink className="d-inline p-0" to="/signup">
                  Register
                </CDBLink>
              </p>
            </CDBCardBody>
          </CDBCard>
        </CDBContainer>
      </div>
      <br />
      <Waves />
      <Footer />
    </div>
  );
};

export default Login;
