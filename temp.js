const cardWrapper = document.getElementById("recipeCardHolder");
const card = document.createElement('div');
card.className = "card";

const firstDiv = document.createElement('div');

const img = document.createElement('img');
img.src = ""; // IMG SRC HERE

const ingredientsTitle = document.createElement('h2');
ingredientsTitle.innerHTML = "Ingredients"

const ingredientList = document.createElement('ul');
//Creates ingredient list!
for(var a in arr){
    const newIngredient = document.createElement(li);
    newIngredient.innerHTML = //ARRAY WITH INGREDIENTS[i]
    ingredientList.appendChild(newIngredient);

}

firstDiv.appendChild(img);
firstDiv.appendChild(ingredientsTitle);
firstDiv.appendChild(ingredientList);
card.append(firstDiv);

//Second div is recipeName, prep information, instructions

const rightDiv = document.createElement("div");

// Create the "recipeNameArea" div
const recipeNameArea = document.createElement("div");
recipeNameArea.className = "recipeNameArea";

// Create the recipe name (h1)
const h1RecipeName = document.createElement("h1");
h1RecipeName.textContent = "Recipe name";

// Create the points value (h1)
const h1PointsValue = document.createElement("h1");
h1PointsValue.textContent = "Points value";

// Append h1 elements to recipeNameArea
recipeNameArea.appendChild(h1RecipeName);
recipeNameArea.appendChild(h1PointsValue);

// Create the "prepArea" div
const prepArea = document.createElement("div");
prepArea.className = "prepArea";

// Create prep time (h3)
const h3PrepTime = document.createElement("h3");
h3PrepTime.textContent = "Prep Time: 3 Hours";

// Create cook time (h3)
const h3CookTime = document.createElement("h3");
h3CookTime.textContent = "Cook time: 2 Hours";

// Create servings (h3)
const h3Servings = document.createElement("h3");
h3Servings.textContent = "Servings: 5 people";

prepArea.appendChild(h3PrepTime);
prepArea.appendChild(h3CookTime);
prepArea.appendChild(h3Servings);

rightDiv.appendChild(recipeNameArea);
rightDiv.appendChild(prepArea);

card.appendChild(firstDiv);
card.appendChild(rightDiv);

cardWrapper.appendChild(card)