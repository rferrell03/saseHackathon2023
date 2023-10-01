var recipeContainer = document.getElementById("recipeCardHolder");
//REMOVE THIS LOSER
var APIKey = "4d71d022dd444af3815791c9ea3f4d44";
//REMOVE
var numOfRecipes = 10;
var bulkRecipeString = "";
var bestRecipeId = "";
var RecipeNames = [];
var RecipePrepTimes = [];
var RecipeCookTimes = [];
var RecipeServings = [];
var RecipeComplexity = [];
var RecipeSteps = [];
var bestRecipeId;

function getRecipes()
{
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
        bestRecipeId = meal[0].id;
        console.log(bestRecipeId);
        getRecipeDetails();
        
        
        // recipe[0].key1 = {key2:"hello"};
        // console.log(recipe[0].key1.key2);
    }
}

function getRecipeDetails()
{
    var recipes = fetch("https://api.spoonacular.com/recipes/" + bestRecipeId + "/analyzedInstructions?apiKey=" + APIKey).then(res => res.json()).then(res => displayRecipes(res));
    function displayRecipes(recipe)
    {
        // for(let i =0;i<numOfRecipes;i++){
        //     console.log(recipe);
        // }
        console.log(recipe);
        console.log(bestRecipeId);
    }
}

function addRecipe() {
    getRecipes();
}


