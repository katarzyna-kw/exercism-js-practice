export const isPangram = (input) => {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const deconstructedInput = input.toLowerCase().split('');
  for (let i=0; i < alphabet.length; i++) {
    if (deconstructedInput.includes(alphabet[i]) === false) {
      return false;
    }
  }
  return true
};


 
//refactor with .every


//create const array holding alphabet letters to compare input parameter with
//function with input as parameter
//store split input into array of letters with .split('') in new variable
//make split input variable lowercase with .toLowerCase()
//compare split input array with array of alphabet
//if one element/letter of alphabet is not in split input array return false
//else return true

// export const isPangram = (input) => {
//   const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//   let deconstructedInput = input.toLowerCase().split('');
//   if (alphabet.every((letter) => deconstructedInput.includes(letter)) === false) {
//     return false;
//   }
//   return true;
// }

// console.log(isPangram('InPut'));