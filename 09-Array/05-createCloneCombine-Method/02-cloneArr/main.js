function clone(arr) {
  return arr.slice()
}

let a = [1,2,3,4]
let b = clone(a)

console.log(a, "a")
console.log(b, "b")