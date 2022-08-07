// Object = Collection of Key-Value Pair

// Object declaration # 1
const myObj = new Object


// Object literal
const person = {
  firstName : "John", // key-value = property
  lastName : "Doe",
  age : 27,
  isAdmin : true,
  child : null,
  address : {
    road : "Sukhumvit",
    province : "Bangkok"
  },
  //function ที่อยู่ใน Object จะเรียกว่า Method
  //Method = function in Object
  sayHi : function() {
    alert("Hello")
  } 
}

// ACCESS : GET
console.log(person.firstName)
console.log(person.lastName)
console.log(person.address.road)
console.log(person.address.district) // undefined

// UPDATE
console.log(person)
person.firstName = "Michael"
person.age = person.age + 1
person.address.road = "Asia"
console.log(person)

//DELETE
delete person.age;

console.log(person)
console.log(person.age)

//ADD
person.salary = 5000;
console.log(person)

//ACCESS BY SQUARE BRACKET[]
//GET
console.log(person["firstName"]) //ต้องใส่เป็น String

let a = "lastName"
console.log(person["lastName"])
console.log(person[a])

person["graduate school"] = "CodeCamp" //[] ใช้กำหนดชื่อที่มีช่องว่างได้ แต่ . ใช้กำหนดชื่อที่มีช่องว่างไม่ได้
console.log(person)

//Property Short Hand
let username = "CC12"
let password = "1234"
let role = "ADMIN"


const user = {
  username,
  password,
  role
}

console.log(user)