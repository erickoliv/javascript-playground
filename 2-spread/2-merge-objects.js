const obj1 = {
  name: 'a name',
  bloodType: 'O+',
  age: 34,
};

const obj2 = {
  age: 40, // same key
  address: {
    zipCode: '1234567',
    street: 'a street',
    number: 42
  },
  fullAddress: function(){
    return `${address.street}, ${address.number}\n${address.zipCode}`;
  }
};

const obj3 = {...obj1, ...obj2}

console.log(obj1);
console.log(obj2);
console.log(obj3);

