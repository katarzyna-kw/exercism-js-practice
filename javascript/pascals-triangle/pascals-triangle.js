//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (numOfRows) => {
  if (numOfRows===0) return []
  if (numOfRows===1) return [[1]]
  let outerArr=[]
  for (let row=1; row<=numOfRows; row++) {
    let arr=[]
    for (let col=0; col<row; col++) {
      if (col===0 || col===row-1) {
        arr.push(1)
      } else {
        arr.push(outerArr[row-2][col-1]+outerArr[row-2][col])
      }
    }
    outerArr.push(arr)
  }
  return outerArr
} 