'use strict';

/* Array.prototype.map();
/* map - используется для трансформации массива.
/* Он создаёт новый массив, который будет состоять из 
/* результатов вызова callback(item, i, arr) для каждого элемента arr.
/* ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## */

const itemsMap = [
  {
    firstname: 'Mihail',
    lastname: 'Sitnic',
    active: true
  },
  {
    firstname: 'Nicolai',
    lastname: 'Voronin',
    active: true
  },
  {
    firstname: 'Dmitrii',
    lastname: 'Lazucov',
    active: false
  },
]
const mapped = itemsMap
  .filter(x => x.active)
  .map(x => x.firstname);
console.log(createHtmlList(mapped));
console.log(createHtmlList(['cat', 'dog']));

function createHtmlList(itemsMap) {
  const listElements = itemsMap.map(x => `    <li>${x}</li>`).join('\n');
  return `<ul>\n${listElements}\n</ul>`
}