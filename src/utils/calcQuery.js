const signs = ['x', '÷', '+', '-'];

// eslint-disable-next-line sonarjs/cognitive-complexity
const calcQuery = (query) => {
  const numbers = query
    .split(new RegExp(/[+\x\-÷]/))
    .map((str) => (str === '' ? NaN : +str));
  const operators = query.split('').filter((char) => signs.includes(char));
  for (let i = 0; i < numbers.length; i++) {
    if (isNaN(numbers[i])) {
      numbers.splice(i, 1);
      const sign = operators.splice(i, 1);
      if (sign[0] === '-') {
        numbers[i] = -numbers[i];
      } else {
        operators.splice(i - 1, 1);
      }
      i--;
    }
  }
  console.log(numbers, operators);
  for (let i = 0; i < operators.length; i++) {
    ['x', '÷'].map((sign, index) => {
      if (operators[i] === sign) {
        numbers[i] =
          index === 0
            ? numbers[i + 1] * numbers[i]
            : numbers[i] / numbers[i + 1];
        numbers.splice(i + 1, 1);
        operators.splice(i, 1);
        i--;
      }
    });
  }
  for (let i = 0; i < operators.length; i++) {
    ['+', '-'].map((sign, index) => {
      if (operators[i] === sign) {
        numbers[i] =
          index === 0
            ? numbers[i + 1] + numbers[i]
            : numbers[i] - numbers[i + 1];
        numbers.splice(i + 1, 1);
        operators.splice(i, 1);
        i--;
      }
    });
  }
  return numbers[0].toString();
};

export default calcQuery;
