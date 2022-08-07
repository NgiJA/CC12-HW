/*
GET : Input
CHECK : number
IF number
  ADD number to sum
  ADD 1 to count
  BACK TO LINE 2
ELSE
  PRINT SUM
  PRINT average
*/

let num;
let sum = 0;
let count = 0;

do {
	num = prompt('Enter Number');
	if (!(num === null || ((num === '') === num.trim()) === '' || isNaN(num))) {
		sum += +num;
		count++;
	}
} while (!(num === null || ((num === '') === num.trim()) === '' || isNaN(num)));

if (count > 0) {
	console.log(sum);
	console.log(sum / count);
}
