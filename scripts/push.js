'use strict';

/* Array.prototype.map();
/* Метод push() добавляет один или более элементов в конец массива 
/* и возвращает новую длину массива.
/* ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## */

const petsPush = ['cat', 'dog'];
const wishlistPush = ['hamster', 'horse', 'snake'];
petsPush.push.apply(petsPush, wishlistPush);
console.log(petsPush)