let num = prompt('input number');

// if (num > 0) {
// 	alert('Positive number');
// } else if (num == 0) {
// 	alert('Zero');
// } else if (num < 0) {
// 	alert('Negative number');
// } else {
// 	alert('Invalid number');
// }

//Answer;
if (num === null || num === '' || num.trim()=== '' || isNaN(num)) {
	alert('Invalid Number');
} else if (num > 0) {
	alert('Positive Number');
} else if (num == 0) {
	alert('Zero');
} else {
	alert('Negative Number');
}