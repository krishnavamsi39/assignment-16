import React, { Component } from "react";
class EachButton extends Component {
  handleClick = e => {
    this.props.function(e.target.value);
  };
  render() {
    return (
      <>
        <button value={this.props.value} onClick={this.handleClick}>
          {this.props.value}
        </button>
      </>
    );
  }
}
export default EachButton;
