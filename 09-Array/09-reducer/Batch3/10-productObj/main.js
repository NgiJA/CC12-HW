const products = [
  { id: 1, name: 'Crystal' },
  { id: 4, name: 'Namthip' },
  { id: 5, name: 'Nestle' }
];

const result = products.reduce(function(acc, item) {
  acc[item.id] = {name : item.name}

  return acc
},{})

console.log(result)