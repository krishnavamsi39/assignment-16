import { observable, action, computed } from "mobx";
class CalculatorStore {
  @observable expressionToBeEvaluated = "";
  @observable showOutput = false;
  @action
  addCharacterToExpression(character) {
    if (this.showOutput === true) {
      this.expressionToBeEvaluated = "";
    }
    this.showOutput = false;
    this.expressionToBeEvaluated += character;
  }
  @action toggleShowOutput() {
    this.showOutput = true;
  }
  @action
  clearTheInput() {
    this.expressionToBeEvaluated = "";
  }
  @action
  deleteCharacter() {
    this.showOutput = false;
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
  evaluateExpression = () => {
    if (this.isValidExpression) {
      return eval(this.expressionToBeEvaluated);
    } else {
      return "Malformed expression";
    }
  };
}
export default CalculatorStore;
