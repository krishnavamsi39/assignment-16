import { observable, action } from "mobx";
class CalculatorStore {
  @observable expressionToBeEvaluated = "";

  @action
  addCharacterToExpression(character) {
    this.expressionToBeEvaluated += character;
  }
  @action
  clearTheInput() {}
}
export default CalculatorStore;
