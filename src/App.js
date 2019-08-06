import React from "react";
import Calculator from "./Components/Calculator";
import CalculatorStore from "./Store/CalculatorStore";
const calculatorStore = new CalculatorStore();
function App() {
  return (
    <div>
      <Calculator calculatorStore={calculatorStore} />
    </div>
  );
}

export default App;
