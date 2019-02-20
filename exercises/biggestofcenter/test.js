const biggestofcenter = require("./index");

// Find the biggest number of around the center of the cube
// Example:
// Sample input, return 19
// const sample = [
//   [5, 7, 8],
//   [0, 0, 7],
//   [4, 19, 3]
// ]
// Sample input, return 7
// const sample = [
//   [5, 7, 8, 6, 3],
//   [0, 0, 7, 0, 4],
//   [4, 6, 3, 4, 9],
//   [3, 1, 0, 5, 8],
//   [5, 8, 0, 3, 1]
// ]
// Sample input, return 909
// const sample = [
//   [121, 712, 821, 216, 324],
//   [124, 110, 723, 160, 442],
//   [435, 654, 36, 444, 921],
//   [335, 111, 909, 525, 812],
//   [566, 831, 210, 352, 112]
// ]

test("function biggestofcenter exists", () => {
  expect(typeof biggestofcenter).toEqual("function");
});

test("biggestofcenter find the biggest that equal to 19", () => {
// Sample input, return 19
const sample = [
  [5, 7, 8],
  [0, 0, 7],
  [4, 19, 3]
]

  expect(biggestofcenter(sample)).toEqual(19);
});

test("biggestofcenter find the biggest that equal to multiple 7", () => {
// Sample input, return 7
const sample = [
  [5, 7, 8, 6, 3],
  [0, 0, 7, 7, 4],
  [4, 6, 3, 4, 9],
  [3, 7, 0, 7, 8],
  [5, 8, 0, 3, 1]
]
  
  expect(biggestofcenter(sample)).toEqual(7);
});

test("biggestofcenter find the biggest that equal to 999", () => {
// Sample input, return 909
const sample = [
  [121, 712, 821, 216, 324],
  [124, 110, 723, 160, 442],
  [435, 654, 36, 999, 921],
  [335, 111, 909, 525, 812],
  [566, 831, 210, 352, 112]
]
  
  expect(biggestofcenter(sample)).toEqual(999);
});