let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];

function getAverageAge(arr) {
  const ageAvg = arr.reduce(function(acc,item) {
    return acc + item.age
  },0)
  return ageAvg / arr.length
}

console.log(getAverageAge(arr))