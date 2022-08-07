const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];


// Do myself
/*
let newArr = []

function updateTask(id, newName) {
  tasks.forEach(function(item, index, array) {
    if(item.id != id) {
      newArr[index] = item
    } else if(item.id == id) {
      let newObj = {
        id: id, name: newName
      }
      newArr[index] = newObj
    }
  })
  console.log(newArr)
}

updateTask(2, "Travelling")
*/


// ANSWER
// INPUT : id, newName
// OUTPUT : newArray of todo

function updateTask(id, newName) {
  const newTasks = tasks.slice(0) // clone

  let foundIndex = newTasks.findIndex(item => item.id == id)

  if(foundIndex != -1) {
    newTasks.splice(foundIndex,1,{id: id, name: newName})
  }

  return newTasks

}

const newTodo = updateTask(2, "Football")
console.log(newTodo)



















// TEST

// function updateTask(id, newName) {
//   const newArray = tasks.filter(item => item.id == id)
//   newArray[0].name = newName
//   console.log(newArray)
// }

// updateTask(2, "Travelling")


// const newArray = tasks.filter(item => item.id == 2)
// console.log(newArray)
// console.log(newArray[0])
// newArray[0].name = "Travelling"
// console.log(newArray[0])