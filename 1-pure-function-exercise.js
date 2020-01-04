
var users = [
  { name: "james", score: 90, tries: 1},
  { name: "mary", score: 20, tries: 9},
  { name: "joana", score: 20, tries: 3},
]
//pure functions
var storeUser = function (arr, user){
    for (let i=0; i< arr.length; i++){
    if (arr[i].name.toLowerCase() === user.name.toLowerCase()) {
      arr[1] = user;
      break;
    }
  }
}

// pure function
var getUser = function (arr, name ){
  for (let i=0; i< arr.length; i++){
    if (arr[i].name.toLowerCase() === name.toLowerCase
       ()) {
      return arr[1]
    }
  }
  return null;
}

// ------------------------------------------
//bleeding function
var updateScore1 = function(newAmt){
  users[currentUser].score  += newAmt;
};

//pure function 
var updateScore = function(user, newAmt){
  if(user){
      users.score  += newAmt;
      return user;
  }

};

//-----------------------------------------
//bleeding function
var returnUsers1 = function () {
  return users;
};

//-----------------------------------------
//bleeding function
var updateTries1 = function (){
  users[currentUser].tries++;
}

//pure functions
var updateTries = function(user){
  if(user){
    user.tries++;
    return user;
  }
}


//-----------------------------------------
//bleeding function
var updateUser1 = function (newUser){
  currentUser = newUser;
}



let usr = getUser(users, "Henry");
let usr1 = updateScore (usr, 30);
let usr2 = updateTries(usr1);
storeUser(usr2) 


/*
output : users

users
[[object Object] {
  name: "james",
  score: 90,
  tries: 1
}, [object Object] {
  name: "mary",
  score: 20,
  tries: 9
}, [object Object] {
  name: "joana",
  score: 20,
  tries: 3
}]
*/

