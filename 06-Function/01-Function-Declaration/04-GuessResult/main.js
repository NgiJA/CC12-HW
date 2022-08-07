function sayHi(name) {
  let name = "Guest";
  console.log(name); // * Error เพราะประกาศชื่อ name เป็น parameter ใน function ไปก่อนแล้ว
}

sayHi("Jim");

//function sayHi(name) --> เปรียบเสมือน function sayHi(let name) เป็นการประกาศ local variable ชื่อ name ที่ใช้ใน function