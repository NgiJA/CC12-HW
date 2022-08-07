let obj_1 = {
	John: 100,
	Pete: 300,
	Mary: 250
};

let obj_2 = {};

function topSalaries(salaries) {
	let array = [];
	for (let key in salaries) {
		array.push(salaries[key]);
	}
	// console.log(array); // [100, 200, 300]
	let maxSalaries = Math.max(...array); // maxSalaries = 300
	if (Object.keys(salaries).length != 0) {
		return Object.keys(salaries).find((key) => {
			if (salaries[key] == maxSalaries) {
				return key;
			}
		});
	} else if (Object.keys(salaries).length == 0) {
		return null;
	}
}

console.log(topSalaries(obj_1)); // Pete
console.log(topSalaries(obj_2)); // null
