const array = [29, 17, 13, 47, 23, 31];

let sum = 0;

array.forEach(function(item, index, array) {
  sum = sum + item
  // console.log(item)
})

console.log(sum)