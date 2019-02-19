// --- Directions
// Given an array , find a pair of two that sums to 0
// --- Examples
// pairsum([ -4, -3, 0, 1, 2, 4, 7]) --> [-4, 4]
// pairsum([-33, -32, 0, 1, 32, 42, 77]) --> [-32, 32]
// pairsum([-99, -32, 0, 1, 32, 42, 77]) --> [-1, 1]
// pairsum([-99, -36, -11, 1, 32, 42, 98]) --> false

function pairsum(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

module.exports = pairsum;
