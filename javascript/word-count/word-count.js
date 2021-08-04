//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (start) => {
  const arr = start.replace(/(\r\n|\n|\r|(?!'\b)\W+)/gm, " ").toLowerCase().trim().split(' ')
  const newArr = arr.reduce(function(obj, letter) {
    if (!obj[letter]) {
      obj[letter]=1
    } else {
      obj[letter]++
    }
    return obj
  }, 
  {})
  return newArr
}