// --- Directions
// Find the largest sum of subArray based on provided size

// Example 1
// arr = [2, 6, 9, 2, 1, 8, 5 ,6, 3]
// num = 3
// maxSubArraySum(arr, num)
// 8 + 5 + 6 is largest
// return 19

// Example 2
// arr = [2, 6, 9, 5, 8, 8, 9 ,6, 3, 11, 4]
// num = 5
// maxSubArraySum(arr, num)
// 9 + 5+ 8 + 5 + 6 is largest
// return 39

function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

module.exports = maxSubArraySum;
