import React, { Component } from "react";
import BUTTONS from "../../../Constants/CalculatorButtons";
import EachButton from "./EachButton";
class CalculatorButtons extends Component {
  handleClick = value => {
    if (value === "Del") this.props.calculatorStore.deleteCharacter();
    else if (value === "c") this.props.calculatorStore.clearTheInput();
    else if (value === "=") this.props.calculatorStore.evaluateExpression();
    else this.props.calculatorStore.addCharacterToExpression(value);
  };

  render() {
    return (
      <>
        {BUTTONS.map(button => {
          return (
            <EachButton
              value={button}
              key={button}
              function={this.handleClick}
            />
          );
        })}
      </>
    );
  }
}
export default CalculatorButtons;
