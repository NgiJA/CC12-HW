//Do myself
let star = ''

for (let i = 0; i < 4; i++) {
  star = star + "*" + ' '
  console.log(star.trim())
}


//Answer 1
let result = ""

for(let i = 0; i < 4; i++) {
  result += "* "
  console.log(result.trim())
}

//Answer 2
let resultt = ""

for(let i = 0; i < 4; i++) {
  for(let j = 0; j <= i; j++) {
    resultt += "* "
  }
  resultt += "\n"
}
console.log(resultt)