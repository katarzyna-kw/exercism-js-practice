//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  let reply=''
  //remove whitespaces
  let msg=message.replace(/[\s]/g, '')
  //if msg is blank without whitespace, reply "Fine..."
  if (msg.length===0) {
    reply="Fine. Be that way!"
  } else {
    //else, check for and remove numbers and special characters if they exist
    let msg=message.replace(/[0-9\,\'\^%:)(*@#$(\s]/g, '')
    console.log('msg after no spec: ', msg)
    //if msg is blank without numbers, reply "W/e"
    if (msg.length===0) {
      reply="Whatever."
    //if msg only contains ? (no other char), reply "W/e" b/c no need to checkout for allcaps
    } else if (msg.length===1) {
      reply="Sure."
    // msg is NOT blank after removing whitespace and special char, check for end ?
    } else {
      //else check if ends with ?
      if ((msg[msg.length-1])==="?") {
        //check if ? is only char
        if (msg.length===1) {
          //if yes, reply "Sure."
          reply="Sure."
        } else {
          //else check if allcaps
            //create letters array for storing all letters
            //loop through msg and push letters into letters array
            //join letters array and store as isCaps str
            //else reply "Sure"
            let letters=[]
            for (let i=0; i<msg.length-1; i++) {
              letters.push(msg[i])
            }
            let isCaps=letters.join('');
            //if isCaps is allcaps, reply "Calm down..."
            if (isCaps===isCaps.toUpperCase()) {
              reply="Calm down, I know what I'm doing!"
              //else (? and not allcaps), reply "Sure."
            } else {
              reply="Sure."
            }
          }
        //DOES NOT end with ? so check if allcaps
        } else {
          //create charArray to store letters
          //loop through msg str and push each char into charArray
          //join charArray into isAllCaps string
          let charArray=[]
          for (let i=0; i<msg.length-1; i++) {
            charArray.push(msg[i])
          }
          let isAllCaps=charArray.join('');
          //if is allcaps, reply "Whoa..."
          if (isAllCaps==isAllCaps.toUpperCase()) {
            reply="Whoa, chill out!"
          //else (no ?, not allcaps, not blank)
          } else {
            reply="Whatever."
          }
        }
      }
    }
  return reply;
  };