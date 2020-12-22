/* eslint-disable */

import expression from '../16.2';

describe('basic expression tests', () => {
  const x = 10;
  it(`should return close to 12.5344 while input is ${x}`, () => {
    expect(expression(x)).toBeCloseTo(12.5344);
    expect(expression(x)).not.toBeNaN();
    
  });
  it('should return NaN while input is string', () => {
    expect(expression("string")).toBeNaN();
  });
  it('should throw error while input is any big number', () => {
    expect(() => {expression(BigInt(x))}).toThrowError();
  });
});
