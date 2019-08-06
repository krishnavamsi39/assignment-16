import React, { Component } from "react";
import { observer } from "mobx-react";
import { Span } from "./styledComponents";
@observer
class Output extends Component {
  render() {
    const { calculatorStore } = this.props;
    return (
      <>
        {calculatorStore.showOutput ? (
          <Span value={calculatorStore.evaluateExpression()}>
            {calculatorStore.evaluateExpression()}
          </Span>
        ) : (
          <></>
        )}
      </>
    );
  }
}
export default Output;
