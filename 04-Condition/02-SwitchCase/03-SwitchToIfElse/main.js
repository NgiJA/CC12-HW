let browser = prompt("What is yout browser?")

if (browser == "Egde") {
  alert("You've got the Edge!")
} else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") {
  alert("Okay we support these browsers too")
} else {
  alert("We hope that this page looks ok!");
}