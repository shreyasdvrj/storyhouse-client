import React from "react";
import "./singleReview.css";

const reviewText =
  "If you’re thinking about reading this, stop thinking, just read it. It’s brilliant. It’s a book I will definitely be reading again because it is just so thought provoking and disturbing. Margaret Atwood is truly a genius.";
class SingleReview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const review = this.props.review;
    // console.log(review[0])
    return (
      <div className="single-review">
       {/* <p className="review-date">29-06-2022</p> */}
        <h1 className="review-heading">{review[0]}</h1>
        <p className="user-name">By {review[2]}</p>
        <h2 className="review-text">{review[1]}</h2>
        <hr/>
      </div>
    );
  }
}

export default SingleReview;
