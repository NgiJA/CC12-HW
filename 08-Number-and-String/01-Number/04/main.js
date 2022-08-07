function convert(num) {
  
  //return num.toFixed(2)

  return (Math.floor(num * 100)/100).toFixed(2)
}

console.log(convert(3.1289))
console.log(convert(10))
console.log(convert(5.1))