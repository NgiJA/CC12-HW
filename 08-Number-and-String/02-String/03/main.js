function ucFirst(str) {
  let newString = str.trim()
  return console.log(newString[0].toUpperCase() + newString.slice(1))
}

ucFirst("wave")