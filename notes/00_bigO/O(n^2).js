// Log all pairs of array
function pairBoxes(boxes) {
  boxes.forEach((box) => {
    boxes.forEach((box2) => {
      console.log("pair: ", box, " & ", box2);
    });
  });
}

const boxes = [1, 2, 3, 4, 5];

pairBoxes(boxes);

// If nested loops we use multiplication => O(n * n) = > O(n^2)
