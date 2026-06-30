// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  // O(input)
  for (let i = 0; i < input.length; i++) {
    anotherFunction(); // O(n)
    let stranger = true; // (n)
    a++; // O(n)
  }

  return a; // O(1)
}

function anotherFunction() {
  console.log("hi");
}

console.log(funChallenge([1, 2, 3, 4, 5]));
/*
MyANSWER: Big O(n) -> Cause it runs the function base on number of inputs which is 5 based on my sample
But it can be also O(1), cause it returns only the a which is O(1)
-=--=-=-=-=-=-=-
CORRECT ANSWER:
sol'n
-> O(1 + 1 + 1) + O(n + n + n + n)
-> 3 + 4n
-=-=-=--> Big (3 +  4n) ---> Big O(n)
*/
