// --- Directions
// Find the biggest number of around the center of the cube
/**
 * 0, 7, 0
 * 6, 3, 4
 * 1, 0, 5
 */
// 7 is the largest number around 3
/**
 * 0, 0, 0
 * 6, 4, 4
 * 9, 0, 6
 */
// 9 is the largest number around 4
/**
 * 0, 0, 0
 * 6, 2, 4
 * 6, 0, 6
 */
// 6 is the largest number around 2
// Sample input, return 7
// const sample = [
//   [5, 7, 8, 6, 3],
//   [0, 0, 7, 0, 4],
//   [4, 6, 3, 4, 9],
//   [3, 1, 0, 5, 8],
//   [5, 8, 0, 3, 1]
// ]

// Helper function that identify the center of the cube, return the xy cordinates alike
function findCenter(cube) {
  let vCenterIdx = Math.floor(cube.length / 2);
  let hCenterIdx = Math.floor(cube[vCenterIdx].length / 2);
  return { vertical: vCenterIdx, horizontal: hCenterIdx };
}

function biggestofcenter(input) {
  const cIdx = findCenter(input);
  // Using the helper function vertical index, identify upper, mi, lower subarray
  const upperArr = input[cIdx.vertical - 1];
  const midArr = input[cIdx.vertical];
  const lowerArr = input[cIdx.vertical + 1];

  // Function that will assign key:value pair to numMap object along with frequency counter
  // accepts horizontal idx and current level of upper, mid, lower
  const numMap = {};
  const mapAssign = function(idx, level) {
    numMap[level[idx]] = ++numMap[level[idx]] || 1;
  };
  // switch cases that assigns key:value of left, center, right of  current  idx
  for (let i = 0; i < upperArr.length; i++) {
    switch (i) {
      case cIdx.horizontal:
        mapAssign(i, upperArr);
        break;
      case cIdx.horizontal - 1:
        mapAssign(i, upperArr);
        break;
      case cIdx.horizontal + 1:
        mapAssign(i, upperArr);
        break;
    }
  }
  for (let i = 0; i < midArr.length; i++) {
    switch (i) {
      case cIdx.horizontal - 1:
        mapAssign(i, midArr);
        break;
      case cIdx.horizontal + 1:
        mapAssign(i, midArr);
        break;
    }
  }
  for (let i = 0; i < lowerArr.length; i++) {
    switch (i) {
      case cIdx.horizontal:
        mapAssign(i, lowerArr);
        break;
      case cIdx.horizontal - 1:
        mapAssign(i, lowerArr);
        break;
      case cIdx.horizontal + 1:
        mapAssign(i, lowerArr);
        break;
    }
  }
  // Iteriate through the key value of biggest number and filter out for the biggest
  let biggestNum = 0;
  for (x in numMap) {
    if (parseInt(x) > biggestNum) {
      biggestNum = parseInt(x);
    }
  }
  return biggestNum;
}

module.exports = biggestofcenter;
