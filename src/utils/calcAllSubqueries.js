import calcQuery from './calcQuery.js';
// eslint-disable-next-line sonarjs/cognitive-complexity
const calcAllSubqueries = (query) => {
  for (let i = 0; i < query.length; i++) {
    if (query[i] === '(') {
      let subquery = '';
      let n = 1;
      let j = i + 1;
      for (j; j < query.length; j++) {
        if (query[j] === '(') n++;
        if (query[j] === ')') {
          n--;
          if (n === 0) break;
        }
        subquery += query[j];
      }
      query = query.replace(query.substring(i, j + 1), calcQuery(subquery));
      i = 0;
    }
  }
  return query;
};

export default calcAllSubqueries;
