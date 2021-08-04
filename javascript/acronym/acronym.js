//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase) => {
  //turn phrase uppercase
  //replace _ and _
  //split phrase string into array of phrase words and store as phraseArr
  let phraseArr = phrase.toUpperCase().replace('-', ' ').replaceAll('_', ' ').split(' ')
  //create empty array for acronym
  let acronymArr=[]
  //loop through phraseArr
    //for each word push the first letter into acronymArr
  phraseArr.forEach((word) => {
    acronymArr.push(word.charAt(0))
  })
  //turn acronymArr into a string and return
  return acronymArr.join('')
};