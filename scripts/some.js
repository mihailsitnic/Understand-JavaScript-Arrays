'use strict';

/* Array.prototype.some();
/* some - используются для проверки массива.
/* возвращает true, если вызов callback вернёт true для какого-нибудь элемента arr.
/* ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## */

var itemsSum = [1, 2, 3, 4, 5,];
var hasThree = itemsSum.some(x => x === 3);
console.log(hasThree);

// example
var tasks = [
  {
    title: 'Do laundry',
    completed: true
  },
  {
    title: 'Feed the cat',
    completed: false
  },
  {
    title: 'Watch the array lessons on egghed.io',
    completed: true
  },
];
var listSum = document.getElementById('root');
listSum.classList.add(
  tasks.some(tasks => tasks.completed === false)
    ? 'task-list-uncompleted'
    : 'task-list-completed'
);
listSum.innerHTML = tasks
  .map(x => x.completed ? `<s>${x.title}</s>` : x.title)
  .map(x => `<li>${x}</li>`)
  .join('');