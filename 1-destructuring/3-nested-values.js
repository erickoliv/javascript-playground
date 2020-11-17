const obj1 = {
  name: 'a name',
  address: { zipCode: '1234567', street: ' a street', number: 42 } 
};

let { name, address : { zipCode, number } } = obj1;

console.log(name);
console.log(zipCode);
console.log(number);

obj1.address.zipCode = '822365'

console.log(obj1);
console.log(zipCode);
console.log(number);