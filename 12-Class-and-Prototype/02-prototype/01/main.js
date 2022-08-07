const array = [1, 2, 3, 4, 5];

Array.prototype.max = function (arr) {
	return Math.max(...arr);
};

Array.prototype.sum = function (arr) {
	let sum = arr.reduce(function (acc, item) {
		return acc + item;
	}, 0);
	return sum;
};

console.log(array.max(array));
console.log(array.sum(array));
