let flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
];

// Do myself
/*
const split = flattened.reduce(function(acc, item) {
  acc.push(item[0])
  acc.push(item[1])
  return acc
},[])

console.log(split)
*/



const split = flattened.reduce(function(acc, item) {
  for(let i = 0; i < item.length; i++) {
    acc.push(item[i])
  }
  return acc
},[])

console.log(split)