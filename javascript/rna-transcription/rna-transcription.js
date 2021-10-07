//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const RNA_TO_DNA= {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
}

export const toRna = (dnaSeq) => {
  let rnaSeq = '';
  for (let dnaLetter of dnaSeq) {
    for (let key in RNA_TO_DNA) {
      if (dnaLetter === key) {
        rnaSeq+=RNA_TO_DNA[key]
      }
    }
  }
  return rnaSeq
};