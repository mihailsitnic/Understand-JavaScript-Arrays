/* Array.prototype.sort();
/* sort - сортирует массив на месте
/* ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## */

var itemsSort = [10, 30, 2, 20];
itemsSort.sort((a, b) => a - b);
console.log(itemsSort);

// example
var lessonSort = [
  {
    title: 'JavaScript Array methods in depht - concat',
    views: 1000
  },
  {
    title: 'JavaScript Array methods in depht - slice',
    views: 1050
  },
  {
    title: 'JavaScript Array methods in depht - join',
    views: 1025
  }
];
var listSort = lessonSort
  .sort((a, b) => a.views - b.views)
  .map(x => `   <li>${x.title} (${x.views})</li>`)
  .join('\n');
var outputSort = `<ul>\n${listSort}\n</ul>`
console.log(outputSort);
// var rootDiv = document.getElementById('root');
// rootDiv.innerHTML = outputSort;