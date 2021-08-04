//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (num) => {

  //set numOfSteps as 0
  let numOfSteps=0;

  //set new variable newVal equal to num to track changes to num
  let newVal=num;

  //if newVal is less than or equal to 0, throw error
  if (newVal<=0) {
    throw new Error('Only positive numbers are allowed')
  }

  //while newVal !== 1
    //if newVal is even is true, newVal = newVal / 2
    //if false, newVal = newVal * 3 + 1
    //increment numOfSteps
  while (newVal !== 1) {
    newVal%2===0 ? newVal=newVal/2 : newVal = newVal*3+1
    numOfSteps++
  }

  //return numOfSteps
  return numOfSteps;
};