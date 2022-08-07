let score = prompt("Score: ")


if (score === null || score === '' || score.trim() === '' || isNaN(score)) {
  alert("Please input number")
} else if (score >= 80) {
  alert("A")
} else if (score >= 70 && score <= 79) {
  alert("B")
} else if (score >= 60 && score <= 69) {
  alert("C")
} else if (score >= 50 && score <= 59) {
  alert("D")
} else if (score >= 0 && score < 50) {
  alert("F")
} else if (score < 0) {
  alert("Please input positive number")
}