//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

 export const isIsogram = (input) => {
  let inputArray = input.toLowerCase().replaceAll('-', '').replaceAll(' ', '').split('');
  return inputArray.every((letter, index) => inputArray.indexOf(letter) === index)
};