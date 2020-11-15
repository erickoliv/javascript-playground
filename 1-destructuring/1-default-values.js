const obj1 = {
  name: 'a name',
  address: {
    zipCode: '1234567',
    street: 'a street',
    number: 42
  }
};

// default values
const { name, age } = obj1;

console.log(name);
console.log(age);