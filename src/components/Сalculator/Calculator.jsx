import React from 'react';
import CalculatorKeyboad from '../CalculatorKeyboard/CalculatorKeyboard.jsx';
import CalculatorScreen from '../CalculatorScreen/CalculatorScreen.jsx';
import './Calculator.scss';

const Calculator = () => {
  return (
    <div className="calculator">
      <CalculatorScreen />
      <CalculatorKeyboad />
    </div>
  );
};

export default Calculator;
