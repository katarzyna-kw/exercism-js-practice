//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (num) => {
  let steps = 0;
  let ans = num;

  if (num <= 0) {
    throw Error('Only positive numbers are allowed')
  }

  while (ans !== 1) {
    if (ans % 2 === 0) {
      ans = ans / 2;
    } else {
      ans = ans * 3 + 1;
    }
    steps++;
  }
  return steps;
}