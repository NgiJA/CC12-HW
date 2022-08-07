
const product1 = {
  name: 'Water',
  distributor: {
    name: 'Giraffe Water Company',
    address: {
      street: 'Phetchaburi',
      subdistrict: 'Thanonphetchaburi',
      district: 'Ratchathewi',
      province: 'Bangkok'
    }
  }
};

console.log(product1.distributor.address.province)

const product2 = {}
console.log(product2.distributor ? product2.distributor.address : undefined)
console.log(product2.distributor ?.address) //หรือเขียนแบบนี้ก็ได้ เรียกว่า optional chaining --> chaining dot when before ? is Object
                                            //จากตัวอย่างนี้ สมมติข้างหน้า ? เป็น Object จริง แต่ถ้าไม่มี key address ต่อ ก็ได้ undefined อยู่ดี
console.log(product2.distributor ?.address ?.province) //คำตอบที่โจทย์ถาม ถามว่า address คือ Object ไหม ถ้ามีก็ให้เข้าไปหา province อีกที



// ####### OPTIONAL CHAINING

// let user = {};
// console.log(user.address) // undefined
// console.log(user.address.province); // Error
//console.log(user.address ? user.address.province : undefined); // Fixed#1 : ternary
// console.log(user.address && user.address.province); // Fixed#2

// let user = {};
// console.log(user.address?.province); // Short and clean