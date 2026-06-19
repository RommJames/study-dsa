// Rule 3 - Different Terms for Inputs
function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach((boxes) => {
    console.log(boxes);
  });
  boxes2.forEach((boxes) => {
    console.log(boxes);
  });
}

const boxes = ["box1", "box2", "box3"];
const boxes2 = ["box2.1", "box2.2", "box2.3"];
compressBoxesTwice(boxes, boxes2);

// O(a + b) => O(n)
