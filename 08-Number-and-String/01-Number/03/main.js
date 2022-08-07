function calPoint(sell) {
  let point = Math.floor(sell/100);
  return point;
}

console.log(calPoint(100))
console.log(calPoint(250))
console.log(calPoint(50))
