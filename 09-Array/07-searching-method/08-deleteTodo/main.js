const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];

// Do myself
/*
function deleteTask(id) {
  tasks.splice(id-1,1)
  console.log(tasks)
}

deleteTask(2)
*/

// Answer
function deleteTask(id) {
  let foundIndex = tasks.findIndex(item => item.id == id)

  if(foundIndex != -1) {
    tasks.splice(foundIndex,1)
  }
}

deleteTask(2)
console.log(tasks)






















// TEST

// function deleteTask(id) {
//   const newArray = tasks.filter(item => item.id == id)
//   console.log(newArray)
// }

// deleteTask(1)