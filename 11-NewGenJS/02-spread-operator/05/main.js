exampleArray = [1, 2, 3, 4, 5];

function removeRandom(arr) {
	let randomNumber = Math.random() * arr.length;
	// console.log(Math.floor(randomNumber));
	arr.splice(Math.floor(randomNumber), 1);
	return arr;
}
console.log(removeRandom(exampleArray));
