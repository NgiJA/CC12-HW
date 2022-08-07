let array1 = [2, 3, 4, 5, 6];

function convert(arr) {
	let array2 = [...array1];
	array2[3] = array2[3] ** 2;
	return array2;
}
console.log(convert(array1));
console.log(array1);
