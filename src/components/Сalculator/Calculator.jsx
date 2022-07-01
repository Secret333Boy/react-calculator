import React, { useState, useEffect } from 'react';
import CalculatorKeyboad from '../CalculatorKeyboard/CalculatorKeyboard.jsx';
import CalculatorScreen from '../CalculatorScreen/CalculatorScreen.jsx';
import './Calculator.scss';

const calcQuery = (query) => query;

const Calculator = () => {
  const [query, setQuery] = useState('0');
  const [result, setResult] = useState('0');
  useEffect(() => {
    setResult(calcQuery(query));
  }, [query]);

  return (
    <div className="calculator">
      <CalculatorScreen query={query} result={result} />
      <CalculatorKeyboad query={query} result={result} setQuery={setQuery} />
    </div>
  );
};

export default Calculator;
