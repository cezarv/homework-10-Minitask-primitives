// Task 1
// Функция которая принимает строку и возвращает количество слов в ней.

// function countingWords(str) {
//   return str.split(" ").filter(function (a) {
//     return a != "";
//   }).length;
// }
// console.log(countingWords("Я вчу Джаваскріпт і дуже довольний"));


// Task 2
// Функция, которая получает строку и возвращает размер самого 
// большого слова в ней


// function biggestWord(string) {
//   let str = string.split(" ");
//   let longest = 0;
//   let word = null;
//   str.forEach(function (str) {
//     if (longest < str.length) {
//       longest = str.length;
//       word = str;
//     }
//   });
//   return word;
// }
// console.log(biggestWord("Я вчу Джаваскріпт і дуже довольний"));