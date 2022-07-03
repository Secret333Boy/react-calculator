import React from 'react';
import CalculatorButton from '../CalculatorButton/CalculatorButton.jsx';
import './CalculatorKeyboard.scss';

const isSign = (str) => ['+', '-', 'x', '÷'].includes(str);
const isSymbol = (str) => ['+', '-', 'x', '÷', '%', '(', ')'].includes(str);

const CalculatorKeyboard = ({ layout, result, query, setQuery }) => {
  // eslint-disable-next-line sonarjs/cognitive-complexity
  const clickHandler = (key) => () => {
    switch (key) {
      case 'C':
        setQuery('0');
        break;
      case '(':
        break;
      case ')':
        break;
      case '%':
        setQuery(isSymbol(query[query.length - 1]) ? query : query + '%');
        break;
      case '-':
        setQuery(
          isSign(query[query.length - 1]) && isSign(query[query.length - 2])
            ? query.slice(0, -2) + key
            : query + key
        );
        break;
      case '÷':
      case 'x':
      case '+':
        setQuery(
          isSign(query[query.length - 1])
            ? query.slice(0, -1) + key
            : query + key
        );
        break;
      case '=':
        setQuery(result);
        break;
      case '+/-':
        break;
      case '<=':
        setQuery(query.length === 1 ? '0' : query.slice(0, -1));
        break;
      case '.':
        break;
      default:
        setQuery(query === '0' ? key : query + key);
        break;
    }
  };
  if (!layout)
    layout = [
      ['', '<=', 'C', '÷'],
      ['%', '(', ')', 'x'],
      ['7', '8', '9', '-'],
      ['4', '5', '6', '+'],
      ['1', '2', '3', '='],
      ['+/-', '0', '.'],
    ];
  return (
    <table className="calculator-keyboard">
      <tbody>
        {layout.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((str, strIndex) => (
              <td
                rowSpan={str === '=' ? 2 : 1}
                key={row.length * rowIndex + strIndex}
              >
                <CalculatorButton onClick={clickHandler(str)}>
                  {str}
                </CalculatorButton>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CalculatorKeyboard;
