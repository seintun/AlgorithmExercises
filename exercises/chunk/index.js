// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // Initialed chunked with empty array
  const chunked = [];
  // Initialized index with 0, that will increment by size
  let index = 0;
  // Iterate with while until index not less than array.lenght
  while (index < array.length) {
    // slice the array by index & size, then push as sub-array
    chunked.push(array.slice(index, index + size));
    // Increment index by size
    index += size;
  }
  return chunked;
}

// function chunk(array, size) {
//   // Create an empty array that holds sub-array of chunked
//   const chunked = [];
//   // Iterate through each element of array
//   for (let element of array) {
//     // Initialize last as the last element of chunked sub-array
//     const last = chunked[chunked.length - 1];
//     // Condition that check if there isn't last element or the length is === to size
//     if (!last || last.length === size) {
//       // a new sub-array with current elenment will be added to chunked
//       chunked.push([element]);
//     } else {
//       // Otherwise, push element into existing sub-array
//       last.push(element);
//     }
//   }
//   return chunked;
// }

module.exports = chunk;
