const signs = ['x', '÷', '+', '-'];
const extractOperators = (query) =>
  query.split('').filter((char) => signs.includes(char));

export default extractOperators;
