let obj_1 = {
  name : "Wave",
  age : 26
}

let obj_2 = {}

function checkEmptyObj(obj) {
  if(Object.keys(obj).length == 0) {
    return "Empty Object"
  } else {
    return Object.keys(obj)
  }
}

console.log(checkEmptyObj(obj_1))
console.log(checkEmptyObj(obj_2))