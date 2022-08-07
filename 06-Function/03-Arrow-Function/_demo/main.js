let myFunc = function(a,b,c,d) {
  return a+b+c+d;
}

let x = myFunc(1,2,3,4)
console.log(`x : ${x}`)


//Arrow function 1 : Basic syntax
let myArrowFunc = (a,b,c,d) => a,b,c,d

let y = myArrowFunc(1,2,3,4)
console.log(`y : ${y}`)


//Arrow function 2 : Single parameter

//let inCreaseByFive = (num) => num + 5
let inCreaseByFive = num => num + 5
console.log(inCreaseByFive(3))

//Arrow function 3 - Multiple function body !! don't forget return

let calcInterest = (balance, rate) => {
  // do some task
  let interest = balance * rate / 100

  return interset
}

console.log(calcInterest(100,28))