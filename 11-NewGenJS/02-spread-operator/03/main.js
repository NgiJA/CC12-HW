function recieveInput(firstName, lastName, ...hobbies) {
	let hobbiesAmount = hobbies.length;
	console.log(`hobbiesAmount = ${hobbiesAmount}`);
	return [firstName, lastName, ...hobbies];
}

console.log(recieveInput('Chaiyapat', 'Ruangtrakul', 'Piano', 'Game'));
