import React from 'react';
import CalculatorButton from '../CalculatorButton/CalculatorButton.jsx';
import './CalculatorKeyboard.scss';

const CalculatorKeyboard = ({ layout }) => {
  if (!layout)
    layout = [
      ['C', '<-', '%', '÷'],
      ['7', '8', '9', '×'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      [' +/-', '0', '.', '='],
    ];
  return (
    <table className="calculator-keyboard">
      <tbody>
        {layout.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((str, strIndex) => (
              <td key={row.length * rowIndex + strIndex}>
                <CalculatorButton>{str}</CalculatorButton>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CalculatorKeyboard;
