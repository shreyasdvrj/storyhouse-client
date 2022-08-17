import React from "react";
import axios from "axios";
import SingleReview from "./singleReview";
import { Link } from "react-router-dom";

class ReviewSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviews: {}, user : '' };
  }
  componentDidMount() {
    const bookid = this.props.book._id;
    const id = { bookid };
    axios({
      method: "POST",
      url: "https://storyhouse-bookstore.herokuapp.com/books/allReview",
      data: id,
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        this.setState({ reviews: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
      axios({
        method: "GET",
        url: "https://storyhouse-bookstore.herokuapp.com/users/profile",
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          this.setState({ user: response.data });
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  render() {
    const bookid = this.state.reviews.bookid;
    const username = this.state.user.username;
    return (
      <div className="review-section">
         <hr></hr>
        <h1 style={{ fontSize: "x-large", fontWeight: "bold" }}>Reviews</h1>
       
        {bookid ? (
          <>
            {this.state.reviews.description &&
              this.state.reviews.description.map((review) => (
                <SingleReview review={review} ></SingleReview>
              ))}
          </>
        ) : (
          <h5 style={{marginTop: '15px'}}>No Reviews Yet</h5>
        )}
        {/* <ReviewSummary></ReviewSummary>
        <SingleReview></SingleReview> */}
        <p style={{ color: "black" }}>
          <Link
            to={{
              pathname: "/postReview/" + this.props.book._id,
              state: { bookDetail: this.props.book, username: username},
            }}
          >
            Review this book
          </Link>
        </p>
      </div>
    );
  }
}

export default ReviewSection;
