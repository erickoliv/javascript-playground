function isObject(object) {
  return object != null && typeof object === 'object';
}

console.log(isObject(null));
console.log(isObject('name'));
console.log(isObject(true));
console.log(isObject(function(){}));
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
    if (
      bothObjects && !isEqual(val1, val2)
      || !bothObjects && val1 !== val2
    ) {
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
  // print: function() { return `${this.name} - ${this.age}` }
}; 

const obj6 = { 
  name: 'a name',
  tags: ['A', 'B'],
  phone: '+5548999991234',
  age: 30, 
  // print: function() { return `${this.name} - ${this.age}` }
};

console.log(isEqual(obj5, obj6));
// console.log(obj6.print())
// console.log(obj5.print())
// console.log(obj5.print === obj6.print);