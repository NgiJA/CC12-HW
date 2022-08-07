const array_1 = [9, 17, 23, 5];
// ค่าที่มากกว่า 10
const result_1 = array_1.filter(item => item > 10)
console.log(result_1)


const array_2 = [1, 2, 3, 4];
// ค่าที่เป็นเลขคี่
const result_2 = array_2.filter(item => item % 2 != 0)
console.log(result_2)


const array_3 = [1, '1', 2, {}];
// ค่าที่ประเภทข้อมูลเป็น Number
const result_3 = array_3.filter(item => typeof(item) == 'number')
console.log(result_3)


const array_4 = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
// ค่าที่มีตัวอักษรมากกว่า 6 ตัว
const result_4 = array_4.filter(item => item.length > 6)
console.log(result_4)


const array_5 = [1, -3, 2, 8, -4, 5];
// ค่าที่เป็นเลขบวก
const result_5 = array_5.filter(item => item > 1)
console.log(result_5)


const array_6 = [1, 3, 4, 5, 6, 7, 8];
// ค่าที่หาร 3 ลงตัว
const result_6 = array_6.filter(item => item % 3 == 0)
console.log(result_6)


const array_7 = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// ค่าที่ขึ้นต้นด้วยตัว E
const result_7 = array_7.filter(item => item[0] == "E")
console.log(result_7)


const array_8 = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
const result_8 = array_8.filter(item => item.toUpperCase() === item)
console.log(result_8)


const array_9 = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
// ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่
const result_9 = array_9.filter(item => item.toLowerCase().includes("buri"))
console.log(result_9)


const array_10 = [
  { name: 'Ben', age: 14 },
  { name: 'Phil', age: 18 },
  { name: 'John', age: 32 },
  { name: 'Ann', age: 16 },
  { name: 'Paul', age: 24 }
];
// อายุไม่น้อยกว่า 18 
const result_10 = array_10.filter(item => item.age >= 18)
console.log(result_10)


const array_11 = [
  { id: 1, name: 'Pepsi' },
  { id: 2, name: 'Mirinda' },
  { id: 3, name: 'Coke' },
  { id: 4, name: 'Fanta' },
  { id: 5, name: 'Sprite' }
];
// id ไม่เท่ากับ 4
const result_11 = array_11.filter(item => item.id != 4)
console.log(result_11)


const array_12 = [
  { name: 'John', birth: '2001-07-31' },
  { name: 'Jack', birth: '1990-06-24' },
  { name: 'Jim', birth: '1984-12-13' },
  { name: 'Jeff', birth: '1996-02-05' },
  { name: 'Joe', birth: '2002-06-13' }
];
// เกิดเดือน 6
const result_12 = array_12.filter(item => item.birth[5] == "0" && item.birth[6] == "6")
console.log(result_12)