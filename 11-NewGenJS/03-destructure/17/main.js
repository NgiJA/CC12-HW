const names = [
	{ firstName: 'John', lastName: 'Doe' },
	{ firstName: 'Jack', lastName: 'Dann' },
	{ firstName: 'Joe', lastName: 'Dunne' }
];

let obj;

for (let item of names) {
	obj = item;
	let { firstName, lastName } = item;
	console.log(`Name: ${firstName} ${lastName}`);
}
