import React, { Component } from "react";

class Ptag extends Component {
  constructor(props) {
    super(props);
    //this.ptag = this.props.ptag;
  }

  render() {
    return (
      <>
        {this.props.ptag ? (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        ) : null}
      </>
    );
  }
}
export default Ptag;
