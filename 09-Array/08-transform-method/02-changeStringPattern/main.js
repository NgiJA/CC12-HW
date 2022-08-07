let initial = "background-color-white"

function convert(str) {
  
  let arr = str.split("-")  //["background","color"]
  let firstCharAfterDash;
  let remainCharAfterDash;
  let firstUpperCase;
  let firstWord;
  let result = "";
  
  for(let i = 0; i < arr.length; i++) {
    if(i == 0) {
      firstWord = arr[i]
    } else if (i > 0){
      firstCharAfterDash = arr[i].split("")[0].toUpperCase()
      remainCharAfterDash = arr[i].split("").slice(1).join("")
      firstUpperCase = firstCharAfterDash + remainCharAfterDash
      result = result + firstUpperCase
    }
  }
  return firstWord + result
}

console.log(convert(initial))




// TEST

// let arr = initial.split("-")
// let beforeDash = arr[0]
// let firstCharAfterDash = arr[1].split("")[0].toUpperCase()
// let remainCharAfterDash = arr[1].split("").slice(1).join("")
// let result = beforeDash + firstCharAfterDash + remainCharAfterDash

// console.log(arr)
// console.log(beforeDash)
// console.log(firstCharAfterDash)
// console.log(remainCharAfterDash)
// console.log(result)
