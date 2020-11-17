const arr1 = [1,2,3];
const arr2 = [...arr1, 4, 5, 6];

console.log(arr1);
console.log(arr2);

const [head, ...tail] = arr2;

console.log(head);
console.log(tail);