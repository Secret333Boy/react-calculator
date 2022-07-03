const signs = ['x', '÷', '+', '-'];
const signRegex = /[+\x\-÷]/;

// eslint-disable-next-line sonarjs/cognitive-complexity
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
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === 'x') {
      numbers[i] *= numbers[i + 1];
      numbers.splice(i + 1, 1);
      operators.splice(i, 1);
      i--;
    } else if (operators[i] === '÷') {
      numbers[i] /= numbers[i + 1];
      numbers.splice(i + 1, 1);
      operators.splice(i, 1);
      i--;
    }
  }
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === '+') {
      numbers[i] += numbers[i + 1];
      numbers.splice(i + 1, 1);
      operators.splice(i, 1);
      i--;
    } else if (operators[i] === '-') {
      numbers[i] -= numbers[i + 1];
      numbers.splice(i + 1, 1);
      operators.splice(i, 1);
      i--;
    }
  }
  return numbers.pop();
};

export default calcQuery;
