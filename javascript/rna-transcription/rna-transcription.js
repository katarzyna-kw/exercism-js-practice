//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const letterRemix = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
}

export const toRna = (dnaSeq) => {
  let rnaSeq = '';
  for (let dnaLetter of dnaSeq) {
    for (let key in letterRemix) {
      if (dnaLetter === key) {
        rnaSeq+=letterRemix[key]
      }
    }
  }
  return rnaSeq
};