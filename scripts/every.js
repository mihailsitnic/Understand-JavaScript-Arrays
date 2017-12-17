/* Array.prototype.every();
/* every - используется для проверки массива.
/* возвращает true, если вызов callback вернёт true для каждого элемента arr.
/* ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## */

const itemsEvery = [1, 2, 3, 4, 5];
const resultEvery = itemsEvery.every(x => x < 10);
console.log(resultEvery);

// example
const fieldsEvery = [
  {
    field: 'email',
    value: 'mihail.sitnic@gmail.com',
    errors: []
  },
  {
    field: 'name',
    value: '',
    errors: ['No name provided']
  }
];
const isValidEvery = fieldsEvery.every(x => x.errors.length === 0 );
console.log(isValidEvery);