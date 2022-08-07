let a = undefined;
let b = ' '; // true --> เพราะมี spcebar ข้างใน
let c = !b; // false

let d = Boolean(a); //false
let e = !!b; // true
let f = Boolean(c); //false

console.log('D:', d);
console.log('E:', e);
console.log('F:', f);
