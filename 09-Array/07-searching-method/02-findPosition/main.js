const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];

/* Do myself
//Method 1
let newArr = [];

for(let i = 0; i < alphabets.length ; i++) {
  if(alphabets[i] == "a") {
    newArr.push(i)
  }
}

console.log(newArr)
*/


/* Do myself
// Method 2
let answerArr = []

let newArr = alphabets.filter(function(item, index, array) {
  
  if(item === "a") {
    answerArr.push(index)
    return true
  }
}) 


console.log(newArr)
console.log(answerArr)
*/

// Answer
let result = []
let foundIndex = alphabets.indexOf("a");

do {

  if(foundIndex != -1) {
    result.push(foundIndex)
    foundIndex = alphabets.indexOf("a", foundIndex+1)
  }
} while(foundIndex != -1)

console.log(result)