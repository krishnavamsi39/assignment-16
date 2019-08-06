import React, { Component } from "react";
import { Button } from "./styledComponents";
class EachButton extends Component {
  handleClick = e => {
    this.props.function(e.target.value);
  };
  render() {
    return (
      <>
        <Button value={this.props.value} onClick={this.handleClick}>
          {this.props.value}
        </Button>
      </>
    );
  }
}
export default EachButton;
