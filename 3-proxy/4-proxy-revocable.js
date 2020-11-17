
var Obj = function({ name, bloodType, age, address }) {
  this.name = name;
  this.bloodType = bloodType;
  this.age = age;
  this.address = address;

  return Proxy.revocable(this, {
    get(target, prop) {
      if(typeof target[prop] === 'string') {
        return target[prop].toUpperCase();
      }

      return target[prop];
    }
  });
}

const { proxy: obj1, revoke } = new Obj({
  name: 'a name',
  bloodType: 'O+',
  age: 34,
  address: {
    zipCode: '1234567',
    street: 'a street',
    number: 42
  }
});

console.log(Object.keys(obj1));
console.log(obj1.name);

revoke();

// revoke(); // does nothing
// console.log(obj1.name);
// obj1.name = 'test';






