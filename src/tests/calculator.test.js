const { toNums, add, sub, mul, div } = require('../calculator')

describe('calculator functions', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(add([2,3])).toBe(5)
  })

  test('subtraction: 10 - 4 = 6', () => {
    expect(sub([10,4])).toBe(6)
  })

  test('multiplication: 45 * 2 = 90', () => {
    expect(mul([45,2])).toBe(90)
  })

  test('division: 20 / 5 = 4', () => {
    expect(div([20,5])).toBe(4)
  })

  test('addition with multiple args: add 1 2 3 => 6', () => {
    expect(add([1,2,3])).toBe(6)
  })

  test('sub with single arg returns the arg', () => {
    expect(sub([7])).toBe(7)
  })

  test('mul with no args returns 1 (identity)', () => {
    expect(mul([])).toBe(1)
  })

  test('div with no args returns NaN', () => {
    expect(Number.isNaN(div([]))).toBe(true)
  })

  test('division by zero throws', () => {
    expect(() => div([10,0])).toThrow(/division by zero/)
  })

  test('toNums converts strings to numbers or throws on invalid', () => {
    expect(toNums(['1','2','3'])).toEqual([1,2,3])
    expect(() => toNums(['a'])).toThrow(/Invalid number/)
  })
})
