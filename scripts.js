var recipeContainer = document.getElementById("recipeCardHolder");
//REMOVE THIS LOSER
var APIKey = "4d71d022dd444af3815791c9ea3f4d44";
//REMOVE
var numOfRecipes = 10;
var bestRecipeId = "";
var RecipeNames = [];
//var RecipePrepTimes = [];
//var RecipeCookTimes = [];
//var RecipeServings = [];
var RecipePoints = [];
var RecipeSteps = [];
var bestRecipeId;
var RecipeImages = [];
var RecipeIngredients = [];

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
                RecipeImages[i] = meal[i].image;
            }
            else
            {
                IDString += meal[i].id;
                RecipeNames[i] = meal[i].title;
            }
            
        }
        bestRecipeId = meal[0].id;
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
        for (let i = 0; i < recipe[0].steps.length; i++)
        {
            RecipeSteps[i] = recipe[0].steps[i].step;
            var currentIngredients = recipe[0].steps[i].ingredients;
            currentIngredients.forEach(element => {
                if (!RecipeIngredients.includes(element.name))
                {
                    RecipeIngredients.push(element.name);
                }
            });
        }
        console.log(RecipeIngredients);
        
        //console.log(bestRecipeId);
    }
}

function addRecipe() {
    getRecipes();
}


