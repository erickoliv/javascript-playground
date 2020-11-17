const obj1 = {
  name: 'a name',
  age: 34,
  bloodType: 'O+',
  address: {
    zipCode: '1234567',
    street: 'a street',
    number: 42
  }
};

const { name, age, ...rest} = obj1;

console.log(name);
console.log(age);
console.log(rest);