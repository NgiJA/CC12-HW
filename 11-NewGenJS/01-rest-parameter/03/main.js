// Method 1
const mergeObjects = (...objs) => {
	console.log(objs);
	let reObj = objs.reverse();
	let newObj = {};

	newObj = reObj.reduce((acc, item) => {
		Object.assign(acc, item);
		return acc;
	}, {});

	return newObj;
};

const obj1 = { num1: 1 };
const obj2 = {
	num2: 2,
	num3: 3,
	num1: 4
};
console.log(mergeObjects(obj1, obj2));
