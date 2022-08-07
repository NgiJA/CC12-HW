let username = prompt("username?")
let email = prompt("email?")
let password = prompt("password?")

//แบบ Short hand ทำได้ในกรณีชื่อ key และ value ตรงกัน
const user = {
  username,
  email,
  password
}

console.log(user)