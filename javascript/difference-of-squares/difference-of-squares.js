//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(num) {
    this.num = num;
  }

  get sumOfSquares() {
    //store total as 0
    let total=0;
    //loop through num
        //square each value (multiply by itself)
        //add all of squared values together and store as total
    for (let i=0; i<=this.num; i++) {
      total+=i*i
    }
    //return total
    return total
  }

  get squareOfSum() {
    //store total as 0
    let total=0;
    //loop through num
      //add all of values together to get sum and store as total
    for (let i=0; i<=this.num; i++) {
      total+=i
    }
    //return squared total (total * total)
    return total*total
  }


  get difference() {
    //subtract sumOf from squareOf & return it
    return this.squareOfSum-this.sumOfSquares;
  }
};