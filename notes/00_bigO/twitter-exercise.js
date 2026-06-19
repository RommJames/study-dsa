// Problem 1: If you are working in Twitter, and your boss asked you to build a feature, perhaps a feature that ALLOWS ANYBODY TO CLICK A BUTTON next to their names and RETRIEVE their most recent tweet and their oldest tweet

// -> Find 1st, Find Nth...

const array = ["hi", "my", "teddy"];

console.log(array[0]); // O(1)
console.log(array[array.length - 1]); // O(1)

// Problem 2: Now compare the dates of tweets
const array2 = [
  {
    tweet: "hi",
    date: 2012,
  },
  { tweeet: "my", date: 2014 },
  { tweet: "teddy", date: 2018 },
];

// Worst Case: O(n^2) -> Cause we need to compare each, possible we will have a nested loops
// We must store the information in a better format or do something to avoid the worst case scenario
