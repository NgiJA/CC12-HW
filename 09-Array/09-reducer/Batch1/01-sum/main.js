const nums = [-3, 2, 11, -7, 4, 6];

const multiply = nums.reduce(function(acc,item) {
  return acc = item * acc
}, 1)

console.log(multiply)