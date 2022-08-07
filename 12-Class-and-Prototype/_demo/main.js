class User {
	name;
	password;
	role;

	constructor(name, password, role) {
		console.log('constructor');
		this.name = name;
		this.password = password;
		this.role = role || 'normal-user';
	}

	login(password) {
		console.log('Login ' + password);
	}

	changePassword(newPassword) {
		console.log('Change Password ' + newPassword);
	}

	loggingName() {
		console.log(this.name);
	}
}

const a = new User('a', '1234', 'admin');
const b = new User('b', '1234');
const c = new User('c', '1234');
console.log(a);
console.log(b);
console.log(c);
a.login(1234);
a.changePassword(5678);
a.loggingName();

class Admin extends User {
	// extends คือเอาของใน class User มาใช้ใน class Admin
	updateProduct(productData) {
		console.log('Update Product');
	}
}

class Customer extends User {
	/*
	constructor(...args) {   // ["Cust","12","customer"]
		super(...args)
	} เมื่อสร้างลูกจาก class นี้ จะเหมือนใช้ constructor ของตัวแม่โดยอัตโนมัติ
	*/

	constructor(rank, ...args) {
		super(...args);
		this.rank = rank; // เป็นการเขียนว่าเพิ่มบางอย่างเข้าไปโดยอิงจาก constructor ของตัวแม่
	}

	createOrder(cart) {
		console.log('Create Order');
	}

	login(phoneNumber) {
		console.log('Customer Login');
	}

	logCustName() {
		super.loggingName(); // ใช super เพื่อเรียกใช้ของตัวแม่
	}
}

const admin = new Admin('admin');
console.log(admin);
admin.login();

const cust = new Customer('VIP', 'Cust', 12, 'customer');
cust.login(); //เนื่องจากชื่อ method login() ของ Customer และ User ซ้ำกัน บรรทัดนี้จะไปหา login() จาก Customer ก่อน ถ้าไม่มี จะวิ่งไปหา login() ของ Parent (ซึ่งคือ User)
console.log(cust);

const arr = [1, 2, 3];
// console.log(arr);
// arr.val();

// const arr = new Array()
const date = new Date();
console.dir(date);

// const func = new Function()

const num = 5;
num.toFixed(2);

Array.prototype.sum = function () {
	console.log('Array Sum');
};
Array.prototype.map = function () {
	console.log('map');
};
arr.sum();
arr.map();
