//Do it myself
let num_1 = prompt("Input num_1")
let num_2 = prompt("Input num_2")
let num_3 = prompt("Input num_3")

if ((num_1 === null || num_1 === '' || num_1.trim()=== '' || isNaN(num_1))
|| (num_2 === null || num_2 === '' || num_2.trim()=== '' || isNaN(num_2))
|| (num_3 === null || num_3 === '' || num_3.trim()=== '' || isNaN(num_3))) {
  alert("Pleast input all number")
} else if (num_1 > num_2 && num_2 > num_3) {
  alert(`${num_1}, ${num_2}, ${num_3}`)
} else if (num_1 > num_3 && num_3 > num_2) {
  alert(`${num_1}, ${num_3}, ${num_2}`)
} else if (num_2 > num_1 && num_1 > num_3) {
  alert(`${num_2}, ${num_1}, ${num_3}`)
} else if (num_2 > num_3 && num_3 > num_1) {
  alert(`${num_2}, ${num_3}, ${num_1}`)
} else if (num_3 > num_1 && num_1 > num_2) {
  alert(`${num_3}, ${num_1}, ${num_2}`)
} else if (num_3 > num_2 && num_2 > num_1) {
  alert(`${num_3}, ${num_2}, ${num_1}`)
}



//Answer
let x = +prompt()
let y = +prompt()
let z = +prompt()

if(x > y && x > z) {
  if(y > z) {
    console.log(`${x, y, z}`)
  } else if (z > y) {
    console.log(`${x, z, y}`)
  }
} else if (y > x && y > z) {
  if(x > z) {
    console.log(`${y, x, z}`)
  } else {
    console.log(`${y, z, x}`)
  }
} else {
  if(x > y) {
    console.log(`${z, x, y}`)
  } else {
    console.log(`${z, y, x}`)
  }
}