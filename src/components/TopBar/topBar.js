import React from "react";
import './topBar.css';

class TopBar extends React.Component {
  render() {
    return (
      <div class="tb-head">
        <header class="tb-brand-navigation">
          <div class="tb-content">
            <h1 className="tb-h1">{this.props.name}</h1>
            <h2 className="tb-h2">{this.props.value}</h2>
          </div>
        </header>
      </div>
    );
  }
}

export default TopBar;
