/*
//Do myself
let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};


function multiplyNumeric(obj, num) {
  for(let key in obj) {
    if(typeof(obj[key]) == "number") {
      obj[key] = obj[key] * num
    }
  }
  return obj;
}

console.log(multiplyNumeric(menu, 3))
*/

// ANSWER
// INPUT : object , number
// OUTPUT : object (modified only number)

/*
CHECK each key with value
  IF value type number
    update value by multiply for that key
  ELSE
    don't update = stay the same
  RETURN modified object
*/

let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};

const multiplyNumeric = (obj, num) => {
  const result = {}
  for(let key in obj) {
    let currentValue = obj[key]
    if(typeof(currentValue) == "number") {
      result[key] = currentValue * num
    } else {
      result[key] = currentValue
    }
  }
  return result;
}
console.log(multiplyNumeric(menu,3))