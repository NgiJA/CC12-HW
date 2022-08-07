const array_1 = [1, 2, 30, 400];
const result_1 = array_1.map(function(item, index, arr) {
  return item * 2
})
console.log(result_1)


const array_2 = [1, 2, 3, 4];
const result_2 = array_2.map(item => String(item))
console.log(result_2)


const array_3 = [1, '1', 2, {}];
const result_3 = array_3.map(item => typeof(item))
console.log(result_3)


const array_4 = ['apple', 'banana', 'orange'];
const result_4 = array_4.map(item => item.toUpperCase())
console.log(result_4)


const array_5 = [1, 3, 4, 5, 6, 7, 8];
const result_5 = array_5.map(item => item % 2 == 0 ? "even" : "odd")
console.log(result_5)


const array_6 = [1, -3, 2, 8, -4, 5];
const result_6 = array_6.map(function(item, index, arr) {
  if(item < 1) {
    return -(item)
  } else {
    return item
  }
})
console.log(result_6)


const array_7 = [100, 200.25, 300.84, 400.3];
const result_7 = array_7.map(item => item.toFixed(2))
console.log(result_7)


const array_8 = [0, 5, 10, 7, 6, 5, 0];
const result_8 = array_8.map(function(item, index, arr) {
  // if(item === 0) {
  //   return "Jan"
  // } else if (item === 1){
  //   return "Feb"
  // } else if (item === 2){
  //   return "Mar"
  // } else if (item === 3){
  //   return "Apr"
  // } else if (item === 4){
  //   return "May"
  // } else if (item === 5){
  //   return "Jun"
  // } else if (item === 6){
  //   return "Jul"
  // } else if (item === 7){
  //   return "Aug"
  // } else if (item === 8){
  //   return "Sep"
  // } else if (item === 9){
  //   return "Oct"
  // } else if (item === 10){
  //   return "Nov"
  // } else if (item === 11){
  //   return "Dec"
  // }
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  return month[item]
})
console.log(result_8)


const array_9 = [1, 16, 81, 256, 625, 1296];
const result_9 = array_9.map(item => Math.sqrt(Math.sqrt(item)))
console.log(result_9)


const array_10 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
const result_10 = array_10.map(item => item.name)
console.log(result_10)


const array_11 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
const result_11 = array_11.map(item => item.age)
console.log(result_11)


const array_12 = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' }
];
const result_12 = array_12.map(item => item.name + " " + item.surname)
console.log(result_12)


const array_13 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' }
];
const result_13 = array_13.map(function(item, index, arr) {
  let currentObj = {...item}
  let age = 2021 - Number(item.birth.slice(0,4))
  
  currentObj.age = age
  return currentObj
})
console.log(result_13)


const array_14 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];
const result_14 = array_14.map(function(item, index, arr) {
  
  const monthMaster = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  let name = item.name
  let date = item.birth.slice(-2)
  let month = item.birth.slice(5,7)
  let monthName = monthMaster[Number(month)-1].toLowerCase()
  let year = item.birth.slice(0,4)

  return `<tr><td>${name}</td><td>${date} ${monthName} ${year}}</td></tr>`
})
console.log(result_14)