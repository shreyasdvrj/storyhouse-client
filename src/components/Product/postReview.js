import React, { useState, useEffect } from "react";
import axios from "axios";
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
import "../../pages/Login/login.css";
import { useLocation, useHistory } from "react-router-dom";

const PostReview = () => {
  const location = useLocation();
  let history = useHistory();
  var { bookDetail, username } = location.state;
  if(!username)
    username = 'Anonymous'
  const id = bookDetail._id;
  const [review, setReview] = useState({
    title: "",
    description: "",
    bookid: id,
    user: username,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({
      ...review,
      [name]: value,
    });
  };

  const postReview = () => {
    const { title, description } = review;
    console.log(review);
    if (title && description) {
      axios({
        method: "POST",
        url: "https://storyhouse-bookstore.herokuapp.com/books/review",
        data: review,
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          console.log(res.data);
          history.goBack();
        })
        .catch((res, error) => {
          console.log("Problem submitting New Review", error);
          console.log(res);
          setReview(() => "");
          window.location.reload();
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
          <CDBCard className="Post Rating" style={{ width: "50%" }}>
            <CDBCardBody className="mx-4">
              <div
                style={{ background: "#1F7A8C" }}
                className="text-center text-white"
              >
                <p className="h5 mt-2 py-4 font-weight-bold">Post Review</p>
              </div>
              <CDBInput
                name="title"
                label="Review Title"
                placeholder="Review Title"
                type="text"
                value={review.title}
                onChange={handleChange}
              />
              <CDBInput
                name="description"
                label="Review Description"
                placeholder="Review Description"
                type="textarea"
                value={review.description}
                onChange={handleChange}
              />
              <div>
                <CDBBtn
                  color="dark"
                  outline
                  className="btn-block my-3 mx-auto align-items-center "
                  onClick={postReview}
                >
                  Post Review
                </CDBBtn>
              </div>
              <hr />
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

export default PostReview;
