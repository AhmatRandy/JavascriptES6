// function bisa memanggil semua variabel yang di definisikan
// var num1 = 2;
// var num2 = 2;
// const name = 'amat';
// const multiply = () => {
//    return num1 * num2;
// };
// console.log(multiply());
// const getScore = () => {
//    const string = 2;
//    const int = 2;
//    const add = () => {
//       return name + ' scored ' + (num1 + num2);
//    };
//    return add();
// };
// console.log(getScore()); // Returns "Chamakh scored 5"
// const foo = (i) => {
//    if (i <= 0) return console.log('begin: ' + i);
//    foo(i - 1);
//    console.log('end ' + i);
// };
// foo(3);
// fungsi bersarang
// const coba = (name, umur) => {
//    const result = () => {
//       return `hallo nama saya ${name} saya berumur ${umur}`;
//    };
//    return result();
// };
// console.log(coba('randy', 23));
// function outside(x, ...theArgs) {
//    function inside(y) {
//       return x + y + theArgs;
//    }
//    return inside;
// }
// console.log(outside(4, 10, 10)(10));
// function myConcat(separator) {
//    var result = ''; // initialize list
//    var i;
//    // iterate through arguments
//    for (i = 1; i < arguments.length; i++) {
//       result += arguments[i] + separator;
//    }
//    return result;
// }
// console.log(myConcat(', ', 'red', 'orange', 'blue', 'kontol'));
// function multiply(multiplier, ...theArgs) {
//    return theArgs.map((x) => multiplier * x);
// }
// var arr = multiply(2, 3, 2, 3);
// console.log(arr);

words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
const appendedWords = words.filter((word, index, arr) => {
   arr.push('new');
   return word.length < 6;
});

console.log(appendedWords);
