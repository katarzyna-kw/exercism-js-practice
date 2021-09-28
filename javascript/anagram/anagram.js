//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (str, arr) => {
  const anagrams = []

  const sortStr = [...str.toLowerCase()].sort().join('');
  
  for (const word of arr) {
    if (word.toLowerCase() !== str.toLowerCase()) {
      let newWord = [...word.toLowerCase()].sort().join('');
      if (newWord === sortStr) {
      anagrams.push(word)
      }
    }
  }
  return anagrams
};