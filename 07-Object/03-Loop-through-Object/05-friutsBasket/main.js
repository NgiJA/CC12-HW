let fruitName;
let amount;

function adjustFruit() {
  
  const fruit = {}
  
  do {
  
  fruitName = prompt("fruit name")
  amount = +prompt("amount")
  if(fruitName != "stop" && fruitName != "" && fruitName.trim() != "" && fruitName != null) {
    if(amount > 1) {
      fruit[fruitName + "s"] = amount
    } else {
      fruit[fruitName] = amount
    }
  }
} while (fruitName != "stop" && amount != "stop")

return fruit;
}

let answer = adjustFruit()
console.log(answer)