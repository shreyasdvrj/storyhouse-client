import React from "react";
import axios from "axios";
import "./account.css";
import Recent from "./recent";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      recent: [],
    };
  }
  componentDidMount() {
    axios({
      method: "GET",
      url: "https://storyhouse-bookstore.herokuapp.com/users/verify",
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
    return (
      <div>
        <h2>Profile Details</h2>
        <hr />
        <br />
        <div className="accountdetail">
          <div className="detail-item">
            <h5 className="square border border-4 px-4 py-2">Email</h5>
            <h5 className="square border border-4 px-4 py-2">
              {this.state.user.email}
            </h5>
          </div>
          <br />
          <div className="detail-item">
            <h5 className="square border border-4 px-4 py-2">Username</h5>
            <h5 className="square border border-4 px-4 py-2">
              {this.state.user.username}
            </h5>
          </div>
          <br />

          <div className="detail-item">
            <h5 className="square border border-4 px-4 py-2">Joined</h5>
            <h5 className="square border border-4 px-4 py-2">
              {String(this.state.user.createdAt).slice(0, 10)}
            </h5>
          </div>
          <br />
        </div>
        <br />
        <h2>Recently Viewed</h2>
        <hr />
        <br />
        <Recent userid = {this.state.user._id} />
      </div>
    );
  }
}

export default Account;
