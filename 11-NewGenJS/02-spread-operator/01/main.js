const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

let concatNum = [5, ...nums1, -6, -1, ...nums2];
console.log(concatNum);

const sum = concatNum.reduce(function (acc, item) {
	return acc + item;
}, 0);
console.log(sum);
