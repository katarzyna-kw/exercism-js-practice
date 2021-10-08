//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//refactor with ternary operator

export const convert = (num) => {
  let sound = '';
  num % 3 === 0 ? sound+='Pling' : ''
  num % 5 === 0 ? sound+='Plang' : ''
  num % 7 === 0 ? sound+='Plong' : ''
  sound === '' ? sound+=num : ''
  return sound
};