const carrotsum = require("./index");

// Find the sum of the value of highest index in the first sub-array + it's subsequent value after + the value of subsquent array using the same index.
// Example:
// carrotsum([
//   [5, 7, 8, 6, 3],
//   [0, 0, 7, 0, 4],
//   [4, 6, 3, 4, 9],
//   [3, 1, 0, 5, 8]
// ]) --> 27 by finding the highest in the first sub-array which is 8, + then 6 + 3 + 7 + 3 + 0 = 27
// horizontal: 8 + 6 + 3 +
// vertical: 0 +
// vertical: 4 +
// vertical: 3 = 27

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

test("function carrotsum exists", () => {
  expect(typeof carrotsum).toEqual("function");
});

test("carrotsum find a pair that sums to 27", () => {
  const arr = [
    [5, 7, 8, 6, 3],
    [0, 0, 7, 0, 4],
    [4, 6, 3, 4, 9],
    [3, 1, 0, 5, 8]
  ];

  expect(carrotsum(arr)).toEqual(27);
});

test("carrotsum find a pair that sums to 28", () => {
  const arr = [
    [6, 4, 3, 5, 3],
    [0, 0, 7, 0, 4],
    [4, 6, 3, 4, 9],
    [3, 1, 0, 5, 8]
  ];

  expect(carrotsum(arr)).toEqual(28);
});

test("carrotsum find a pair that sums to 19", () => {
  const arr = [
    [0, 1, 2, 3, 5],
    [0, 0, 7, 0, 4],
    [4, 6, 3, 4, 2],
    [3, 1, 0, 5, 8]
  ];

  expect(carrotsum(arr)).toEqual(19);
});
