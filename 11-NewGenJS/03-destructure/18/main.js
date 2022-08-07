const users = [
	{ user: 'Name1' },
	{ user: 'Name2', age: 2 },
	{ user: 'Name2' },
	{ user: 'Name3', age: 4 }
];

let obj;

for (let item of users) {
	obj = item;
	let { user, age = 'unknow' } = item;
	console.log(`user: ${user} age: ${age}`);
}
