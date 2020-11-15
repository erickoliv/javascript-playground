const obj1 = {
  name: 'obj1 name',
  phone: '+5548999991234'
};

const obj2 = {
  name: 'obj1 name',
  phone: '+5548999991234',
};

console.log(JSON.stringify(obj1));
console.log(JSON.stringify(obj2));

function isEquals(a , b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

console.log(isEquals(obj1, obj2));

const obj3 = obj1;

console.log(isEquals(obj2, obj3));

obj3.name = 'a different name';

console.log('obj1', obj1);
console.log('obj3', obj3);

console.log(isEquals(obj1, obj2));

const obj4 = {
  phone: '+5548999991234',
  name: 'obj1 name'
}; 

console.log(isEquals(obj2, obj4));
console.log('obj2', JSON.stringify(obj2));
console.log('obj4', JSON.stringify(obj4));