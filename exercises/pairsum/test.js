const pairsum = require("./index");

// pairsum([ -4, -3, 0, 1, 2, 4, 7]) --> [-4, 4]

test("function pairsum exists", () => {
  expect(typeof pairsum).toEqual("function");
});

test("pairsum find a pair of two that sums to 0", () => {
  const arr =  [-4, -3, 0, 1, 2, 4, 7];

  expect(pairsum(arr)).toEqual([-4, 4]);
});

test("pairsum find a pair of two that sums to 0", () => {
  const arr =  [-33, -32, 0, 1, 32, 42, 77];

  expect(pairsum(arr)).toEqual([-32, 32]);
});

test("pairsum find a pair of two that sums to 0", () => {
  const arr =  [-99, -32, 0, 1, 32, 42, 77];

  expect(pairsum(arr)).toEqual([-32, 32]);
});

test("pairsum find a pair of two that sums to 0", () => {
  const arr =  [-99, -3, -1, 1, 32, 42, 98];

  expect(pairsum(arr)).toEqual([-1, 1]);
});

test("pairsum does not exist, return false", () => {
  const arr =  [-99, -36, -11, 1, 32, 42, 98];

  expect(pairsum(arr)).toEqual(false);
});