const obj1 = {
  name: 'obj1 name',
  phone: '+5548999991234'
};
const obj2 = {
  phone: '+5548999991234',
  name: 'obj1 name'
};
const obj3 = {
  phone: '+5548999991234',
  name: 'another name'
};

console.log(obj1 === obj2);

function isContactEqual(a, b) {
  if (a.name !== b.name) {
    return false;
  }

  if (a.phone !== b.phone) {
    return false;
  }

  return true;
}

console.log(isContactEqual(obj1, obj2));
console.log(isContactEqual(obj1, obj3));

