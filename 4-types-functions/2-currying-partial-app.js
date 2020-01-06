//currying function

// function greet(greeting){
//   return function (name){
//     return `${greeting} ${name}`
//   }
// }

//partial application
function add(x, y){
  return x + y;
}

const add3 = partial(add, [3]);
console.log(add3(2));
