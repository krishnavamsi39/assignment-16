import React from "react";
import CalculatorButtons from "./Components/Calculator/CalculatorButtons";
import CalculatorStore from "./Store/CalculatorStore";
const calculatorStore = new CalculatorStore();
function App() {
  return (
    <div>
      <CalculatorButtons calculatorStore={calculatorStore} />
    </div>
  );
}

export default App;
