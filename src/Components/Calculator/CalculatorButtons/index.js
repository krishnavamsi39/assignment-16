import React, { Component } from "react";
import BUTTONS from "../../../Constants/CalculatorButtons";
import EachButton from "./EachButton";
import { Div } from "./styledComponents";
class CalculatorButtons extends Component {
  handleClick = value => {
    const { calculatorStore } = this.props;
    if (value === "Del") {
      calculatorStore.deleteCharacter();
    } else if (value === "c") {
      calculatorStore.clearTheInput();
    } else if (value === "=") {
      calculatorStore.toggleShowOutput();
    } else {
      calculatorStore.addCharacterToExpression(value);
    }
  };

  render() {
    return (
      <Div>
        {BUTTONS.map(button => {
          return (
            <EachButton
              value={button}
              key={button}
              function={this.handleClick}
            />
          );
        })}
      </Div>
    );
  }
}
export default CalculatorButtons;
