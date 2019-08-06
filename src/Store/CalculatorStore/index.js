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
  @computed get isValidExpression() {}
}
export default CalculatorStore;
