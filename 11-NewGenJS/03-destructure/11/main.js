let arr = [1, [2, [[[3, 4], 5], 6]]];

let [a, arr2] = arr;
let [b, arr3] = arr2;
let [arr4, f] = arr3;
let [arr5, e] = arr4;
let [c, d] = arr5;

//console.log(arr2); // [2, [[[3, 4], 5], 6]]
//console.log(arr3); // [[[3, 4], 5], 6]
//console.log(arr4); // [[3, 4], 5]
//console.log(arr5); // [3, 4]

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
