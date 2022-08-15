const generateBubbleSortArray = () => {

    const array = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 50));
    
    console.log(array);

    return array;
  
}

function BubbleSort() {

    const arr = generateBubbleSortArray();

    let len, i, k, aux;

    len = arr.length;

    for (k = 1; k < len; k++) {

        for (i = 0; i < (len - k); i++) {

            if (arr[i] > arr[i + 1]) {

                aux = arr[i];

                arr[i] = arr[i + 1];

                arr[i + 1] = aux;

            }

        }
        
    }
    
    console.log(arr);
    
}

console.time('Bubble Sort');

let bubbleSortStartTime = window.performance.now();

BubbleSort();

let bubbleSortEndTime = window.performance.now();

console.timeEnd('Bubble Sort');

let bubbleSortTime = bubbleSortEndTime - bubbleSortStartTime;

document.getElementById('bubbleSortTime').innerHTML = [document.getElementById('bubbleSortTime').innerHTML+bubbleSortTime.toFixed(16).toString()+" ms"];