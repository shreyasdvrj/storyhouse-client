import React from "react";
import './landing.css'
import { Link } from 'react-router-dom';
class Landing extends React.Component {
  render() {
    return (
      <div className="firstpage">
        <div className="text">
          "Today a reader, tomorrow a leader"<br />
          - Margaret Fuller
          <br />
          <Link to="/exploreFiction">
            <button className="landing-b1">EXPLORE FICTION</button>
          </Link>
          <Link to="/exploreNonFiction">
          <button className="landing-b2">EXPLORE NON-FICTION</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;

