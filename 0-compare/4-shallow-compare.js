const obj1 = {
  phone: '+5548999991234',
  name: 'a name'
};

const obj2 = {
  name: 'a name',
  phone: '+5548999991234'
}; 

const obj3 = {
  name: 'a name',
  phone: '+5548999991234',
  age: 30
}; 

const obj4 = {
  name: ' a name',
  phone: '+5548999991234',
  age: 31
};

console.log(Object.keys(obj1));
console.log(Object.keys(obj2));
console.log(Object.keys(obj3));

function isEqual(a, b) {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  
  return true;
}

console.log(obj1);
console.log(obj2);
console.log(isEqual(obj1, obj2));

console.log(obj3);
console.log(isEqual(obj1, obj3));

console.log(obj4);
console.log(isEqual(obj3, obj4));

const obj5 = {
  name: 'a name',
  phone: '+5548999991234',
  age: 30,
  tags: ['A','B']
}; 

const obj6 = {
  name: 'a name',
  phone: '+5548999991234',
  age: 30,
  tags: ['A','B']
};

console.log(isEqual(obj5, obj6));
console.log(obj5.tags === obj6.tags);