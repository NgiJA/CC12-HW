const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 }
];

// Do myself
/*
const result = inventory.filter(item => item.name === "cherries")

console.log(result[0])
*/

// Answer 1
/*
let matchIndex = inventory.findIndex(item => item.name == "cherries")
console.log(matchIndex)

let foundObj = inventory[matchIndex]
console.log(foundObj)
*/

// Answer 2
/*
let foundObj = inventory.find(item => item.name == "cherries")
console.log(foundObj)
*/