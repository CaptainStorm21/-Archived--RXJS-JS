const meals = [
  {id: 1, description : "Tea Break", calories: 100},
  {id: 2, description : "Lunch", calories: 400},
];

const meal = {id: 3, description : "Dinner", calories: 600};

const updateMeals = [...meals, meal];

console.log(meals, updateMeals);
