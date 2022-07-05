import calcAllSubqueries from './calcAllSubqueries.js';
import charCount from './charCount.js';
import extractNumbers from './extractNumbers.js';
import extractOperators from './extractOperators.js';
import memoize from './memoize.js';
import performOperators from './performOperators.js';
import predictProduct from './predictProduct.js';

const calcQuery = (query) => {
  while (query.endsWith('(')) query = query.slice(0, -1);
  const moreBracketsNeeded = charCount(query, '(') - charCount(query, ')');
  for (let i = 0; i < moreBracketsNeeded; i++) {
    query += ')';
  }
  query = predictProduct(query);
  query = calcAllSubqueries(query);
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
  return numbers.pop()?.toString() || '0';
};

export default memoize(calcQuery);
