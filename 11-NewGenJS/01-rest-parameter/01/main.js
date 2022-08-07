const multiplyNumber = (...numbers) => {
	console.log(numbers);
	let result = numbers.reduce(function (acc, item) {
		return acc * item;
	}, 1);
	return result;
};
console.log(multiplyNumber(2, 5, 7));
