'use strict';

/* Array.prototype.slice();
/* slice - копирует участок массива от begin до end, не включая end.
/* ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## */

var itemsSlice = [1, 2, 3, 4, 5];
var copy = itemsSlice.slice(0, 1);
copy.push(6);
copy[0] = 100;
console.log(itemsSlice);
console.log(copy);

// example
var pesonSlice = {
  name: 'mihail-sitnic'
};
var filters = {
  'deslugify': x => x.replace('-', ' '),
  'uppercase': x => x.toUpperCase()
};
var input = 'name | deslugify | uppercase'; // SHANE OSBOURNE
var section = input.split('|').map(x => x.trim()); // [name, deslugify, uppercase]
var ref = pesonSlice[section[0]];
var output = section
  .slice(1)
  .reduce((prev, next) => {
    if(filters[next]){
      return filters[next].call(null, prev);
    }
    return prev
  }, ref);

console.log(output);