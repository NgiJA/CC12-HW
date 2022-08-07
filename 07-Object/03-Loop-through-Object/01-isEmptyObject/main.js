// INPUT : Object ที่ใช้ตรวจสอบ
// OUTPUT : true = Object ว่าง ไม่มี key, false = Object มีอย่างน้อย 1 key 

function isEmptyObject (obj) {
  
  //เข้า for loop เมื่อ object มี 1 key ขึ้นไป
  for(let key in obj) {
    return false
  }
  //มีเฉพาะ 0 key เท่านั้น ที่หลุดมาบรรทัดนี้ได้
  return true
}

const user_1 = {name : "CC12"}
const user_2 = {name : "Codecamp", cohort : 12}
const user_3 = {}

console.log(isEmptyObject(user_1)) //false
console.log(isEmptyObject(user_2)) //false
console.log(isEmptyObject(user_3)) //true
console.log(isEmptyObject({name : "CC12", cohort : 12})) //on the fly object