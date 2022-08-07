let user = prompt("What is your name?")
let password;

if (user === '' || user === null) {
  user = "guest"
  alert(`Welcome ${user}`)
} else if (user == "codecamp") {
  password = prompt("What is your password?")
  if (password == "123456") {
    // user = "codecamp"
    alert(`Welcome ${user}`)
  } else if (password != "123456") {
    alert("Wrong password")
  }
} else if (user != "codecamp") {
  user = "guest"
  alert(`Welcome ${user}`)
}