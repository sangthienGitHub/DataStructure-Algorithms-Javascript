// implement factorial using for loop
// Big O notation: O(n), good for time complexity but hard to read
function findFactorialIterative(number) {
  let answer = 1;
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

const result1 = findFactorialIterative(5);
console.log("Iterative", result1);

// implement factorial using for recursion
// Big O notation: O(2^n), bad for time complexity but easy to read
function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}

const result2 = findFactorialRecursive(5);
console.log("Recursive", result2);
