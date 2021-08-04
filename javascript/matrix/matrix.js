//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


class Matrix {
  constructor(matrix) {
    this.matrix = matrix;

    this.rowArray = this.matrix.split('\n').map(row => row.split(' ').map(num => +num))
  }

  get rows() {
    return this.rowArray

  }

  get columns() {

    this.columnArray = this.rowArray[0].map((item,  index) => this.rowArray.map(row => row[index]))

    return this.columnArray;
  }
}





