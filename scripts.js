var recipeContainer = document.getElementById("recipeCardHolder");
//REMOVE THIS LOSER
//REMOVE
var numOfRecipes = 1;
var bulkRecipeString = "";
var meals = fetch("https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=" + `${numOfRecipes}` + "&ranking=1&ignorePantry=true&apiKey=" + APIKey).then(res => res.json()).then(res => displayMeals(res));
function displayMeals(meal)
{
    
    console.log(meal[0].title);
    var IDString = "";
    for (let i = 0; i < numOfRecipes; i++)
    {
        if (IDString.length > 1)
        {
            IDString +=  + "," + meal[i].id;
        }
        else
        {
            IDString += meal[i].id;
        }
        
    }
    bulkRecipeString = IDString;
    
    // recipe[0].key1 = {key2:"hello"};
    // console.log(recipe[0].key1.key2);
}

var recipes = fetch("https://api.spoonacular.com/recipes/324694/analyzedInstructions?apiKey=" + APIKey + "&ids=" + bulkRecipeString).then(res => res.json()).then(res => displayRecipes(res));
function displayRecipes(recipe)
{
    console.log(recipe[0].steps[0].step)
}
// function addRecipe() {
//     var newElement = document.createElement("div");
//     newElement.textContent = meals;
//     recipeContainer.append(newElement);
// }


