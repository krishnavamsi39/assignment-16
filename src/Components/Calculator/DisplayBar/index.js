import React, { Component } from "react";
import InputExpression from "./InputExpression";
import Output from "./Output";
import { observer } from "mobx-react";
@observer
class DisplayBar extends Component {
  render() {
    return (
      <>
        <InputExpression calculatorStore={this.props.calculatorStore} />
        <Output calculatorStore={this.props.calculatorStore} />
      </>
    );
  }
}
export default DisplayBar;
