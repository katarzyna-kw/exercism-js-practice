//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const CODES= {
  "Methionine": ["AUG"],
  "Phenylalanine": ["UUU", "UUC"],
  "Leucine": ["UUA", "UUG"],
  "Serine": ["UCU", "UCC", "UCA", "UCG"],
  "Tyrosine": ["UAU", "UAC"],
  "Cysteine": ["UGU", "UGC"],
  "Tryptophan": ["UGG"],
  "STOP": ["UAA", "UAG", "UGA"]
}

//helper function for chunking into thirds
const chunker = (str, num) => {
  let chunkedArr=[]
  for (let i=0; i<str.length; i+=num) {
    chunkedArr.push(str.substring(i, i+num))
  }
  return chunkedArr
}

 export const translate = (str) => {
  if (str===undefined || str.length<0) {
    return []
  }
  let result=[]
  let arr=chunker(str, 3)

  for (let el of arr) {
    if (el.length!==3) {
      throw new Error('Invalid codon')
    }
    for (let key in CODES) {
      if (CODES[key].includes(el)) {
        if (key==="STOP") {
          return result
        } else {
          result.push(key)
        }
      }
      }
    }
    if (result.length>0) return result
    else throw Error('Invalid codon')
  }