//Do myself
let sumTotal = 0;
let sumEven = 0;
let sumOdd = 0;
let sum_div2 = 0;
let sum_div3 = 0;

for (i = 1; i <= 100; i++) {
	sumTotal = sumTotal + i;
	if (i % 2 == 0) {
		sumEven = sumEven + i;
		sum_div2 = sum_div2 + i ** 2;
		if (i % 3 ==0) {
			sum_div3 = sum_div3 + i ** 2;
		}
	} else if (i % 2 != 0) {
		sumOdd = sumOdd + i;
		if (i % 3 ==0) {
			sum_div3 = sum_div3 + i ** 2;
		}
	}
}
console.log('SumTotal:', sumTotal);
console.log('SumEven:', sumEven);
console.log('SumOdd:', sumOdd);
console.log('SumCondition:', sum_div2 - sum_div3);
console.log('Sum_div2:', sum_div2);
console.log('Sum_div3:', sum_div3);

//Answer
let sumAllNumber = 0
let sumEvenn = 0
let sumOddd = 0
let sumSquareDifferent = 0

for(let i = 1; i <= 100; i++) {
	sumAllNumber += i
	if(i % 2 == 0) {
		//Even number
		sumEvenn += i
		sumSquareDifferent += i ** 2
	}
	if(i % 2 != 0) {
		//Odd number
		sumOddd += i
	}
	if(i % 3 == 0) {
		sumSquareDifferent -= i ** 2
	}
}
console.log("SumAllNumber " + sumAllNumber)
console.log("SumEvenn " + sumEvenn)
console.log("SumOddd " + sumOddd)
console.log("SumSquareDifferent " + sumSquareDifferent)