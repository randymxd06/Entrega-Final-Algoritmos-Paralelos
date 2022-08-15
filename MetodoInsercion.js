const generateInsertionArray = () => {

    const array = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 50));
    
    console.log(array);

    return array;
  
}

function insertSort() {

    const array = generateInsertionArray();

    for (let i = 1; i < array.length; i++) {

        let current = array[i];

        let j;

        for(j=i-1; j >= 0 && array[j] > current; j--) {

            array[j + 1] = array[j]

        }

        array[j + 1] = current;

    }

    console.log(array)

    return array;

}

console.time('Insertion Sort')

let insertionSortStartTime = window.performance.now();

insertSort();

let insertionSortEndTime = window.performance.now();

console.timeEnd('Insertion Sort')

let insertionSortTime = insertionSortEndTime - insertionSortStartTime;

document.getElementById('insertSortTime').innerHTML = [document.getElementById('insertSortTime').innerHTML+insertionSortTime.toFixed(16).toString()+" ms"]