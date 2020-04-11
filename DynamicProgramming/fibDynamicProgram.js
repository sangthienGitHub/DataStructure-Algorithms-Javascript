// O(2^n) becomes O(n) in time complexity
//However space complexity is increased
let calculations1 = 0;
let calculations2 = 0;

function fibonacci(n) {
  calculations1++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonaccitMaster() {
  let cache = {};
  return function fib(n) {
    calculations2++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fasterFib = fibonaccitMaster();
console.log("Normal Fib", fibonacci(20));
console.log("DP", fasterFib(20));
console.log("we did " + calculations1 + " calculations for normal fib");
console.log("we did " + calculations2 + " calculations for DP fib");
