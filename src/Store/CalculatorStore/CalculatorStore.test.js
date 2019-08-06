import CalculatorStore from './index'


describe('tests for Calculator Store',()=>{
    it('should test add character function',()=>{
        const calculatorStore=new CalculatorStore()
        calculatorStore.addCharacterToExpression("3")
        calculatorStore.addCharacterToExpression("*")
        calculatorStore.addCharacterToExpression("5")
        expect(calculatorStore.expressionToBeEvaluated).toBe("3*5")

    })

})