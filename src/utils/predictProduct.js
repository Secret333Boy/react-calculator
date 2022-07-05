const predictProduct = (query) => {
  for (let i = 0; i < query.length; i++) {
    if (
      (['%', ')'].includes(query[i]) && query[i + 1]?.match(/\d/)) ||
      (query[i].match(/\d/) && query[i + 1] === '(')
    ) {
      query = query.split('');
      query.splice(i + 1, 0, 'x');
      query = query.join('');
      i++;
    }
  }
  return query;
};

export default predictProduct;
