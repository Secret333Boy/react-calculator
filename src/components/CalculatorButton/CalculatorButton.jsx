import React from 'react';
import './CalculatorButton.scss';

const CalculatorButton = ({ children, onClick }) => {
  return (
    <button className="calculator-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default CalculatorButton;
