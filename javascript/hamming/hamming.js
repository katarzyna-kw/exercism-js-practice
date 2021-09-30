//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (left, right) => {
  let hamming=0;
  if (left === right) return hamming;
  if (left === "") {
    throw Error('left strand must not be empty')
  } else if (right === "") {
    throw Error('right strand must not be empty')
  } else if (left.length !== right.length) {
    throw Error('left and right strands must be of equal length')
  } else {
      for (let i=0; i<left.length; i++) {
        if (left[i] != right[i]) {
          hamming++
        }
      }
      return hamming
    }
  };