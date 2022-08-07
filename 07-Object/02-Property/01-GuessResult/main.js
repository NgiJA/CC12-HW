const user = {
  email: 'cc@gmail.com',
  isActive: true
};

user.isActive = false;
console.log(user); // * ได้ Object ที่มี email = "cc@gmail.com" และมี isActive = false
user = {};
console.log(user); // ** error เนื่องจาก user = {}; ไม่สามารถใช้ได้เพราะประกาศ Object เป็น const (แต่ถ้าประกาศเป็น let จะเปลี่ยนค่าได้ และจะได้ {} ออกมาเป็น Object เปล่าๆ)