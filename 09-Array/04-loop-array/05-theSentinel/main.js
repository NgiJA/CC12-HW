let input;
let arr = [];
let sum = 0;

do {

  input = prompt("input number")

  if(input != null && input != "" && !isNaN(+input)) {
    arr.push(+input)
  }

} while(input != null && input != "" && !isNaN(+input))

arr.forEach(function(item, index, array) {
  sum = sum + item
})

console.log(arr)
console.log(sum)