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

module.exports = {

  Matrix

}