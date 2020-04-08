// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(8) should return 21

// implement fibonacci using for loop
// Big O notation: O(n-2) => O(n), good for time complexity but hard to read
function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
}
const iterativeResult = fibonacciIterative(8);
console.log("Iterative Fibonacci", iterativeResult);

// implement fibonacci using for recursion
// Big O notation: O(2^n), bad for time complexity but easy to read
function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
const recursiveResult = fibonacciRecursive(8);
console.log("Recursive Fibonacci", recursiveResult);
