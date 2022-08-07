const arr = [2, 3, 5, 7, 11];

let newArr = []

function squareArr(arr) {
  
  arr.forEach(function(item, index, array) {
    newArr[index] = item ** 2
  })
  console.log(newArr)
}

squareArr(arr)

console.log(arr)
console.log(newArr)