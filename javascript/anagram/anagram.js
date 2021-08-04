//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (str, arr) => {
  // create array to hold anagrams
  const anagrams = []

  //turn str into a string that can be compared to each word in arr
    //split str into array of letters
    //letters to lowercase
    //sort letters
    //join array of sorted lowercase letters into string
    //store as sortStr
  const sortStr = [...str.toLowerCase()].sort().join('');
  
  //loop through arr
    //check if lowercase word is NOT equal to lowercase str
      //if true, turn word lowercase, sort, join; store in variable newWord
      //if sortStr and newWord are === push word into anagrams
  //return anagrams array

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