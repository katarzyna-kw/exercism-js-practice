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
    this.sortedArray = this.input.sort((a, b) => b - a);
    return this.sortedArray[0]
  }

  get personalTopThree() {
    this.sortedArray = this.input.sort((a, b) => b - a);
    this.topScores = []
    this.topScores.push(this.sortedArray[0])
    if (this.sortedArray[1]) this.topScores.push(this.sortedArray[1])
    if (this.sortedArray[2]) this.topScores.push(this.sortedArray[2])
    return this.topScores
  }
}