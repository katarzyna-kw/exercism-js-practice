//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

 export const clean = (input) => {
  //remove (, ), -, ., and empty spaces with regex before checking if over 11

  // const cleanInput = input.replace(/[[\[\]\-\.\(\)\s\\+]/g, '').replace(/^1+/g, '')

  let cleanInput = input.replace(/[[\[\]\-\.\(\)\s\\+]/g, '')

  //input length is less than or equal to 9
  if (input.length<=9) {
    throw new Error('Incorrect number of digits')
  }

  //check if cleanInput includes letters
  let regExpLetters = /[A-Za-z]/g
  if (regExpLetters.test(cleanInput)) {
    throw 'Letters not permitted'
  }

  //check if cleanInput includes punctuation
  let regExpPunct = /[@:!-]/g
  if (regExpPunct.test(cleanInput)) {
    throw 'Punctuations not permitted'
  }

  //error if over 11 characters
  if (cleanInput.length>11) {
    throw new Error('More than 11 digits');
  }

  //if 11 characters and begins with 1, remove first char
  if (cleanInput.length === 11 && cleanInput[0] == 1) {
    cleanInput = cleanInput.replace('1', '');
    console.log(cleanInput)
  }

  //if 11 characters and first char is not 1, error
  if (cleanInput.length === 11 && cleanInput[0] !== 1) {
    throw '11 digits must start with 1'
  }

  //if first char of area code is 0, throw error
  if (cleanInput[0] == 0) {
    throw 'Area code cannot start with zero'
  }

  //if first char of exchange code is 0, throw error
  if (cleanInput[3] == 0) {
    throw 'Exchange code cannot start with zero'
  }

  //if first char of exchange code is 1, throw error
  if (cleanInput[3] == 1) {
    throw 'Exchange code cannot start with one'
  }

  //if first char of area code is 1, throw error
  if (cleanInput[0] == 1) {
    throw 'Area code cannot start with one'
  }

  return cleanInput
};