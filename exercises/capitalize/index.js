// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution 02
function capitalize(str) {
  const words = [];

  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  
  return words.join(' ');
}

// // Solution 01
// function capitalize(str) {
//   const splitArr = str.split(" ");
//   let capitalized = "";
//   for (let char of splitArr) {
//     capitalized =
//       capitalized === ""
//         ? char[0].toUpperCase() + char.slice(1)
//         : (capitalized += " " + char[0].toUpperCase() + char.slice(1));
//   }
//   return capitalized;
// }

module.exports = capitalize;
