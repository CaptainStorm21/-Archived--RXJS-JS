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

//remove an item from an array
const filteredMeal = updatedMeals.filter(function(meal){
  return meal.id !==1;
})

console.log(updatedMealsDescription, filteredMeal)
