export const colors = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
]

export const decodedValue = ([color1, color2]) => {
  const index1 = colors.indexOf(color1)
  const index2 = colors.indexOf(color2)
  return parseInt(index1 + '' + index2)
};