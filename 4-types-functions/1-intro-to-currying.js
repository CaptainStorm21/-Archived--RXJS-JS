//old js
// function greet (greeting, name){
//   return `${greeting} ${name}`;
//   }
// }

//high order function - takes a function as a param
function greet (greeting){
  return function(name){
    return `${greeting} ${name}`;
    //greeting is a closure Closures are functions that can 
    //access and use variables that aren't directly passed 
    //into the function
    //The parameter greeting can be used anywhere between 
    //the opening curly brace here and the closing curly brace
  }
}

console.log(greet('Good morning')('James')); 


const friends = ['Martha', 'Jim', 'Oscar', "Ally"];
// const firendGreetings = friends.map(greet);
// console.log(firendGreetings)
// //ouput ["Martha 0", "Jim 1", "Oscar 2", "Ally 3"]

const firendGreetings = friends.map(greet('Good morning'));
console.log(firendGreetings);
