import React, { Component, useState } from "react";
import "../styles/App.css";
import Ptag from "./ptag";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ptag: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      ptag: true
    });
  }

  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button id="click" onClick={this.handleClick}>
          click to show ptag
        </button>
        <Ptag ptag={this.state.ptag} />
      </div>
    );
  }
}

export default App;
