class Sale {
	name;

	constructor(name) {
		this.name = name;
	}

	calcPrice() {
		let finalPrice = this.amount * (this.price * (1 - this.discount));
		return finalPrice;
	}
}

class Beverage extends Sale {
	amount;
	price;
	discount;

	constructor(amount, price, discount, ...args) {
		super(...args);
		this.amount = amount;
		this.price = price;
		this.discount = discount;
	}
}

const beverage = new Beverage(3, 19, 0.1, 'Pepsi');
console.log(beverage);
console.log(`Final price : ${beverage.calcPrice().toFixed(2)}`);
