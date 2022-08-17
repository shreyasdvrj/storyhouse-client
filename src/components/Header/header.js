import React from "react";
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <div class="head">
        <header class="brand-navigation">
          <div class="content">
            <span>INR</span> 
            <span>Get all the best books here on this site!</span>

            <span>
              <a id="support" href="#">Support</a>
            </span>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
