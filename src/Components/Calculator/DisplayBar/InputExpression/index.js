import React, { Component } from "react";
import { observer } from "mobx-react";
@observer
class InputExpression extends Component {
  render() {
    return (
      <>
        <span data-testid="expression">
          {" "}
          {this.props.calculatorStore.expressionToBeEvaluated}
        </span>
      </>
    );
  }
}
export default InputExpression;
