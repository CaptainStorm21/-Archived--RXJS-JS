

/*
functional programming 
- avoid side effects
- avoid mutation
- avoid shared states
- user pure function
- use function composition
- use declarative code instea of imperative 
*/

// SIDE EFFECT
/*
changing a value globally (variable, property of data structures)
changing the origina value of a function argument
throwing an exception
printing to the screen or logging
triggering an external process
invoking other functions that have side-effects
*/

let cnt = 0;

let increment = function () {
  cnt++;
  return cnt;
};

//without side effects
//pure function
let increment_pure = function (num){
  return num+1;
}



let average = function(scores){
  var total;
  for (let i = 0; i<scores.length; i++){
    total += scores[i];
  }
   return total/scores.length;
};
average ([90, 32, 11, 2]);

/*
Pure Functions are the functions that depends on
the input provided and not on external data that changes

Pure function does't cause side effects. 
It doesn't cause change beyond its scope. 

Given the same inpu, the function with always 
return the same output
*/

