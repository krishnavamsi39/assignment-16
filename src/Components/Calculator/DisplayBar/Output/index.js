import React, { Component } from "react";
import { observer } from "mobx-react";
import { Span } from "./styledComponents";
@observer
class Output extends Component {
  render() {
    return (
      <>
        {this.props.calculatorStore.showOutput ? (
          <Span value={this.props.calculatorStore.evaluateExpression()}>
            {this.props.calculatorStore.evaluateExpression()}
          </Span>
        ) : (
          <></>
        )}
      </>
    );
  }
}
export default Output;
