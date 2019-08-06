import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";
import CalculatorStore from "../../../Store/CalculatorStore";
import CalculatorButtons from "../CalculatorButtons";
afterEach(cleanup);
describe("Test for CalculatorButtons Component", () => {
  it("should check if add funtion is called", () => {
    const calculatorStore = new CalculatorStore();
    jest.spyOn(calculatorStore, "addCharacterToExpression");
    const { getByText, debug } = render(
      <CalculatorButtons calculatorStore={calculatorStore} />
    );

    const add = getByText("+");
    fireEvent.click(add);
    expect(calculatorStore.addCharacterToExpression).toBeCalled();
  });
});
