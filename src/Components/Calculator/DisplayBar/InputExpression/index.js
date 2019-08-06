import React, { Component } from "react";
import { observer } from "mobx-react";
import { Span } from "./styledComponents";
@observer
class InputExpression extends Component {
  render() {
    return (
      <>
        <Span data-testid="expression">
          {" "}
          {this.props.calculatorStore.expressionToBeEvaluated}
        </Span>
      </>
    );
  }
}
export default InputExpression;
