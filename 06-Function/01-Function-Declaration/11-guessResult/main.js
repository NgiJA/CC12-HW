function sayHi(age) {
  if (age < 12) alert("Hi kid");
}
console.log(sayHi); // * ได้รายละเอียด function เพราะไม่ได้มีการเรียกใช้งาน function โดยใส่ ()
/*
ƒ sayHi(age) {
  if (age < 12) alert("Hi kid");
}
*/
console.log(sayHi(10)); // ** alert("Hi kid") ก่อน และได้ค่า undefined เนื่องจาก function ไม่ได้มีการ return ค่าออกมา




function sayHi(name) {
  if (name) {
    alert("Hi " + name);
    return;
  } else {
    return "Who are you";
  }
}
console.log(sayHi("John")); // *** alert("Hi John") ก่อน และได้ค่า undefined เนื่องจากเข้าเงื่อนไข if --> return undefined
console.log(sayHi()); // **** "Who are you" เนื่องจากไม่เข้าเงื่อนไข if ทำให้ return "Who are you"