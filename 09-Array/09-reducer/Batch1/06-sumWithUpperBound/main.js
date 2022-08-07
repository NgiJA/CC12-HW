let str = '31 45 12 67 34 86 23 37 19 41';

const arrNum = str.split(" ")
console.log(arrNum)

let sum = arrNum.reduce(function(acc, item) {
  if(+item < 40) {
    acc = acc + +item
  }
  return acc
},0)

console.log(sum)