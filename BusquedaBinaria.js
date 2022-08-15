const generateBinarySearchArray = ()=> {

    const arr = [];
  
    for (let i = 0; i < 100000; i++) {
  
      arr.push(i);
      
    }
    
    return arr;
  
}

function binarySearch(value, arr) {

  let first = 0;

  let last = arr.length - 1;

  let position = -1;

  let found = false;

  let middle;

  while (found === false && first <= last) {

      middle = Math.floor((first + last)/2);

      if (arr[middle] == value) {

          found = true;

          position = middle;

      } else if (arr[middle] > value) {

          last = middle - 1;

      } else {

        first = middle + 1;

      }

  }

  return position;
  
}

const arr = generateBinarySearchArray();

const value = 10001;

console.time('Búsqueda Binaria');

let binarySearchStartTime = window.performance.now();

console.log(binarySearch(value, arr));

let binarySearchEndTime = window.performance.now();

console.timeEnd('Búsqueda Binaria');

let binarySearchTime = binarySearchEndTime - binarySearchStartTime;

document.getElementById('binarySearchTime').innerHTML = [document.getElementById('binarySearchTime').innerHTML+binarySearchTime.toFixed(16).toString()+" ms"];