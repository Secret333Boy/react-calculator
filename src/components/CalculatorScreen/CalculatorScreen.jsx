import React from 'react';
import './CalculatorScreen.scss';

const CalculatorScreen = ({ result, query }) => {
  return (
    <div className="calculator-screen">
      <div className="calculator-screen-result">{result}</div>
      <div className="calculator-screen-query">{query}</div>
    </div>
  );
};

export default CalculatorScreen;
