const { Matrix } = require('./matrix');

describe('Matrix class', () => {

  let matrix0 = new Matrix();
  let matrix1 = new Matrix(4, 4, 1);
  let matrix2 = new Matrix(5, 6, 2);
  let matrix3 = new Matrix(6, 7, 3);

  test('Default Matrix should be a 3x3 matrix filled with 0s', () => {
    expect(matrix0.matrix).toStrictEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  })

  //getNumberOfRows tests

  test('getNumberOfRows should be a method on Matrix', () => {
    expect(typeof matrix0.getNumberOfRows()).toBe('function');
  })

  test('getNumberOfRows should return correct results', () => {
    expect(matrix0.getNumberOfRows()).toBe(3);
    expect(matrix1.getNumberOfRows()).toBe(4);
    expect(matrix2.getNumberOfRows()).toBe(5);
    expect(matrix3.getNumberOfRows()).toBe(6);
  })

  //getNumberOfColumns tests

  test('getNumberOfColumns should be a method on Matrix', () => {
    expect(typeof matrix0.getNumberOfColumns()).toBe('function');
  })

  test('getNumberOfColumns should return correct results', () => {
    expect(matrix0.getNumberOfColumns()).toBe(3);
    expect(matrix1.getNumberOfColumns()).toBe(4);
    expect(matrix2.getNumberOfColumns()).toBe(6);
    expect(matrix3.getNumberOfColumns()).toBe(7);
  })

  //changeValueAtIndex tests

  test('changeValueAtIndex should be a method on Matrix', () => {
    expect(typeof changeValueAtIndex).toBe('function');
  })

  test('changeValueAtIndex should modify the matrix correctly', () => {
    matrix0.changeValueAtIndex(1, 1, 4);
    expect(matrix0.matrix).toStrictEqual([[4, 0, 0], [0, 0, 0], [0, 0, 0]]);
    matrix0.changeValueAtIndex(1, 1, 0);
    expect(matrix0.matrix).toStrictEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);

  })

  //getValueAtIndex tests

  test('getValueAtIndex should be a method on Matrix', () => {
    expect(typeof matrix0.getValueAtIndex).toBe('function');
  })

  test('getValueAtIndex should return null for i = 0 or j = 0', () => {
    expect(getValueAtIndex(0, 1)).toBeNull();
    expect(getValueAtIndex(1, 0)).toBeNull();
    expect(getValueAtIndex(0, 0)).toBeNull();
  })

  test('getValueAtIndex should return correct results', () => {
    expect(matrix0.getValueAtIndex(1, 1)).toBe(0);
    expect(matrix1.getValueAtIndex(1, 1)).toBe(1);
    expect(matrix2.getValueAtIndex(1, 1)).toBe(2);
    expect(matrix3.getValueAtIndex(1, 1)).toBe(3);
    matrix0.changeValueAtIndex(1, 3, 9);
    expect(matrix0.getValueAtIndex(1, 3)).toBe(9):
  })



})