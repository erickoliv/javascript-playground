function newObj({ name = 'default name', age, address }) {
  return {
    name: name.toUpperCase(),
    age,
    address
   }
}

const obj1 = {
  name: 'a name',
  age: 34,
  address: {
    street: 'a street',
    number: 42
  }
};

const obj2 = newObj(obj1);

console.log(obj1);
console.log(obj2);

obj1.address.number = 55;

console.log(obj1);
console.log(obj2);

