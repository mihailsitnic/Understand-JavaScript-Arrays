'use strict';

/* Array.prototype.indexOf();
/* indexOf/lastIndexOf - возвращает номер элемента searchElement в массиве arr
/* или -1, если его нет.
/* ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## */

var family = ['Iurii', 'Tatiana', 'Mihail', 'Milana'];
var linda = family.indexOf('Linda') > -1;
// console.log(family.indexOf('Milana'));
// console.log(linda);
if (!linda) {
  family.push('Linda');
}
console.log(family);

// example
var shane = {
  name: 'Shane'
}
var sally = {
  name: 'Sally'
}
var kittie = {
  name: 'Kittie'
}

var newFamily = [shane, sally, kittie];
console.log(newFamily.indexOf(kittie));

// example
var whitelist = ['.css', '.js'];
var events = [
  {
    file: 'css/core.css'
  },
  {
    file: 'js/app.js'
  },
  {
    file: 'index.html'
  }
];

// var filtered = events.filter(event => {
//   var ext = require('path').extname(event.file);
//   return whitelist.indexOf(ext) > -1;
// })
// node index.js filtered
