import React, { Component } from "react";
import BUTTONS from "../../../Constants/CalculatorButtons";
import EachButton from "./EachButton";
class CalculatorButtons extends Component {
  handleClick = value => {};

  render() {
    return (
      <>
        {BUTTONS.map(button => {
          return <EachButton value={button} function={this.handleClick} />;
        })}
      </>
    );
  }
}
export default CalculatorButtons;
