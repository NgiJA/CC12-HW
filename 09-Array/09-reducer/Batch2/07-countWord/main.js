let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];

let result = names.reduce(function(acc, item) {
  // Do logic

  // ADD Property to Object
  let currentKey = acc[item]
  if(!currentKey) {
    acc[item] = 1
  } else {
    acc[item] = acc[item] + 1
  }
  /*
    IF current name already exist
      ADD value + 1
    ELSE
      ADD new Property and SET value = 1
  */

  // return accumulator for Next Loop
  
  return acc
},{})

console.log(result)