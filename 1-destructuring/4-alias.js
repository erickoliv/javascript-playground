
const address = { zipCode: '223344', street: 'nameless street', number: 0 }

const obj1 = {
  name: 'a name',
  address: { zipCode: '1234567', street: 'a street', number: 42 }
};

const { name, address: personalAddress } = obj1;

console.log(name);
console.log(address);
console.log(personalAddress);