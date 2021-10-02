export const isPangram = (input) => {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let containsAll = true;
  const deconstructedInput = input.toLowerCase().split('');
  for (let i=0; i < alphabet.length; i++) {
    if (deconstructedInput.includes(alphabet[i]) === false) {
      containsAll = false;
    }
  }
  return containsAll
};