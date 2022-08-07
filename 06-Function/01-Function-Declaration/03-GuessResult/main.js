//Global variable
let message = "Welcome to Thailand";

function logMessage(message) {
  // message ที่ใส่ใน function ถือเป็น Local variable
  message = "Hello everybody";
  console.log(message); // * --> "Hello everybody" ใช้ message จากใน function
}

logMessage(message);
console.log(message); // ** --> "Welcome to Thailand" เนื่องจากไม่ได้ถูก modify ค่า เนื่องจาก message ใน function เป็น local variable ไม่สามารถเปลี่ยนค่า global variable ได้

let name = "John";

function sayHi(input) {
  console.log(name); // *** --> "John" เพราะรับค่าจากตัวแปรด้านนอก
  name = input;
}

sayHi();
console.log(name); // **** --> undefined เพราะมีการใช้ function ไปแล้วก่อนหน้า โดยไม่ได้ใส่ parameter ให้ ทำให้ input = name = มีค่าเป็น undefined