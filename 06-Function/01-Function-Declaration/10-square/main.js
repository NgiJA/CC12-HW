function squareNum(num) {
  const result = num * num;
}

console.log(squareNum(2)); // * ได้ undefined เนื่องจาก function ไม่ได้มีการ return ค่าใดๆออกมา ให้ถือว่า return undefined