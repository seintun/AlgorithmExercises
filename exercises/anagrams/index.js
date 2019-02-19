// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 03
function anagrams(stringA, stringB) {
  // Comparte formatted string if equal
  if (stringA.length !== stringB.length) {
    return false;
  }
  const lookup = {};

  // set value with lookup and increment per frequency
  for (let i = 0; i < stringA.length; i++) {
    let letter = stringA[i];
    // if the letter exists, increment otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  // compare each letter of stringB with lookup and decremenet the value
  for (let i = 0; i < stringB.length; i++) {
    let letter = stringB[i];
    // if can't find letter or letter is zero, then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  // after for loop on stringB is completed and all letter exists
  return true;
}

//  // Solution 02
// function anagrams(stringA, stringB) {
//   // Comparte formatted string if equal
//   return formatter(stringA) === formatter(stringB);
// }
// // Helper function that removes non-alphanumeric, convert lowercase, split/sort/join
// function formatter(str) {
//   return str
//     .replace(/[^\w]/g, "")
//     .toLowerCase()
//     .split("")
//     .sort()
//     .join("");
// }

//  // Solution 01
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   // Validation if aCharMap and bCharMap has the same number of keys
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   // Compare if each key exist with aCharMap and bCharMap
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// // Helper function that remove any non-alphanumeric and convert into lowercase
// // charMap will hold the count of each alphanumeric that appears
// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

module.exports = anagrams;
