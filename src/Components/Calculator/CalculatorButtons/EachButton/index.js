import React, { Component } from "react";
class EachButton extends Component {
  handleClick = e => {
    this.props.funtion(e.target.value);
  };
  render() {
    return (
      <>
        <button value="+" data-id="each-button" onClick={this.handleClick}>
          +
        </button>
      </>
    );
  }
}
export default EachButton;
