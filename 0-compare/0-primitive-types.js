
const first = 'a value';
const second = 'a value';
const third = 'another value';

console.log('' == false);
console.log(first == second);
console.log(first === second);
console.log(first === third);


console.log(Object.is(first, second));


console.log(Object.is(NaN, NaN));
console.log(Object.is(-0, +0));