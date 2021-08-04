//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const classify = (num) => {
  if (num===0 || num<0) throw new Error('Classification is only possible for natural numbers.');
  //store total as 0
  let total=0;
  //find factors of num -- no remainder
  //loop through num
    //if num is divisible by i, add to total
  for (let i=0; i<=num; i++) {
    if (num%i===0 && i !== num) {
      total+=i
    }
  }
  if (num === total) return "perfect"
  if (total>num) return "abundant"
  if (total<num) return "deficient"
};