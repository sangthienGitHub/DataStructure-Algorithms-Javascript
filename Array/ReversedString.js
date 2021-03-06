function reverse(str) {
  if (!str || typeof str != "string" || str.length < 2) return str;

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}

//using built-in functions of string
function reverse2(str) {
  if (!str || typeof str != "string" || str.length < 2) return str;
  return str.split("").reverse().join("");
}

//shortcut using es6 syntax
const reverse3 = (str) => [...str].reverse().join("");

console.log(reverse("welcome to programming world!"));
console.log(reverse2("welcome to programming world!"));
console.log(reverse3("welcome to programming world!"));
