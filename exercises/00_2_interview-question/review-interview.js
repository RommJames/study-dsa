array = [1, 3, 5, 7, 8];

// Naive
function hasPairWithSum(arr, sum) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }

  return false;
}

// Better;
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

console.log(hasPairWithSum(array, 7));
console.log(hasPairWithSum2(array, 5));
console.log(hasPairWithSum2(array, 10));
