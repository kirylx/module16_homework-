// TODO: Input X and get Y using the specified expression. Use test case: X = 10, Y = 12.5344..

const expression = function mathExpressionWhereXVaries(x) {
  if (typeof (x) === 'bigint') {
    throw new Error('Big numbers are not permitted');
  }
  return ((4 * x ** 2 + 18 - 23 * x) / ((5 / 9) * x + 18 * (x ** 3 / 33) * x)) + x * (15 / 12);
};

export default expression;
