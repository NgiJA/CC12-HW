let str = 'I live in Thailand';

/*
DO lowercase
DO split by "" //array
FOR every item of arr
  IF item isn't white space
*/

let lowercase = str.toLowerCase()
const arrChar = lowercase.split("")

const result = arrChar.reduce(function(acc, item) {

  if(item.trim() != " ") {
    
    let foundValue = acc[item] // acc["i"], acc["l"]
    
    if(foundValue) {
      acc[item] += 1
    } else {
      acc[item] = 1
    }
  
  }


  return acc
},{})

console.log(result)