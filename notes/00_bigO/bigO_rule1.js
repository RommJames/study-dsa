// 1st Rule - What is the worst case scenario?

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

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("run");
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
}

findNemo(animals);

// Worst Case Scenario - Might loop through all inside of the array
