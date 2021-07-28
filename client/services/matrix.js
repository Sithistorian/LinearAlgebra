class Matrix {

  constructor(m = 3, n = 3, filler = 0) {

  this.matrix = this.createMatrix(m, n, filler);

  }

  createMatrix (m = 3, n = 3, filler = 0) {
    //input number of rows, number of columns and filler
    let matrix = new Array(m).fill(new Array(n).fill(filler));

    return matrix

    //output array of arrays
  }

}


module.exports = {

  Matrix

}