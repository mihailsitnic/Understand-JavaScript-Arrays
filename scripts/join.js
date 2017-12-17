'use strict';

/* Array.prototype.join();
/* join - берет массив и склеивает его в строку, используя str как разделитель.
/* ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## */

var names = ['Mihail', 'Nicolai', 'Dmitrii'];
console.log(names.join(' '));

// example
var name = 'mihail sitnic';
var upper = name.split(' ') // [mihail, sitnic]
  .map(x => x.charAt(0).toUpperCase() + x.slice(1)) // [Mihail, Sitnic]
  .join(' '); // [Mihail Sitnic]

console.log(upper);
