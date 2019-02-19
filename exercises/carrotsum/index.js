// --- Directions
// Find the sum of the value of highest index in the first sub-array + it's subsequent value after + the value of subsquent array using the same index.
// --- Examples
// carrotsum([
//   [5, 7, 8, 6, 3],
//   [0, 0, 7, 0, 4],
//   [4, 6, 3, 4, 9],
//   [3, 1, 0, 5, 8]
// ]) --> 27 by finding the highest in the first sub-array which is 8, + then 6 + 3 + 7 + 3 + 0 = 27

// carrotsum([
//   [6, 4, 3, 5, 3],
//   [0, 0, 7, 0, 4],
//   [4, 6, 3, 4, 9],
//   [3, 1, 0, 5, 8]
// ]) --> 28
// horizontal: 6 + 4 + 3 + 5 + 3  + vertical: 0 + 4 + 3 = 28

// carrotsum([
//   [0, 1, 2, 3, 5],
//   [0, 0, 7, 0, 4],
//   [4, 6, 3, 4, 2],
//   [3, 1, 0, 5, 8]
// ]) --> 19
// horizontal: 5  + vertical: 4 + 2 + 8 = 19

function carrotSum(array) {}

module.exports = carrotSum;
