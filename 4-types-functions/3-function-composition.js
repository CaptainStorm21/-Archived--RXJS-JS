/*
Composition function

function slice(apple){
return apple-slices;
}

function bake (apple-slices){
return apple-pie
}
*/

//import Ramda library into html head
//<script src="//cdn.jsdelivr.net/npm/ramda@0.25.0/dist/ramda.min.js"></script>


const sentence = "These script tags add the variable R on the browser's global scope.";

const wordList = R.split(' ', sentence);
console.log(wordList);

const wordCount = R.length(wordList);
console.log(wordCount);

//reactive
const wordCount2 = R.length(R.split(' ', sentence));
console.log(wordCount2);


//method2
const countTheWord = R.compose(R.length, R.split);
console.log(countTheWord(' ', sentence));

//method 3
const countTheWord3 = R.compose(R.length, R.split(' '));
console.log(countTheWord3(sentence))

//method 4 pipes
const countTheWords4 = R.pipe(R.split(' '), R.length);
console.log(countTheWords4(sentence))
