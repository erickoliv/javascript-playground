### Object:
#### Comparação de objetos

Para comparar tipos primitivos em Javascript, basta utilizar os operadores de equalidade disponíveis para comparação:

```js
const first = 'a value';
const second = 'a value';

console.log(first == second); // loose
console.log(first === second); // strict 
```

Para objetos, esse tipo de comparação não é aplicável por conta de sua estrutura mais complexa:

```js
const obj1 = { name: 'obj1 name', phone: '+5548999991234' };

const obj2 = { name: 'obj1 name', phone: '+5548999991234' };

const obj3 = obj1;

console.log(obj1 === obj2); // false
console.log(obj1 === obj3); // true

console.log(Object.is(obj1, obj2)); // false 
console.log(Object.is(obj1, obj3)); // true
```

Apesar de `obj1`e `obj2` terem os mesmos atributos e valores, suas variáveis referenciam instancias diferentes em memória, retornando `false` para a comparação por coerção ou estrita.

Como `obj3` foi atribuída a partir da referência de `obj1`, sua comparação retornará `true`. Além disso, as alterações em `obj1` refletirão em `obj2`, por compartilharem a mesma referência em memória.

Assim, precisamos definir explicitamente como comparar os dois objetos. Se temos um objeto com um ou dois atributos, podemos fazer uma comparação atributo por atributo. Porém, esse é um tipo de solução que não escala para objetos muito grandes: 

```js
const obj1 = {
  name: 'obj1 name',
  phone: '+5548999991234'
};
const obj2 = {
  phone: '+5548999991234',
  name: 'obj1 name'
};

function isContactEqual(a, b) {
  if (a.name !== b.name) {
    return false;
  }

  if (a.phone !== b.phone) {
    return false;
  }

  return true;
}

console.log(isContactEqual(obj1, obj2)); // true
```

Conforme a lista de atributos aumenta, a função de comparação aumentaria em tamanho e complexidade. Podemos criar uma nova função, que compara a quantidade de atributos entre dois objetos através de sua lista de `keys`, realizando uma comparação literal pelo valor correspondente logo em seguida:

```js
const obj1 = { phone: '+5548999991234', name: 'a name' };

const obj2 = { name: 'a name', phone: '+5548999991234' }; 

const obj3 = { name: 'a name', phone: '+5548999991234', age: 30 }; 

const obj4 = { name: ' a name', phone: '+5548999991234', age: 31 };

console.log(Object.keys(obj1)); // [ 'phone', 'name' ]

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

console.log(isEqual(obj1, obj2)); // true

console.log(isEqual(obj1, obj3)); // false

console.log(isEqual(obj3, obj4)); // false


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

console.log(isEqual(obj5, obj6)); // false
console.log(obj5.tags === obj6.tags); // false
```

Um objeto pode possuir atributos que não são de tipos primitivos. Nesse cenário, uma comparação literal atributo a atributo não resolve. Nesse caso, precisamos identificar os atributos que são do tipo `object` para realizar a comparação literal de maneira recursiva:

```js
function isObject(object) {
  return object != null && typeof object === 'object';
}

console.log(isObject(null)); // false
console.log(isObject('name')); // false
console.log(isObject({})); // true

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
}; 

const obj6 = {
  name: 'a name',
  tags: ['A','B'],
  phone: '+5548999991234',
  age: 30
};

console.log(isEqual(obj5, obj6)); // true
```

Para evitar esse tipo de implementação em cada aplicação, há soluções especializadas dentro do universo de bibliotecas javascript para resolução desse tipo de comparação:

- _.isEqual(value, other) (lodash)
- fast-deep-equal 
- util.isDeepStrictEqual (nodejs buitin)

https://dmitripavlutin.com/how-to-compare-objects-in-javascript/
https://medium.com/@danvitoriano/igualdade-entre-objetos-9e1104bd23ea
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
https://medium.com/javascript-in-plain-english/comparing-objects-in-javascript-ce2dc1f3de7f

#### Destructuring

A desestruturação de objetos é uma funcionalidade Javascript que permit extrair atributos de objetos, atribuindo em variáveis. 
```js
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

const { name, age } = obj1;

console.log(name); // a name
console.log(age); // age 
```
A desestruturação é feita através do nome do atributo no objeto. Não é necessário extrair todos os atributos, além de não ser necessária seguir uma ordem de extração. 
Caso o atributo sendo extraído não exista no objeto de origem, será atribuído o valor de `undefined`. Caso necessário, é possível atribuir um valor padrão para o atributo, caso ele não exista no objeto de origem:

```js
const obj1 = {
  name: 'a name',
  address: {
    zipCode: '1234567',
    street: 'a street',
    number: 42
  }
};

// default values
const { name, age = 30, bloodType } = obj1;

console.log(name); // a name
console.log(age); // 30 
console.log(bloodType); // undefined
```

Caso um atributo extraído não seja de um tipo primitivo, é importante ter em conta que a nova variável ainda compartilha a mesma referência que o atributo interno do objeto de origem. Assim, as alterações realizadas em um dos lados refletirão em ambas variáveis:

```js
const obj1 = {
  name: 'a name',
  address: { zipCode: '1234567', street: ' a street', number: 42 } 
};

let { name, address } = obj1;

console.log(name); // a name
console.log(address); // { zipCode: '1234567', street: ' a street', number: 42 } 

address.number = 100;

console.log(address); // { zipCode: '1234567', street: ' a street', number: 100 } 
console.log(obj1.address); // { zipCode: '1234567', street: ' a street', number: 100 } 

// new object reference to address
address = { zipCode: '468521', street: ' a street', number: 0 }; 

console.log(address); // { zipCode: '468521', street: ' a street', number: 0 } 
console.log(obj1.address); // { zipCode: '1234567', street: ' a street', number: 100 } 
```

É possível realizar a extração de atributos renomeando a variável de destino, através do uso de um `alias`:
```js
// we already have a variable named address in the scope
const address = { zipCode: '223344', street: 'nameless street', number: 0 }

const obj1 = {
  name: 'a name',
  address: { zipCode: '1234567', street: 'a street', number: 42 }
};

// extract address from obj1 and then set it to personalAddress
const { name, address: personalAddress } = obj1;

console.log(name); // a name
console.log(address); { zipCode: '223344', street: 'nameless street', number: 0 } 
console.log(personalAddress); // { zipCode: '1234567', street: 'a street', number: 42 } 
```

Para extraír atributos de um objeto, atribuindo em variáveis já declaradas, é necessário o uso de uma sintaxe ligeiramente diferente, envolvendo a extração com parênteses `()`:
```js
let name = 'another name';
let age = 0;

const obj1 = {
  name: 'a name',
  bloodType: 'O+',
  age: 34,
  address: { zipCode: '1234567', street: 'a street', number: 42 }
};

// { name, age } = obj1; // throw a error, since name and age are already declared in the scope
({ name, age }) = obj1;

console.log(name); // a name 
console.log(age); // 34
```

Também é possível utilizar a desestruturação em parâmetros de função, informando os valores a ser extraídos entre chaves `{}` na lista de argumentos da função:

```js
function newObj({ name = 'default name', age, address }) {
  return {
    name: name.toUpperCase(),
    age,
    address
   }
}

const obj1 = {
  name: 'a name',
  age: 34,
  address: {
    street: 'a street',
    number: 42
  }
};

const obj2 = newObj(obj1);

console.log(obj1); // { name: 'a name', age: 34, address: { street: 'a street', number: 42 } } 
console.log(obj2); // { name: 'A NAME', age: 34, address: { street: 'a street', number: 42 } } 

// it's important to remember that they still share the same memory reference for address
obj1.address.number = 55;

console.log(obj1); // { name: 'a name', age: 34, address: { street: 'a street', number: 55 } } 
console.log(obj2); // { name: 'A NAME', age: 34, address: { street: 'a street', number: 55 } } 

```
#### Spread

O operador de `spread` é utilizado para expandir um objeto iterável, como array ou string, para ser utilizado onde Zero ou mais argumentos/elementos são esperados. Também pode ser utilizado para expandir um objeto em suas propriedades compostas de `chave:valor`.

Podemos utilizar a funcionalidade de spread para juntar dois objetos:
```js
const obj1 = {
  name: 'a name',
  bloodType: 'O+',
  age: 34,
};

const obj2 = {
  age: 40, // same key
  address: {
    zipCode: '1234567',
    street: 'a street',
    number: 42
  },
  fullAddress: function(){
    return `${address.street}, ${address.number}\n${address.zipCode}`;
  }
};

const obj3 = {...obj1, ...obj2}

console.log(obj1); // { name: 'a name', bloodType: 'O+', age: 34 } 
console.log(obj2); // { age: 40, address: { zipCode: '1234567', street: 'a street', number: 42 }, fullAddress: [λ: fullAddress] } 
console.log(obj3); // { name: 'a name', bloodType: 'O+', age: 40, address: { zipCode: '1234567', street: 'a street', number: 42 }, fullAddress: [λ: fullAddress] } 

```

Também pode ser utilizado para criar cópias `shallow` de objetos:
```js
const obj1 = {
  name: 'a name',
  age: 34,
  address: {
    zipCode: '1234567',
    street: 'a street',
    number: 42
  }
};
// shallow 
const obj2 = { ...obj1 };
```

É possível alterar os valores dos atributos durante o espalhamento:
```js
const obj1 = {
  name: 'a name',
  age: 34,
};

const obj2 = { ...obj1, age: 55 };

console.log(obj1); // { name: 'a name', age: 34 } 
console.log(obj2); // { name: 'a name', age: 55 } 
```

Em conjunto com a operação de desestruturação, é possível extrair os atributos restantes utilizando o operador de spread:

```js
const obj1 = {
  name: 'a name',
  age: 34,
  bloodType: 'O+',
  address: {
    zipCode: '1234567',
    street: 'a street',
    number: 42
  }
};

const { name, age, ...rest} = obj1;

console.log(name); // a name
console.log(age); // 34
console.log(rest); // { bloodType: 'O+', address: { zipCode: '1234567', street: 'a street', number: 42 } } 
```

#### Proxy

O objeto Proxy é utilizado para interceptar e definir comportamentos customizados para operações em um objeto `target`, que pode ser qualquer tipo de objeto, incluindo um array, uma função, ou até mesmo outro Proxy.

Um Proxy intercepta operações em objetos através de métodos chamados de `traps`, que definem um comportamento antes de encaminhar (ou não) a operação para o objeto alvo.

- `get`: trap para acesso direto a propiedade.
- `set`: trap para alterar o valor de uma propriedade.
- `has`: trap para o operador in.
- `deleteProperty`: trap para remover uma propriedade do objeto com `delete`
- `getPrototypeOf`: trap para Object.getPrototypeOf().
- `setPrototypeOf`: trap para Object.setPrototypeOf().
- `isExtensible`: trap para Object.isExtensible().
- `preventExtensions`: trap para Object.preventExtensions().
- `getOwnPropertyDescriptor`: trap para Object.getOwnPropertyDescriptor().
- `defineProperty`: trap para Object.defineProperty().
- `ownKeys`: trap para Object.getOwnPropertyNames().
- `apply`: trap para execução de função
- `construct`: trap para o construtor do objeto quando utilizado `new`

No exemplo abaixo, é criado um Proxy para interceptar as operações de `get` em propriedades do `obj1`. Caso a propriedade que está sendo acessada seja do tipo `string`, o valor da propriedade é transformado em letras maiúsculas antes de retornar o valor. 
Logo depois, definimos uma validação que não permite acessar o valor da propriedade `age` diretamente, retornando um erro no lugar do valor correspondente:
```js
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
    if(typeof target[prop] === 'string') {
      return target[prop].toUpperCase();
    }

    if (prop === 'age') {
      throw new Error('you cannot access the age');
    }

    return target[prop];
  }
});

console.log(proxy.name); // A NAME
console.log(proxy.age); // throws Error: you cannot access the age
```

Neste outro exemplo, definimos um `trap` para a operação de `set`, que é executado ao tentar alterar o valor de alguma propriedade do objeto alvo. Caso o nome do atributo que está sendo alterado seja `age`, a operação dispara um erro e a atribuição não é executada: 

```js
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
proxy.age = 42;

```

