//Do myself
let count = 0;

function isPrime(num) {
  for (let i = 1; i <= num; i++) {
    if(num % i == 0) {
      count = count + 1
    }
  }

  if(count == 2) {
    count = 0
    return num;
  } else {
    count = 0
    return `${num} isn't prime number`
  }
}


function printPrime(input) {
  for (let i = 2; i <= input; i++) {
    console.log(isPrime(i))
  }
}




//Answer

function checkPrime(num) {
  let isPrime = true;
  for(let i = 2; i < num; i++) {
    if(num % i == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime
}

function printPrime(limit) {
  for(let i = 2; i <= limit; i++) {
    let isPrime = checkPrime(i)
    if(isPrime) {
      console.log(i)
    }
  }
}