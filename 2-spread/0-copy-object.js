const obj1 = {
  name: 'a name',
  age: 34,
  address: {
    zipCode: '1234567',
    street: 'a street',
    number: 42
  }
};
// shallow 
const obj2 = { ...obj1 };

console.log(obj2);

obj1.address.street = 'a new street';

console.log(obj1);
console.log(obj2);

const obj3 = { ...obj1, age: 42, name: 'another name' };

console.log(obj3);