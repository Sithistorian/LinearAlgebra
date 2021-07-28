class Matrix {

  constructor(m = 3, n = 3, filler = 0) {

  this.matrix = this.createMatrix(m, n, filler);

  }

  createMatrix (m = 3, n = 3, filler = 0) {

    let matrix = new Array(m).fill(new Array(n).fill(filler));

    return matrix;
  }

}


module.exports = {

  Matrix

}