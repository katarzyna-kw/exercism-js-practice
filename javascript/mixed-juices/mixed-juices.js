// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let minutes;
  switch (name) {
    case 'Pure Strawberry Joy':
      minutes=0.5;
      break;
    case 'Energizer':
      minutes=1.5;
      break;
    case 'Green Garden':
      minutes=1.5;
      break;
    case 'Tropical Island':
      minutes=3;
      break;
    case 'All or Nothing': 
      minutes=5;
      break;
    default:
      minutes=2.5;
  }
  return minutes
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let i=0
  while (wedgesNeeded>0) {
    if (limes[i]=='small') {
        wedgesNeeded=wedgesNeeded-6
        i++
      }
      if (limes[i]=='medium') {
        wedgesNeeded=wedgesNeeded-8
        i++
      }
      if (limes[i]=='large') {
        wedgesNeeded=wedgesNeeded-10
        i++
      }
      if (i>=limes.length) {
        break;
      }
    }
    return i
  }

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */

export function remainingOrders(timeLeft, orders) {
  do {
    let currentDrink=orders.shift()
    timeLeft-=timeToMixJuice(currentDrink)
  } while (timeLeft>0);
  return orders
}
