const a = [1, 5, 7, 11];
const b = [2, 3, 6];

const c = a.concat(b) //Method 1
console.log(c)

const d = [...a,...b] //Method 2
console.log(d)