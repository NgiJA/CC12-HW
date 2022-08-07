const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' },
  { id: 2, name: 'Football' },
  { id: 2, name: 'Basketball' }
];

// Do myself
let answer = []

const result = tasks.filter(function(item, index, array) {
  if(item.id === 2) {
    answer.push(index)
    return true;
  }
})

console.log(result)
console.log(answer)

for(let i = 0; i < answer.length; i++) {
  console.log(answer[i])
}
