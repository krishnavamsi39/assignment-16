import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";
import CalculatorStore from "../../../Store/CalculatorStore";
import CalculatorButtons from "../CalculatorButtons";
afterEach(cleanup);
describe("Test for CalculatorButtons Component", () => {
  it("should check if add funtion is called", () => {
    const calculatorStore = new CalculatorStore();
    jest.spyOn(calculatorStore, "addCharacterToExpression");
    const { getByText } = render(
      <CalculatorButtons calculatorStore={calculatorStore} />
    );

    const add = getByText("+");
    fireEvent.click(add);
    expect(calculatorStore.addCharacterToExpression).toBeCalled();
  });
  it("should check if delete funtion is called", () => {
    const calculatorStore = new CalculatorStore();
    jest.spyOn(calculatorStore, "deleteCharacter");
    const { getByText } = render(
      <CalculatorButtons calculatorStore={calculatorStore} />
    );
    const deletechar = getByText("Del");
    fireEvent.click(deletechar);
    expect(calculatorStore.deleteCharacter).toBeCalled();
  });
  it("should check if clear funtion is called", () => {
    const calculatorStore = new CalculatorStore();
    jest.spyOn(calculatorStore, "clearTheInput");
    const { getByText } = render(
      <CalculatorButtons calculatorStore={calculatorStore} />
    );
    const clear = getByText("c");
    fireEvent.click(clear);
    expect(calculatorStore.clearTheInput).toBeCalled();
  });
  it("should check if evaluate expression is called", () => {
    const calculatorStore = new CalculatorStore();
    jest.spyOn(calculatorStore, "evaluateExpression");
    const { getByText } = render(
      <CalculatorButtons calculatorStore={calculatorStore} />
    );
    const clear = getByText("=");
    fireEvent.click(clear);
    expect(calculatorStore.evaluateExpression).toBeCalled();
  });
});
