const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
//console.log(ingredients);


// Write a while loop that prints out the contents of ingredients:
console.log("Kitchen ingredients: ");
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}


// Write a for loop that prints out the contents of ingredients:
console.log("Kitchen ingredients: ");
for (i = 0; i <ingredients.length; i++) {
  console.log(ingredients[i]);
}


// Write any loop (while or for) that prints out the contents of ingredients backwards:

// this code to reverse array
let reversed = ingredients.reverse();

console.log("Kitchen ingredients: ");
let i = 0;
while (i < reversed.length) {
  console.log(reversed[i]);
  i++;
}
