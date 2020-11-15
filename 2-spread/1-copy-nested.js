const obj1 = {
  name: 'a name',
  age: 34,
  address: {
    zipCode: '1234567',
    street: 'a street',
    number: 42
  }
};

// nested objects, how to update only the street attribute from address ? 
const obj2 = { ...obj1, address: { ...obj1.address, street: 'another street' } };

console.log(obj1);
console.log(obj2);

obj1.address.number = 0;

console.log(obj1);
console.log(obj2);