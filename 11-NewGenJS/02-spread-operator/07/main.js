function cloneObject(obj) {
	return { ...obj };
}

console.log(cloneObject({ name: 'Wave', age: 26 }));
