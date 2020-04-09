const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//Big O notation: 0(n^2) in time complexity -> nested loop
//Space complexity 0(1) => not need to create any memory space
function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        //swapping item
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
