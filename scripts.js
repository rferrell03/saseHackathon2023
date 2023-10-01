var recipeContainer = document.getElementById("recipeCardHolder");
//REMOVE THIS LOSER
var APIKey = "4d71d022dd444af3815791c9ea3f4d44";
//REMOVE
var numOfRecipes = 10;
var bulkRecipeString = "";

var RecipeNames = [];
var RecipePrepTimes = [];
var RecipeCookTimes = [];
var RecipeServings = [];
var RecipeComplexity = [];
var RecipeSteps = [];


var meals = fetch("https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=" + `${numOfRecipes}` + "&ranking=1&ignorePantry=true&apiKey=" + APIKey).then(res => res.json()).then(res => displayMeals(res));
function displayMeals(meal)
{
    
    
    var IDString = "";
   
    for (let i = 0; i < numOfRecipes; i++)
    {
        if (IDString.length > 1)
        {
            IDString +=  "," + meal[i].id;
            RecipeNames[i] = meal[i].title;
           
        }
        else
        {
            IDString += meal[i].id;
            RecipeNames[i] = meal[i].title;
        }
        
    }
    console.log(RecipeNames);
    bulkRecipeString = meal[0].id;
    console.log(IDString);
    
    
    // recipe[0].key1 = {key2:"hello"};
    // console.log(recipe[0].key1.key2);
}

var recipes = fetch("https://api.spoonacular.com/recipes/"+`${bulkRecipeString}`+"/analyzedInstructions?apiKey=" + APIKey).then(res => res.json()).then(res => displayRecipes(res));
function displayRecipes(recipe)
{
    for(let i =0;i<numOfRecipes;i++){
        console.log(recipe[0].steps[i].step);
    }
    console.log(recipe);
}
// function addRecipe() {
//     var newElement = document.createElement("div");
//     newElement.textContent = meals;
//     recipeContainer.append(newElement);
// }


