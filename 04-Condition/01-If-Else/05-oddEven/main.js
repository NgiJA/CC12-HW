//ทำเอง
// num = +prompt('input number');
// if (num % 2 == 0) {
// 	alert('Even number');
// } else if (num % 2 != 0) {
// 	alert('Odd number');
// } else if (num == NaN) {
// 	alert('not number');
// }

//Answer
let num = prompt('input number');

function checkNotNumber(num) {
	return num === null || num.trim() === '' || isNaN(num);
}

function checkNumber(num) {
	return !(num === null || num.trim() === '' || isNaN(num));
}

if (checkNumber(num)) {
	if (num % 2 === 0) {
		alert('Even Number');
	} else {
		alert('Odd Number');
	}
} else {
	alert('Invalid');
}
