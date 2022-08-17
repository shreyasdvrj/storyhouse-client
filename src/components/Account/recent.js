import React from "react";
import axios from "axios";
import RecentCard from "./recentCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class Recent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: this.props.userid,
      recent: [],
    };
  }
  componentDidMount() {
    console.log("1124", this.props.userid);
    var userid = this.props.userid;
    if (this.props.userid == null)
      userid = "test"
    axios({
      method: "POST",
      url: "https://storyhouse-bookstore.herokuapp.com/recent/all",
      data: { userid: userid },
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        this.setState({ recent: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <div>
        <Carousel responsive={responsive}>
          {this.state.recent &&
            this.state.recent.map((item, index) => (
              <>
                <RecentCard bookid={item} />
                <br />
              </>
            ))}
        </Carousel>
      </div>
    );
  }
}

export default Recent;
