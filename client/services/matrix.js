class Matrix {

  constructor(m = 3, n = 3, filler = 0) {
    this.matrix = this.createMatrix(m, n, filler);
  }

  getNumberOfRows = () => this.matrix.length;

  getNumberOfColumns = () => this.matrix.length && this.matrix[0].length;

  isValidIndex = (i, j) => {
    let rows = this.getNumberOfRows();
    let cols = this.getNumberOfColumns();

    return i > 0 && i <= rows && j > 0 && j <= cols;
  }

  getValueAtIndex = (i, j) => this.isValidIndex(i, j) ? this.matrix[i - 1][j - 1] : null;

  changeValueAtIndex = (i, j, value) => this.isValidIndex(i, j) ? this.matrix[i - 1][j - 1] = value : null;

  testMatrixIdentity (matrix) {



    let thisRows = this.getNumberOfRows();
    let thisColumns = this.getNumberOfColumns();
    let matrixRows = matrix.getNumberOfRows();
    let matrixColumns = matrix.getNumberOfColumns();

    if (matrixRows !== thisRows || matrixColumns !== thisColumns) {
      return false;
    } else {

      for (let i = 0; i < thisRows; i++) {
        for (let j = 0; j < thisColumns; j++){
          if (this.getValueAtIndex(i + 1, j + 1) !== matrix.getValueAtIndex(i + 1, j + 1)) {
            return false;
          }
        }
      }
     return true;
    }
  }

  matrixAddition (matrix) {

    let rows = this.getNumberOfRows();
    let cols = this.getNumberOfColumns();

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let sum1 = this.getValueAtIndex(i + 1,j + 1);
        let sum2 = matrix.getValueAtIndex(i + 1,j + 1);
        this.changeValueAtIndex(i + 1, j + 1, sum1 + sum2);
      }
    }
  }

  matrixSubtraction (matrix) {

    let rows = this.getNumberOfRows();
    let cols = this.getNumberOfColumns();

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let num1 = this.getValueAtIndex(i + 1,j + 1);
        let num2 = matrix.getValueAtIndex(i + 1,j + 1);
        this.changeValueAtIndex(i + 1, j + 1, num1 - num2);
      }
    }
  }

  transpose () {

    let rows = this.getNumberOfRows();
    let cols = this.getNumberOfColumns();
    let copy = JSON.parse(JSON.stringify(this.matrix));

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        this.changeValueAtIndex(i + 1, j + 1, copy[j][i]);
      }
    }

  }

  createMatrix (m = 3, n = 3, filler = 0) {
    let outer = [];
    let inner = new Array(n).fill(filler);

    while (m > 0) {
      outer.push(Array.from(inner));
      m--;
    }

    return outer;
  }
}

let a = new Matrix(4, 4, 1);
a.changeValueAtIndex(1, 2, 3);
a.changeValueAtIndex(1, 3, 3);
a.changeValueAtIndex(1, 4, 3);
a.changeValueAtIndex(2, 4, 3);
a.changeValueAtIndex(2, 3, 3);
a.changeValueAtIndex(3, 4, 3);
a.changeValueAtIndex(2, 1, 4);
a.changeValueAtIndex(3, 1, 4);
a.changeValueAtIndex(3, 2, 4);
a.changeValueAtIndex(4, 1, 4);
a.changeValueAtIndex(4, 2, 4);
a.changeValueAtIndex(4, 3, 4);
console.log(a.transpose(), a.matrix);

module.exports = {

  Matrix

}