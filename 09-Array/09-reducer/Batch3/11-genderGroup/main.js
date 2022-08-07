const persons = [
  { name: 'John', sex: 'M' },
  { name: 'Jody', sex: 'M' },
  { name: 'Susan', sex: 'F' },
  { name: 'Kate', sex: 'F' },
  { name: 'Sid', sex: 'M' }
];


// Do myself use forEach method
/*
let maleName = []
let femaleName = []

function genderGroup(array) {
  array.forEach(function(item) {
    if(item.sex == "M") {
      maleName.push(item.name)
    } else if (item.sex == "F") {
      femaleName.push(item.name)
    }
  })

  let result = {M : maleName, F : femaleName}

  return result
}

console.log(genderGroup(persons))
*/



// Do myself use reduce method (ยังงงๆอยู่)
/*
let maleName = []
let femaleName = []

const groupGender = persons.reduce(function(acc,item) {
  if(item.sex == "M") {
    acc["M"] = maleName.push(item.name)
    // console.log(maleName)
    // console.log(acc)
  } else if (item.sex == "F") {
    acc["F"] = femaleName.push(item.name)
    // console.log(femaleName)
    // console.log(acc)
  }

  return {M : maleName, F : femaleName}

},{M : null , F : null})

console.log(groupGender)
*/
