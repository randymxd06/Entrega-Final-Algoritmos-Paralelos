const generateQuickSortArray = () => {

  const array = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 50));
  
  console.log(array);

  return array;

}

function quicksort(array) {

  if (array.length <= 1) {

    return array;

  }

  let pivot = array[0];

  let left = []; 

  let right = [];

  for (let i = 1; i < array.length; i++) {

    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);

  }

  return quicksort(left).concat(pivot, quicksort(right));

};

const generatedQuickSortArray = generateQuickSortArray();

console.time('Quick Sort');

let quickSortStartTime = window.performance.now();

console.log(quicksort(generatedQuickSortArray));

let quickSortEndTime = window.performance.now();

console.timeEnd('Quick Sort');

let quickSortTime = quickSortEndTime - quickSortStartTime;

document.getElementById('quickSortTime').innerHTML = [document.getElementById('quickSortTime').innerHTML+quickSortTime.toFixed(16).toString()+" ms"]