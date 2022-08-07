function makeRandom(min, max) {
  let random = Math.random() * (max - min)
  return min + random
}

console.log(makeRandom(1, 10))