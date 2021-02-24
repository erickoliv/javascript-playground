
function Obj({ name, bloodType, age, address }) {
  this.name = name;
  this.bloodType = bloodType;
  this.age = age;
  this.address = address;
}

const handler = {
  construct(target, args) {
    const { name } = args[0];
    if (!name) { 
      throw new Error('the name is invalid');
    }

    return new target(...args);
  }
};

const objConstructor = new Proxy(Obj, handler);

const obj1 = new objConstructor({
  name: '',
  bloodType: 'O+',
  age: 34,
  address: {
    zipCode: '1234567',
    street: 'a street',
    number: 42
  }
});

console.log(obj1);
