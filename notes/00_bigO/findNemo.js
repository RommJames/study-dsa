// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
const nemo = ["nemo"];
const animals = [
  "lion",
  "tiger",
  "bear",
  "wolf",
  "fox",
  "deer",
  "eagle",
  "shark",
  "whale",
  "dolphin",
  "octopus",
  "penguin",
  "panda",
  "koala",
  "giraffe",
  "zebra",
  "rhino",
  "hippo",
  "cheetah",
  "leopard",
  "nemo",
  "elephant",
  "crocodile",
  "kangaroo",
  "owl",
  "bat",
];

const large = new Array(100).fill("nemo");

function findNemo(array) {
  // let t0 = performance.now();

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }

  // let t1 = performance.now();
  // console.log("Call to find Nemo took " + (t1 - t0) + " miliseconds");
}

const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

findNemo(large); // Big O(n) --> Linear Time
// time increases with the number of operations
// -> Big O(n) depends on the number of inputs
// -> O(array.length)

console.log(animals[0]); // Big O(1) --> Constant Time
// -> Even how many inputs or in array, it will only take 1 to get and print the value/output
logFirstTwoBoxes(boxes); // O(2) --> Still a Big O(1) cause it's constant time
