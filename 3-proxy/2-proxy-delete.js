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
  },
  deleteProperty (_, prop) {
    if (prop === 'age') {
      throw new Error('you cannot delete the age');
    }
    return true;
  }
});

proxy.name = 'another name';
console.log(proxy);

try {
  console.log(proxy.age);
  proxy.age = 42;
  delete(proxy.age);  
  
} catch (error) {
  console.log(error);
}

console.log(proxy);