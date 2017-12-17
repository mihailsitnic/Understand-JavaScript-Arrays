'use strict';

/* Array.prototype.reduce
/* используется для последовательной обработки каждого элемента массива с 
/* сохранением промежуточного результата.
/* ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## */

const itemsReduce = [1, 2, 3, 4, 5];
const sumReduce = itemsReduce.reduce((prev, itemsReduce) => prev + itemsReduce);
console.log(sumReduce);

const albumsReduce = [
  {
    title: 'Holiday in Spain',
    images: ['01.jpg', '02.jpg']
  },
  {
    title: 'House renovation',
    images: ['03.jpg', '04.jpg', '05.jpg']
  }
];

const numImages = albumsReduce.reduce((prevReduce, albumsReduce) => {
  return prevReduce + albumsReduce.images.length;
}, 0);
console.log(numImages);