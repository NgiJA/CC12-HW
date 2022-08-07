const values = [1, 4, 8, 2, 1, 3, 3, 8];

function unique(arr) {

  const mySet = new Set(arr)
  const newArray = Array.from(mySet)

  return newArray
}

console.log(unique(values))