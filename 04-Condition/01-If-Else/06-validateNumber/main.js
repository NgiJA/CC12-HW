num_1 = prompt('input num_1');
num_2 = prompt('input num_2');

// if (typeof num_1 == 'number' && typeof num_2 == 'number') {
// 	alert(num_1 + num_2);
// } else if (Boolean(isNaN(num_1) || isNaN(num_2))) {
// 	alert('Invalid number');
// }

function checkNotNumber(num) {
	return num === null || num.trim() === '' || isNaN(num);
}

function checkNumber(num) {
	return !(num === null || num.trim() === '' || isNaN(num));
}

if (checkNotNumber(num_1) || checkNotNumber(num_2)) {
	alert('Invalid number');
} else {
	alert(+num_1 + +num_2);
}
