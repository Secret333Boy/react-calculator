import extractNumbers from './extractNumbers.js';
import extractOperators from './extractOperators.js';
import performOperators from './performOperators.js';
import predictProduct from './predictProduct.js';

const calcQuery = (query) => {
  query = predictProduct(query);
  const numbers = extractNumbers(query);
  const operators = extractOperators(query);
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
