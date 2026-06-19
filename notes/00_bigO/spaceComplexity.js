//#5 Space complexity O(1)
function boooo(n) {
  for (let i = 0; i < n; i++) {
    console.log("booooo");
  }

  // it is O(1) because we only created 1 variable that allocate the memory
}
boooo(5);

// #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }

  // O(n) - Because we creating a new data structure with array, each item is an additional memory space on our computers
  return hiArray;
}

console.log(arrayOfHiNTimes(6));
