const meals = [
  {id: 1, description : "Tea Break", calories: 100},
  {id: 2, description : "Lunch", calories: 400},
];

const meal = {id: 3, description : "Dinner", calories: 600};

const updatedMeals = [...meals, meal];

console.log(meals, updatedMeals);

//mapping an array 
const updatedMealsDescription = updatedMeals.map(updateDescription);

function updateDescription (meal){
  if (meal.id===2){
    return {
      ...meal,
      description: 'Early Lunch'
      
    };
  }
  return meal;
}

console.log(updatedMealsDescription)

/*
output 
[[object Object] {
  calories: 100,
  description: "Tea Break",
  id: 1
}, [object Object] {
  calories: 400,
  description: "Lunch",
  id: 2
}]
[[object Object] {
  calories: 100,
  description: "Tea Break",
  id: 1
}, [object Object] {
  calories: 400,
  description: "Lunch",
  id: 2
}, [object Object] {
  calories: 600,
  description: "Dinner",
  id: 3
}]
[[object Object] {
  calories: 100,
  description: "Tea Break",
  id: 1
}, [object Object] {
  calories: 400,
  description: "Early Lunch",
  id: 2
}, [object Object] {
  calories: 600,
  description: "Dinner",
  id: 3
}]
*/
