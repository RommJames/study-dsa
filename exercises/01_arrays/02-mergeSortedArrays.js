//mergeSortedArrays([0,3,4,31],[4,6,30])
// [0,3,4,4,6,30,31]

const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];

// my solution
// fastest way
function mergeSortedArrays(arr1, arr2) {
  const merge = [...arr1, ...arr2];

  return merge.sort((a, b) => a - b);
}

// ideal solution
function mergeSortedArrays2(arr1, arr2) {
  const mergeArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //Check Input
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    if (!array2Item || array1Item < array2Item) {
      mergeArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergeArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergeArray;
}

console.log(mergeSortedArrays(array1, array2));
console.log(mergeSortedArrays2(array1, array2));
