//Do myself
let num = ''

for (let i = 1; i < 9; i++) {
  num = num + i + ' '
  console.log(num)
}

//Answer
let resultt = ""

for(let i = 0; i < 8; i++) {
  for(let j = 0; j <= i; j++) {
    resultt += `${j+1} `
  }
  resultt += "\n"
}
console.log(resultt)