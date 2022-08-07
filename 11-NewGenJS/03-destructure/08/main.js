const user_1 = {
	firstName: 'Chaiyapat',
	lastName: 'Ruangtrakul',
	age: 20
};

const user_2 = {
	firstName: 'Natwarut',
	lastName: 'Ruangtrakul',
	age: 15
};

function checkAge(user) {
	let { firstName, lastName, age } = user;
	if (age > 18) {
		alert(`Hello ${firstName}-${lastName}`);
	} else {
		alert(`Not allowed!!`);
	}
}

checkAge(user_2);
