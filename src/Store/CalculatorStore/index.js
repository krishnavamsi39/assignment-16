import { observable, action, computed } from "mobx";
class CalculatorStore {
  @observable expressionToBeEvaluated = "";

  @action
  addCharacterToExpression(character) {
    this.expressionToBeEvaluated += character;
  }
  @action
  clearTheInput() {
    this.expressionToBeEvaluated = "";
  }
  @action
  deleteCharacter() {
    this.expressionToBeEvaluated = this.expressionToBeEvaluated.slice(0, -1);
  }
  @computed get isValidExpression() {
    try {
      eval(this.expressionToBeEvaluated);
      return true;
    } catch (e) {
      return false;
    }
  }
  @computed get evaluateExpression() {
    if (this.isValidExpression) {
      return eval(this.expressionToBeEvaluated);
    } else {
      return "Malformed expression";
    }
  }
}
export default CalculatorStore;
