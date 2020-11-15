function isObject(object) {
  return object != null && typeof object === 'object';
}

console.log(isObject(null));
console.log(isObject('name'));
console.log(isObject({}));

function isEqual(a, b) {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    const val1 = a[key];
    const val2 = b[key];

    const bothObjects = isObject(val1) && isObject(val2);
    if (bothObjects && !isEqual(val1, val2)) {
      return false;
    }
    
    if (val1 !== val2) {
      return false;
    }
  }

  return true;
}

const obj5 = {
  name: 'a name',
  phone: '+5548999991234',
  age: 30,
  tags: ['A','B'],
}; 

const obj6 = {
  name: 'a name',
  tags: ['A','B'],
  phone: '+5548999991234',
  age: 30
};

console.log(isEqual(obj5, obj6));