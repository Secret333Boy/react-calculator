const performOperators = (numbers, operators) => {
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
};

export default performOperators;
