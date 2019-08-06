import React, { Component } from "react";
import CalculatorButtons from "./CalculatorButtons";
import DisplayBar from "./DisplayBar";
import { Div } from "./styledComponents";
import { observer } from "mobx-react";
@observer
class Calculator extends Component {
  render() {
    return (
      <Div>
        <DisplayBar calculatorStore={this.props.calculatorStore} />
        <CalculatorButtons calculatorStore={this.props.calculatorStore} />
      </Div>
    );
  }
}
export default Calculator;
