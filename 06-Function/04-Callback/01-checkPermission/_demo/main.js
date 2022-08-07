// normal Parameter : Input = number, string, boolean, null, undefined
// callback Parameter : Input = function

function myFunc (a,b,callBack) {
  callBack(`${a},${b}`)
  return a * b;
}

function myLog(text) {
  console.log(`Log from my custom callBack ${text}`)
}

myFunc(3,4,myLog)