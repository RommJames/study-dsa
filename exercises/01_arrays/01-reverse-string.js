// Create a function that reverse a string:
// 'Hi My name is Andrei' should be:
// ierdnA si eman iH

// My Solution
// fastest way
function reverse(str) {
  return str.split("").reverse().join("");
}

//with own looping or own method
function reverse2(str) {
  const arr = str.split("");
  const reverseArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }

  return reverseArr.join("");
}

console.log(reverse("Hi My name is Andrei"));
console.log(reverse2("Hi My name is Andrei"));

// Ideal Solution
function reverse3(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string")
    return "hmm that is not good";

  const backwards = [];
  const totalItems = str.length;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join("");
}

// ideal solution fastest way
const reverse4 = (str) => str.split("").reverse().join("");
const reverse5 = (str) => [...str].reverse().join("");

console.log(reverse3("Hi My name is Andrei"));
console.log(reverse4("Hi My name is Andrei"));
console.log(reverse5("Hi My name is Andrei"));
