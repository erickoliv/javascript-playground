const obj1 = {
  name: 'obj1 name',
  phone: '+5548999991234'
};

const obj2 = {
  name: 'obj1 name',
  phone: '+5548999991234'
};

const obj3 = obj1;

console.log(obj1);
console.log(obj2);
console.log(obj1 === obj2);

console.log(obj1 === obj2);
console.log(obj1 === obj3);

console.log(Object.is(obj1, obj2));
console.log(Object.is(obj1, obj3));
