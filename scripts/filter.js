'use strict';

/* Array.prototype.filter();
/* filter - используется для фильтрации массива через функцию.
/* Он создаёт новый массив, в который войдут только те элементы arr, 
/* для которых вызов callback(item, i, arr) возвратит true.
/* ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## */

var itemsFilter = [1, 2, 3, 4, 5];
var filtered = itemsFilter.filter(x => x > 3);
console.log(filtered);

// example
var peopleFilter = [
  {
    name: 'Mihail',
    pets: ['cat', 'dog']
  },
  {
    name: 'Nicolai',
    pets: ['horse']
  },
  {
    name: 'Dmitrii'
  },
];
var peopleFiltered = peopleFilter.filter(x => x.pets);
console.log(peopleFiltered);

// example
var lessonFilter = [
  {
    title: 'JavaScript Array methods in depht - join',
    views: 960,
    tags: ['array', 'join']
  },
  {
    title: 'JavaScript Array methods in depht - concat',
    views: 1050,
    tags: ['array', 'concat']
  },
  {
    title: 'JavaScript Array methods in depht - slice',
    views: 2503,
    tags: ['array', 'slice']
  },
  {
    title: 'JavaScript Array methods in depht - bind',
    views: 2500,
    tags: ['array', 'bind']
  }
];
var minViews = 1000;
var searchTerm = 'array';
var filterFiltered = lessonFilter
  .filter(x => x.tags.indexOf(searchTerm) > -1)
  .filter(x => x.views > minViews)
  .sort((a, b) => b.views - a.views)
  .map(x => `   <li>${x.title}</li>`)
  .join('\n');
console.log(
  `<ul>\n${filterFiltered}\n</ul>`
)