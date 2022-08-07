let num = +prompt('Enter number');
let counter = 0;
let sum = 0;
let remainder;

// Example
// 4596 --> count = 0
// 459 --> count = 1 // (4596-6)/10 --> 4590/10 --> 459
// 45 --> count = 2 // (459-9)/10 --> 45
// 4 --> count = 3 // (45-5)/10 --> 4
// 0 --> count = 4 // (4-4)/10 --> 0

while (num) {
	remainder = num % 10;
	num = (num - remainder) / 10;
	counter++;
	sum = sum + remainder;
}
alert(sum);
