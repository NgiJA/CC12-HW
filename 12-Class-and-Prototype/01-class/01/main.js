class Calculator {
	value = 0;

	constructor(value) {
		this.value = value;
	}

	sum(numberForSum) {
		this.value = this.value + numberForSum;
	}
	subtract(numberForSubtract) {
		this.value = this.value - numberForSubtract;
	}
	multiply(numberForMutiply) {
		this.value = this.value * numberForMutiply;
	}
	divide(numberForDevide) {
		this.value = this.value / numberForDevide;
	}
	show() {
		alert(this.value);
	}
}

const obj = new Calculator(10);

console.log(obj);
obj.sum(30);
console.log(obj);
obj.subtract(10);
console.log(obj);
obj.multiply(2);
console.log(obj);
obj.divide(5);
console.log(obj);
obj.show();
