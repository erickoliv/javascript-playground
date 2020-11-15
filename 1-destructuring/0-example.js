const obj1 = {
  name: 'a name',
  bloodType: 'O+',
  age: 34,
  address: {
    zipCode: '1234567',
    street: 'a street',
    number: 42
  }
};

const { name, age } = obj1;

console.log(name);
console.log(age);

obj1.name = 'another name';

console.log(obj1);
console.log(name);