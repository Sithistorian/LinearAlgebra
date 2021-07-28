const { Matrix } = require('./matrix');

describe('Matrix class', () => {
  test('Default Matrix should be a 3x3 matrix filled with 0s', () => {
    let matrix = new Matrix().matrix;
    expect(matrix).toStrictEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  })
})