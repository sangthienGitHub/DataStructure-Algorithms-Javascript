const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//Big O notation: 0(n^2) in time complexity, space complexity is O(1)
function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    //set current index as minimum
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        //update minimum if current is lower that what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

selectionSort(numbers);
console.log(numbers);
