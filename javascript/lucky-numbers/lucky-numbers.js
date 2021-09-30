// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const sum1=array1.map(value=>String(value)).join('')
  const sum2=array2.map(value=>String(value)).join('')
  return Number(sum1)+Number(sum2)
  ;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const str=String(value)
  const reverseStr=str.split('').reverse().join('')
  return str===reverseStr ? true : false
  ;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */


 //If the user did not provide any input, errorMessage should return 'Required field'. If the input does not represent a non-zero number (according to the JavaScript conversion rules), 'Must be a number besides 0' should be returned. In all other cases you can assume the input is valid, the return value should be an empty string.


export function errorMessage(input) {
  return (input==="" || input == undefined || input == null) ? "Required field" : (!Number(input)) ? "Must be a number besides 0"
  : ""
}