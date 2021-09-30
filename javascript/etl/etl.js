//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldObj) => {
    let newObj = {}
    for (let key in oldObj) {
        for (let letter of oldObj[key]) {
            newObj[letter.toLowerCase()]=Number(key)
        }
    }
    return newObj
}
