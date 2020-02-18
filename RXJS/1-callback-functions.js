function B (callback){
  callback('done');
}

function A (message){
  console.log(message);
}

B(A)
//output is done

/*
A callback is a function (A) passed as a parameter to another function 
(B) that performs an asynchronous operation. When (B) is done, 
it calls back (A) with the results of the operation. 
Callbacks are used to manage asynchronous flows such as network I/O, database access, or user input.
*/

/*
Callback hell. It’s easy to end up with lots of nested callbacks when handling highly asynchronous code. 
When that happens, code stops being linear and becomes hard to reason about. 
Whole applications end up passed around in callbacks, and they become difficult to maintain and debug.

Callbacks can run more than once. There’s no guarantee the same callback will be called only once. 
Multiple invocations can be hard to detect and can result in errors and general mayhem in your application.

Callbacks change error semantics. Callbacks break the traditional try/catch mechanism and rely 
on the programmer to check for errors and pass them around.

Concurrency gets increasingly complicated. Combining interdependent results of multiple asynchronous 
operations becomes difficult. It requires us to keep track of the state of each operation in temporal variables, 
and then delegate them to the final combination operation in the proper order.
*/
