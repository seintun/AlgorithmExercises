// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // reverse the array after converted to string
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");
  // assign returned value based on positive/negative of 'n'
  return parseInt(reversed) * Math.sign(n);
}

// function reverseInt(n) {
//   // reverse the array after converted to string
//   const reversed = n
//     .toString()
//     .split("")
//     .reverse()
//     .join("");
//   // assign negative if under 0
//   if (n < 0) {
//     return parseInt(reversed) * -1;
//   }
//   // otherwise return the value since positive
//   return parseInt(reversed);
// }

module.exports = reverseInt;
