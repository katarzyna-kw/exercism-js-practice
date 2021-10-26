//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

 export const encode = (str) => {
  return str.replace(/([ \w])\1+/g, (group, char) => group.length + char);
 };

 export const decode = (str) => {
  return str.replace(/(\d+)([ \w])/g, (matched, index, original) => original.repeat(index));
};

console.log(encode("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"))