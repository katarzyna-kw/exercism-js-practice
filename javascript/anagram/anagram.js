//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//helper function sort letters and create sorted str for comparison
const sortStr = (str) => [...str.toLowerCase()].sort().join('');

export const findAnagrams = (str, arr) => {
  const anagrams = []

  const sortedStr = sortStr(str)
  
  for (const word of arr) {
    if (word.toLowerCase() !== str.toLowerCase()) {
      let sortedWord = sortStr(word)
      if (sortedWord === sortedStr) {
        anagrams.push(word)
      }
    }
  }
  return anagrams
};