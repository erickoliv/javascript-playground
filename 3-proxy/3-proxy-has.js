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
    if (prop === 'age') {
      throw new Error('you cannot access the age');
    }

    return target[prop];
  },
  set(target, prop, value) {
    if (prop === 'age') {
      throw new Error('you cannot modify the age');
    }
    target[prop] = value;

    return true;
  }
  // has(target, prop) {
  //   if (prop === 'age') {
  //     return false;
  //   }
  //   return prop in target;
  // }
});

// proxy.age = 12;
// console.log(proxy.age);

console.log('name' in proxy);
console.log('streetName' in proxy);
console.log('age' in proxy);

console.log(Object.keys(proxy));