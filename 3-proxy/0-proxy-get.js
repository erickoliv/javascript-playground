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

const proxy = new Proxy(obj1, {
  get(target, prop) {
    if(typeof target[prop] === 'string') {
      return target[prop].toUpperCase();
    }

    if (prop === 'age') {
      throw new Error('you cannot access the age');
    }

    return target[prop];
  }
});

console.log(proxy.name);
console.log(proxy.age);