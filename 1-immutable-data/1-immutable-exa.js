const dinner ={
  description: "Dinner is served",
}
console.log(dinner)

// 1. In an Immutable way, add a property to the
// meal called calories setting it's value to 200,
// then log the result to the console

const dinnerWithCalories = {
  ...dinner,
  calories: 200,
};

console.log(dinnerWithCalories);

// 2. In an Immutable way, increase the calories 
// by 100 and print the result to the console

const caloriesIncreasedDinner ={
  ...dinnerWithCalories,
  calories: dinnerWithCalories.calories+100,
}
console.log(caloriesIncreasedDinner);

// 3. In an Immutable way, remove the calories property and log the result to the console
const {calories, ...dinnerWithoutCalories} = caloriesIncreasedDinner;
console.log(dinnerWithoutCalories)
