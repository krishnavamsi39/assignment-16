import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";
import CalculatorStore from "../../../../Store/CalculatorStore";
import InputExpression from ".";
describe("test for input expression component", () => {
  it("should test the value of span tag", () => {
    const calculatorStore = new CalculatorStore();
    calculatorStore.addCharacterToExpression("*");
    calculatorStore.addCharacterToExpression("-");
    const { getByTestId } = render(
      <InputExpression calculatorStore={calculatorStore} />
    );
    const input = getByTestId("expression");
    expect(calculatorStore.expressionToBeEvaluated).toBe("*-");
  });
});
