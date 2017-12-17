'use strict';

/* Array.prototype.concat();
/* concat - создаёт новый массив, в который копируются элементы из arr,
/* а также value1, value2, ... valueN.
/* ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## */

var items = [1, 2];
var newItems1 = items.concat(3, 4, 5, 'string', undefined);
var newItems2 = items.concat([3, 4], [5, [6, 7]]);

console.log(newItems1);
console.log(newItems2);

var people = [
  {
    name: 'Nick'
  },
  {
    name: 'Mihail'
  },
  {
    name: 'Dmitii'
  }
];

var people2 = [
  {
    name: 'Nikita'
  },
  {
    name: 'Stas'
  },
  {
    name: 'Sergei'
  }
];

// people.forEach(function (person) {
//   console.log(person.name);
// })

people
  .concat(people2)
  .forEach(function (person) {
    console.log(person.name);
})
