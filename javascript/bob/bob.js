//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {

  const question = message => /[\?$]/g.test(message.trim())
  const allcaps = message =>  /[A-Z]+/g.test(message) && message === message.toUpperCase();
  const empty = message => /[^\s*$]/g.test(message);

  if (question(message) && allcaps(message)) return "Calm down, I know what I'm doing!"
  if (question(message)) {
    return 'Sure.'
  }
  if (allcaps(message)) {
    return 'Whoa, chill out!'
  }
  if (empty(message)) {
    return 'Fine. Be that way!'
  } else {
    return 'Whatever.'
  }