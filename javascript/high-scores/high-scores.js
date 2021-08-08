//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(input) {
    this.input = input;
  }

  get scores() {
    return this.input;
  }

  get latest() {
    return this.input[this.input.length - 1]
  }

  get personalBest() {
    //sort array in descending order using sort method with compare function to work properly for integers
    //return sortedArray
    this.sortedArray = this.input.sort((a, b) => b - a);
    return this.sortedArray[0]
  }

  get personalTopThree() {
    //sort array in descending order
    //create topScores array
    //push first sorted item to topScores
    //if 2nd item exist, push to topScores
    //if 3rd item exists, push to topScores
    //return topScores
    this.sortedArray = this.input.sort((a, b) => b - a);
    this.topScores = []
    this.topScores.push(this.sortedArray[0])
    if (this.sortedArray[1]) this.topScores.push(this.sortedArray[1])
    if (this.sortedArray[2]) this.topScores.push(this.sortedArray[2])
    return this.topScores
  }
}