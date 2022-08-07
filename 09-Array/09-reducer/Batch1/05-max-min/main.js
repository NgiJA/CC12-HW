let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

// Do myself
/*
function compareFn(a,b) {
  if(a > b) {
    return 1
  } else {
    return -1
  }
}

newArray = arr.sort(compareFn)
min = newArray[0]
max = newArray[newArray.length-1]
console.log(`min ${min} max ${max}`)
*/

const initialValue = {
  max : arr[0],
  min : arr[0]
}

const summary = arr.reduce((acc, item) => {
  // CHECK MAX
  if(acc.max < item) {
    acc.max = item
  }

  // CHECK MIN
  if(acc.min > item) {
    acc.min = item
  }

  return acc

},initialValue)

console.log(summary)