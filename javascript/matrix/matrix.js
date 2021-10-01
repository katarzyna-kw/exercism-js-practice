//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
    //split string into array of substrings
    ///map over and split each substring into its own array
    //map over and change substring value within its own array to numeric value within its own array
    this.rowArray = matrix.split('\n').map(row => row.split(' ').map(item => +item));
  }

  get rows() {
    return this.rowArray;
    ;
  }

  get columns() {
    const columnArray = this.rowArray[0].map((item, index) => this.rowArray.map(row => row[index]));

    return columnArray;
    }
 }