//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (str) => {
  let open = [];
  let matches = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  if (str.length===0) {
    return true
  }
  //remove all characters except brackets
  let cleanStr = str.replace(/[\^A-Za-z0-9&\\\*\-\\/\+\.\s]/g, '');

  //loop through cleanStr
  for (let i=0; i<=cleanStr.length; i++) {
    //if char is open, push into open array
    if (cleanStr[i]==='('||cleanStr[i]==='['||cleanStr[i]==='{') {
      open.push(cleanStr[i]);
    } else {
      //else isolate the last opening brace so it can used to compare to obj key
      let last=open.pop();
      if (cleanStr[i] !== matches[last]) {
        return false
      }
    }
  }
  //check if open is empty/no open bracket left
  if (open.length!==0) {
    return false
  }
  return true
}