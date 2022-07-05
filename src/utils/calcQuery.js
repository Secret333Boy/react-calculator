import performOperators from './performOperators.js';
const signs = ['x', '÷', '+', '-'];
const signRegex = /[+\x\-÷]/;

const calcQuery = (query) => {
  const numbers = query
    .split(new RegExp(signRegex))
    .map((str) =>
      str === '' ? NaN : str.endsWith('%') ? +str.replace('%', '') / 100 : +str
    );
  const operators = query.split('').filter((char) => signs.includes(char));
  for (let i = 0; i < numbers.length; i++) {
    if (isNaN(numbers[i])) {
      numbers.splice(i, 1);
      const sign = operators.splice(i, 1).pop();
      if (sign === '-') {
        numbers[i] = -numbers[i];
      } else {
        operators.splice(i - 1, 1);
      }
      i--;
    }
  }
  performOperators(numbers, operators);
  return numbers.pop().toString();
};

export default calcQuery;
