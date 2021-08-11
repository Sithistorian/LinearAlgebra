const { Matrix } = require('./matrix');

describe('Matrix class', () => {

    let matrix0 = new Matrix();
    let matrix1 = new Matrix(4, 4, 1);
    let matrix2 = new Matrix(5, 6, 2);
    let matrix3 = new Matrix(6, 7, 3);

    let matrix4 = new Matrix(4, 4, 0);

    matrix4.changeValueAtIndex(1, 1, 8);
    matrix4.changeValueAtIndex(2, 2, 8);
    matrix4.changeValueAtIndex(3, 3, 8);
    matrix4.changeValueAtIndex(4, 4, 8);




  test('Matrix0 should be a 3x3 matrix filled with 0s', () => {
    expect(matrix0.matrix).toStrictEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  })

  //getNumberOfRows tests

  test('getNumberOfRows should be a method on Matrix', () => {
    expect(typeof matrix0.getNumberOfRows).toBe('function');
  })

  test('getNumberOfRows should return correct results', () => {
    expect(matrix0.getNumberOfRows()).toBe(3);
    expect(matrix1.getNumberOfRows()).toBe(4);
    expect(matrix2.getNumberOfRows()).toBe(5);
    expect(matrix3.getNumberOfRows()).toBe(6);
  })

  //getNumberOfColumns tests

  test('getNumberOfColumns should be a method on Matrix', () => {
    expect(typeof matrix0.getNumberOfColumns).toBe('function');
  })

  test('getNumberOfColumns should return correct results', () => {
    expect(matrix0.getNumberOfColumns()).toBe(3);
    expect(matrix1.getNumberOfColumns()).toBe(4);
    expect(matrix2.getNumberOfColumns()).toBe(6);
    expect(matrix3.getNumberOfColumns()).toBe(7);
  })

  //changeValueAtIndex tests

  test('changeValueAtIndex should be a method on Matrix', () => {
    expect(typeof matrix0.changeValueAtIndex).toBe('function');
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
    expect(matrix0.getValueAtIndex(0, 1)).toBeNull();
    expect(matrix0.getValueAtIndex(1, 0)).toBeNull();
    expect(matrix0.getValueAtIndex(0, 0)).toBeNull();
  })

  test('getValueAtIndex should return null for i or j out of bounds', () => {
    expect(matrix0.getValueAtIndex(5, 1)).toBeNull();
    expect(matrix0.getValueAtIndex(1, 5)).toBeNull();
    expect(matrix0.getValueAtIndex(5, 5)).toBeNull();
  })

  test('getValueAtIndex should return correct results', () => {
    expect(matrix0.getValueAtIndex(1, 1)).toBe(0);
    expect(matrix1.getValueAtIndex(1, 1)).toBe(1);
    expect(matrix2.getValueAtIndex(1, 1)).toBe(2);
    expect(matrix3.getValueAtIndex(1, 1)).toBe(3);
    matrix0.changeValueAtIndex(1, 3, 9);
    expect(matrix0.getValueAtIndex(1, 3)).toBe(9);
    matrix0.changeValueAtIndex(1, 3, 0);
  })

  //Tests for Matrix identity

  test('testMatrixIdentity should show that two empty matricies [] and [] are identical', () => {
    let a = new Matrix(0, 0);
    let b = new Matrix(0, 0)
    expect(a.testMatrixIdentity(b)).toBe(true);
  })

  test('testMatrixIdentity should return false for matricies of different sizes', () => {
    expect(matrix0.testMatrixIdentity(matrix1)).toBe(false);
    expect(matrix1.testMatrixIdentity(matrix3)).toBe(false);
  })

  test('testMatrixIdentity should get the correct results', () => {
    expect(matrix0.testMatrixIdentity(matrix0)).toBe(true);

    let a = new Matrix(4, 4, 0);
    a.changeValueAtIndex(1, 1, 8);
    a.changeValueAtIndex(2, 2, 8);
    a.changeValueAtIndex(3, 3, 8);
    a.changeValueAtIndex(4, 4, 8);

    expect(matrix4.testMatrixIdentity(a)).toBe(true);

    a.changeValueAtIndex(1, 2, 3);

    expect(matrix4.testMatrixIdentity(a)).toBe(false);

    let b = new Matrix(4, 4, 0);
    b.changeValueAtIndex(1, 1, 8);
    b.changeValueAtIndex(2, 2, 8);
    b.changeValueAtIndex(3, 3, 8);
    b.changeValueAtIndex(4, 4, 8);
    b.changeValueAtIndex(1, 2, 3);

    expect(a.testMatrixIdentity(b)).toBe(true);

  })

  //Tests for Matrix Addition

  test('matrixAddition should be a method on matrix', () => {
    expect(typeof matrix0.matrixAddition).toBe('function');
  });

  test('matrixAddition should get the correct results', () => {

    matrix0.matrixAddition(matrix0);

    expect(matrix0.matrix).toStrictEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);

    let a = new Matrix(4, 4, 2);

    matrix1.matrixAddition(matrix1);

    expect(matrix1.matrix).toStrictEqual(a.matrix);

    a.changeValueAtIndex(1, 1, 5);
    a.changeValueAtIndex(1, 2, 6);
    a.matrixAddition(matrix1)

    console.log('Here:', a.matrix, matrix1)
    expect(a.matrix).toStrictEqual([[7, 8, 4, 4], [4, 4, 4, 4], [4, 4, 4, 4], [4, 4, 4, 4]])
    matrix1 = new Matrix(4, 4, 1);
  })

  //Tests for Matrix Subtraction

  test('matrixSubtraction should be a method on matrix', () => {
    expect(typeof matrix0.matrixSubtraction).toBe('function');
  });

  test('matrixSubtraction should get the correct results', () => {
    expect(matrix0.matrixSubtraction(matrix0)).toStrictEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    let a = new Matrix(4, 4, 0);
    expect(matrix1.matrixSubtraction(matrix1)).toStrictEqual(a);
    a.changeValueAtIndex(1, 1, 5);
    a.changeValueAtIndex(1, 2, 6);
    expect(a.matrixSubtraction(matrix1)).toStrictEqual([[4, 5, -1, -1], [-1, -1, -1, -1], [-1, -1, -1, -1], [-1, -1, -1, -1]])
    expect(matrix1.matrixSubtraction(a)).toStrictEqual([[-4, -5, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]])
  })

  //Tests for Matrix Transposition

  test('transposeMatrix should be a method on Matrix', () => {
    expect(typeof matrix0.transposeMatrix).toBe('function');
  })

  test('transposeMatrix should get the correct results', () => {

    let a = new Matrix(4, 4, 1);
    a.changeValueAtIndex(1, 2, 2);
    a.changeValueAtIndex(1, 3, 3);
    a.changeValueAtIndex(1, 4, 4);
    a.changeValueAtIndex(2, 1, 5);
    a.changeValueAtIndex(2, 3, 6);
    a.changeValueAtIndex(2, 4, 7);
    a.changeValueAtIndex(3, 1, 8);
    a.changeValueAtIndex(3, 2, 9);
    a.changeValueAtIndex(3, 4, 10);
    a.changeValueAtIndex(4, 1, 11);
    a.changeValueAtIndex(4, 2, 12);
    a.changeValueAtIndex(4, 3, 13);


    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        expect(a.getValueAtIndex(i + 1, j + 1)).toBe(a.transpose.getValueAtIndex(j + 1, i + 1));
      }
    }
  })
})