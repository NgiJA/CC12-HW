let array = [1,2,3,4,5,6,7,8,9,10]

function filterRange(arr, a, b) {
  let newArray = arr.filter(function(item, index, array) {
    if(item >= a && item <= b)
    return true;
  }) 
    
  return newArray
}

console.log(filterRange(array, 2, 5))