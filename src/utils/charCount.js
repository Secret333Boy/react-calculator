const charCount = (str, char) =>
  str.split('').reduce((acc, el) => (el === char ? acc + 1 : acc), 0);
export default charCount;
