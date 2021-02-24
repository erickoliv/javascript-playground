const obj1 = {
  name: 'a name',
  bloodType: 'O+',
  age: 34
};

const proxy = new Proxy(obj1, {
  set(target, prop, value) {
    if (prop === 'age') {
      throw new Error('you cannot modify the age');
    }

    target[prop] = value;
    return true;
  }
});

proxy.name = 'another name';
console.log(proxy);
// proxy.age = 42;

delete(proxy.age);
console.log(proxy);
