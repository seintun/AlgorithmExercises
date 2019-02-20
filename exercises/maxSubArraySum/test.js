const maxSubArraySum = require("./index");

// Find the largest sum of subArray based on provided size

test("function maxSubArraySum exists", () => {
  expect(typeof maxSubArraySum).toEqual("function");
});

test("maxSubArraySum find the biggest arraySum with provided size that equal to 19", () => {
  // Sample input, return 19
  const arr = [2, 6, 9, 2, 1, 8, 5, 6, 3];
  const num = 3;

  expect(maxSubArraySum(arr, num)).toEqual(19);
});

test("maxSubArraySum find the biggest arraySum with provided size that equal to 39", () => {
  // Sample input, return 19
  const arr = [2, 6, 9, 5, 8, 8, 9, 6, 3, 11, 4];
  const num = 5;

  expect(maxSubArraySum(arr, num)).toEqual(39);
});

test("maxSubArraySum find the biggest arraySum with provided size that equal to 83", () => {
  // Sample input, return 19
  const arr = [21, 16, 9, 5, 8, 8, 9, 6, 3, 11, 55, 14];
  const num = 4;

  expect(maxSubArraySum(arr, num)).toEqual(83);
});
