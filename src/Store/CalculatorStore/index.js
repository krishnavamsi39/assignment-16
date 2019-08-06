import { observable, action } from "mobx";
class CalculatorStore {
  @observable expressionToBeEvaluated = "";

  @action
  addCharacterToExpression(character) {
    this.expressionToBeEvaluated += character;
  }
}
export default CalculatorStore;
