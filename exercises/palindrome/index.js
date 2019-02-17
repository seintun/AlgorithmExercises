// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // split string into array to access the value
  return str.split("").every((char, i) => {
    // compare values left & right inwards to validate bool true
    // [2,5,7,5,2] -> 2 <=> 2, 5 <=> 5, 7 == 7
    return char === str[str.length - i - 1];
  });
}

// function palindrome(str) {
//   const reversed = str
//     .split("")
//     .reverse()
//     .join("");
//   // compare beforeReversal string with afterReversal string
//   return str === reversed;
// }

module.exports = palindrome;
