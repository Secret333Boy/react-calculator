const signRegex = /[+\x\-÷]/;
const extractNumbers = (query) =>
  query
    .split(new RegExp(signRegex))
    .map((str) =>
      str === '' ? NaN : str.endsWith('%') ? +str.replace('%', '') / 100 : +str
    );

export default extractNumbers;
