//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (str) => {
  //create an obj to store matches
  const matches = {
    '[':']',
    '{':'}',
    '(':')'
  }
  //create array to store open brackets from str
  const open=[]

  //place all brackets in str into array
  const allBrackets=str.match(/[([{}\])]/g) || [];

  //isolate open into array
  for (let i=0; i<allBrackets.length; i++) {
    if (allBrackets[i]==='[' || allBrackets[i]==='{' || allBrackets[i]==='(') {
      open.push(allBrackets[i])
    } else {
      //when str[i] is closed, compare it to the last open bracket to see if they match
        let last=open.pop()
        if (matches[last]!==allBrackets[i]) return false
    }
  }

  if (open.length!==0) {
    return false
  }

  return true

}