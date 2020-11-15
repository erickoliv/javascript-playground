const obj1 = {
  name: 'a name',
  address: { zipCode: '1234567', street: ' a street', number: 42 } 
};

let { name, address } = obj1;

console.log(name);
console.log(address);

address.number = 100;

console.log(address);
console.log(obj1);

address = { zipCode: '1234567', street: ' a street', number: 0 }; 

console.log(address);
console.log(obj1);