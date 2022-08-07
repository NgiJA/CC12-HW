let x = 1;
function func() {
  console.log(x); // * error เพราะใน function มีการประกาศ x หลังจากใช้คำสั่ง console.log(x) ทำให้ไม่เจอค่าตัวแปร x (แต่ถ้าไม่ได้ประกาศตัวแปร x ใน function จะสามารถใช้ค่า x ที่เป็น global scope ได้)
  let x = 2;
}
func();