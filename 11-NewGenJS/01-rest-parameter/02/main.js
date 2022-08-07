let result = [];

function filterOutOdds(...numbers) {
	// console.log(numbers);
	numbers.forEach(function (item) {
		if (item % 2 == 0) {
			// console.log(item);
			result.push(item);
		}
	});
	return result;
}

console.log(filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
