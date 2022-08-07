const square = (n) => {
  n ** 2;
};

console.log(square(7)); // * undefined เพราะไม่ได้ใส่ return (arrow function ถ้ามี {} ต้องเขียน return)




const calcCircleArea = (r) => Math.PI * r ** 2;
console.log(calcCircleArea(3)); // ** 28.2743