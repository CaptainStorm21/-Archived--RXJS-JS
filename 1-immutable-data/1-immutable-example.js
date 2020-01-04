
//immutable data - the data that never changes
//string is immutable

const dinner = {
  id: 1,
  description: "Roasted Potatoes"
};

const updatedDinner = {
  id: dinner.id,
  description: dinner.description,
  calories: 800
};

console.log(dinner, updatedDinner)

////spread operator

const breakfast = {
  //...dinner,
  ...updatedDinner,
  description: "Clam Chowder",
  drink: "Water",
}

console.log("this is breakfast")
console.log(breakfast)

///removing an item from the object
// descructure + rest

//too verbose
// const description = updatedDinner.description;
// const calories = updatedDinner.calories;
// console.log(description, calories)

const {description, calories} = updatedDinner;
console.log(description, calories);

const { id, ...dinnerWithoutId} = updatedDinner;
console.log(dinnerWithoutId)
