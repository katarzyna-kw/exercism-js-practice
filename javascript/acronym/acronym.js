//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase) => {

  let phraseArr = phrase.toUpperCase().replace('-', ' ').replaceAll('_', ' ').split(' ')
  let acronymArr=[]
  phraseArr.forEach((word) => {
    acronymArr.push(word.charAt(0))
  })
  return acronymArr.join('')
};