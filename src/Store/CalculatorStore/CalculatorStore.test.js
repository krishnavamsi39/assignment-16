import CalculatorStore from "./index";

describe("tests for Calculator Store", () => {
  let calculatorStore;
  beforeEach(() => {
    calculatorStore = new CalculatorStore();
    calculatorStore.addCharacterToExpression("3");
    calculatorStore.addCharacterToExpression("*");
    calculatorStore.addCharacterToExpression("5");
  });
  it("should test add character function", () => {
    expect(calculatorStore.expressionToBeEvaluated).toBe("3*5");
  });
  it("should clear the input ", () => {
    expect(calculatorStore.expressionToBeEvaluated).toBe("3*5");
    calculatorStore.clearTheInput();
    expect(calculatorStore.expressionToBeEvaluated).toBe("");
  });
  it("should delete a character", () => {
    calculatorStore.deleteCharacter();
    expect(calculatorStore.expressionToBeEvaluated).toBe("3*");
    calculatorStore.deleteCharacter();
    expect(calculatorStore.expressionToBeEvaluated).toBe("3");
    calculatorStore.deleteCharacter();
    expect(calculatorStore.expressionToBeEvaluated).toBe("");
  });
  it("should check if expression is valid", () => {
    expect(calculatorStore.isValidExpression).toBe(true);
    calculatorStore.deleteCharacter();
    expect(calculatorStore.isValidExpression).toBe(false);
    calculatorStore.clearTheInput();
    calculatorStore.addCharacterToExpression("5");
    calculatorStore.addCharacterToExpression("*");
    calculatorStore.addCharacterToExpression("5");
    calculatorStore.addCharacterToExpression("+");
    calculatorStore.addCharacterToExpression("5");
    expect(calculatorStore.isValidExpression).toBe(true);
  });
  it("should evaluate the expression", () => {
    expect(calculatorStore.evaluateExpression).toBe("15");
  });
});
