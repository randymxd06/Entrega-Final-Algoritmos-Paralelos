const generateLinearSearchArray = () => {

    const arr = [];
  
    for (let i = 0; i < 100000; i++) {
  
      arr.push(i);
      
    }
    
    return arr;
  
}

const linearSearch = (value, list) => {
   
    for (let i = 0; i < list.length; i++) {

        if(value == list[i]){

            return i;

        }

    }

   return;
    
}

const list = generateLinearSearchArray();

const searchValue = 10001;

console.time('Búsqueda Secuencial');

let linearSearchStartTime = window.performance.now();

console.log(linearSearch(searchValue, list));

let linearSearchEndTime = window.performance.now();

console.timeEnd('Búsqueda Secuencial');

let linearSearchTime = (linearSearchEndTime - linearSearchStartTime);

document.getElementById('linearSearchTime').innerHTML = [document.getElementById('linearSearchTime').innerHTML+linearSearchTime.toFixed(16).toString()+" ms"];