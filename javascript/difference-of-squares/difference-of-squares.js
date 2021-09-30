//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(num) {
    this.num = num;
  }

  get sumOfSquares() {
    let total=0
    for (let i=1; i<this.num+1; i++) {
      total+=i*i
    }
    return total
  }

  get squareOfSum() {
    let total=0 
    for (let i=1; i<this.num+1; i++) {
      total+=i
    }
    return total * total
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares
  }
}