//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


 export const isArmstrongNumber = (num) => {
  if (Math.pow(num, num.toString().length)===num) return true
  let numStr=num.toString();
  let sum=0;
  for (let i=0; i<numStr.length; i++) {
    sum+=Math.pow(Number(numStr[i]), numStr.length)
  }
  return sum===num
};