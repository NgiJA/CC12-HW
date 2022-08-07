const nums = [7, 9, -5, -1, 0, 3];

/*
// Do myself
const findNum = nums.filter(item => item < 0)
console.log(findNum[0])
*/

//Answer
let result = nums.find(function(item, index, array) {
  return item < 0
})

console.log(result)