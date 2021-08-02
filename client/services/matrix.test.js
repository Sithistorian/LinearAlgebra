const { Matrix } = require('./matrix');

describe('Matrix class', () => {

  let default = new Matrix();
  let matrix1 = new Matrix(4, 4, 1);
  let matrix2 = new Matrix(5, 6, 2);
  let matrix3 = new Matrix(6, 7, 3);

  test('Default Matrix should be a 3x3 matrix filled with 0s', () => {
    expect(defaultMatrix.matrix).toStrictEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  })

  //getNumberOfRows tests

  test('getNumberOfRows should be a method on Matrix', () => {
    expect(typeof defaultMatrix.getNumberOfRows).toBe('function');
  })

  test('getNumberOfRows should return correct results', () => {
    expect(defaultMatrix.getNumberOfRows()).toBe(3);
    expect(matrix1.getNumberOfRows()).toBe(4);
    expect(matrix2.getNumberOfRows()).toBe(5);
    expect(matrix3.getNumberOfRows()).toBe(6);
  })

  //getNumberOfColumns tests

  test('getNumberOfColumns should be a method on Matrix', () => {
    expect(typeof defaultMatrix.getNumberOfColumns).toBe('function');
  })

  test('getNumberOfColumns should return correct results', () => {
    expect(defaultMatrix.getNumberOfColumns()).toBe(3);
    expect(matrix1.getNumberOfColumns()).toBe(4);
    expect(matrix2.getNumberOfColumns()).toBe(6);
    expect(matrix3.getNumberOfColumns()).toBe(7);
  })

  //changeValueAtIndex tests

  test('changeValueAtIndex should be a method on Matrix', () => {
    expect(typeof defaultMatrix.changeValueAtIndex).toBe('function');
  })

  test('changeValueAtIndex should modify the matrix correctly', () => {
    defaultMatrix.changeValueAtIndex(1, 1, 4);
    expect(defaultMatrix.matrix).toStrictEqual([[4, 0, 0], [0, 0, 0], [0, 0, 0]]);
    defaultMatrix.changeValueAtIndex(1, 1, 0);
    expect(defaultMatrix.matrix).toStrictEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);

  })

  //getValueAtIndex tests

  test('getValueAtIndex should be a method on Matrix', () => {
    expect(typeof defaultMatrix.getValueAtIndex).toBe('function');
  })

  test('getValueAtIndex should return null for i = 0 or j = 0', () => {
    expect(defaultMatrix.getValueAtIndex(0, 1)).toBeNull();
    expect(defaultMatrix.getValueAtIndex(1, 0)).toBeNull();
    expect(defaultMatrix.getValueAtIndex(0, 0)).toBeNull();
  })

  test('getValueAtIndex should return null for i or j out of bounds', () => {
    expect(defaultMatrix.getValueAtIndex(5, 1)).toBeNull();
    expect(defaultMatrix.getValueAtIndex(1, 5)).toBeNull();
    expect(defaultMatrix.getValueAtIndex(5, 5)).toBeNull();
  })

  test('getValueAtIndex should return correct results', () => {
    expect(defaultMatrix.getValueAtIndex(1, 1)).toBe(0);
    expect(matrix1.getValueAtIndex(1, 1)).toBe(1);
    expect(matrix2.getValueAtIndex(1, 1)).toBe(2);
    expect(matrix3.getValueAtIndex(1, 1)).toBe(3);
    defaultMatrix.changeValueAtIndex(1, 3, 9);
    expect(defaultMatrix.getValueAtIndex(1, 3)).toBe(9);
  })
})