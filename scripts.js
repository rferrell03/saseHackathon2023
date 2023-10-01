var recipeContainer = document.getElementById("recipeCardHolder");
//REMOVE THIS LOSER
var APIKey = "84d7cc98787b4d9fa805fa3a7566ec72";
//REMOVE
var numOfRecipes = 10;
var bestRecipeId = "";
var RecipeNames = [];
var RecipePoints = [];
var RecipeSteps;
var bestRecipeId;
var RecipeImages = [];
var RecipeIngredients = [];
var RecipeMissingIngredients = [];
var RecipeTime = [];
var ingredientString;
var ingredientArr = [];
var FormedIngredientString = "";
var realRecipeSteps;
var astring = "";

function getRecipes()
{
    ingredientString = "";
    ingredientString = document.getElementById("ingredientInput").value;
    ingredientArr = ingredientString.split(",");
    for(var i=0;i<ingredientArr.length;i++){
       if(i!=ingredientArr.length-1){
            FormedIngredientString += ingredientArr[i]+",+";
       }
       else{
            FormedIngredientString += ingredientArr[i];
       }
    }
    ingredientArr = FormedIngredientString.split(" ");
    FormedIngredientString = "";
    for(var i=0;i<ingredientArr.length;i++){
             FormedIngredientString += ingredientArr[i];
     }
    
    var meals = fetch("https://api.spoonacular.com/recipes/findByIngredients?ingredients="+FormedIngredientString+"=" + `${numOfRecipes}` + "&ranking=1&ignorePantry=true&apiKey=" + APIKey).then(res => res.json()).then(res => displayMeals(res));
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
                RecipeMissingIngredients[i] = meal[i].missedIngredientCount;
                RecipeTime[i] = (Math.floor(Math.random() * 10)+6)*5;
            }
            else
            {
                IDString += meal[i].id;
                RecipeNames[i] = meal[i].title;
                RecipeImages[i] = meal[i].image;
                RecipeMissingIngredients[i] = meal[i].missedIngredientCount;
                RecipeTime[i] = (Math.floor(Math.random() * 10)+6)*5;
            }
            if(meal[i].likes<10){
                RecipePoints[i] = 100
            }
            else if(meal[i].likes<75){
                RecipePoints[i] = 200
            }
            else {
                RecipePoints[i] = 300
            }
            

        }
        bestRecipeId = meal[0].id;
        console.log(RecipeTime);
        
        // recipe[0].key1 = {key2:"hello"};
        // console.log(recipe[0].key1.key2);
        getRecipeDetails();
        createCards(astring);
    }
}

function getRecipeDetails()
{
    // var tempArray = "";
    // var recipes = fetch("https://api.spoonacular.com/recipes/" + bestRecipeId + "/analyzedInstructions?apiKey=" + APIKey).then(res => res.json()).then(res => displayRecipes(res));
    // function displayRecipes(recipe)
    // {
    //     for (let i = 0; i < recipe[0].steps.length; i++)
    //     {

    //         tempArray += recipe[0].steps[i].step;
    //         var currentIngredients = recipe[0].steps[i].ingredients;
    //         currentIngredients.forEach(element => {
    //             if (!RecipeIngredients.includes(element.name))
    //             {
    //                 RecipeIngredients.push(element.name);
    //             }
    //         });
    //     }
    //     var realRecipeSteps = RecipeSteps;
    //     console.log(tempArray);
    //     astring = tempArray;
    //     //return tempArray;
    //     //console.log(bestRecipeId);
    // }
    //return tempArray;
}


function createCards(something){
    for(var a = 0; a < RecipeNames.length; a++){
        const cardWrapper = document.getElementById("recipeCardHolder");
        const card = document.createElement('div');
        card.className = "card";

        const firstDiv = document.createElement('div');

        const img = document.createElement('img');
        img.src = RecipeImages[a]; // IMG SRC HERE

        const ingredientsTitle = document.createElement('h2');
        ingredientsTitle.innerHTML = "Ingredients"

        const ingredientList = document.createElement('ul');
        //Creates ingredient list!
        firstDiv.appendChild(img);
        firstDiv.appendChild(ingredientsTitle);
        //card.append(firstDiv);

        //Second div is recipeName, prep information, instructions

        const rightDiv = document.createElement("div");

        // Create the "recipeNameArea" div
        const recipeNameArea = document.createElement("div");
        recipeNameArea.className = "recipeNameArea";

        // Create the recipe name (h1)
        const h1RecipeName = document.createElement("h1");
        h1RecipeName.textContent = RecipeNames[a];

        // Create the points value (h1)
        const h1PointsValue = document.createElement("h2");
        h1PointsValue.textContent = "Point value:";
        const recipePoint = document.createElement('span');
        recipePoint.innerHTML = RecipePoints[a];
        h1PointsValue.appendChild(recipePoint);
        // Append h1 elements to recipeNameArea
        recipeNameArea.appendChild(h1RecipeName);
        recipeNameArea.appendChild(h1PointsValue);

        // Create the "prepArea" div
        const prepArea = document.createElement("div");
        prepArea.className = "prepArea";

        // Create prep time (h3)
        const h3PrepTime = document.createElement("h3");
        h3PrepTime.textContent = "Estimated Time: " + RecipeTime[a];


        const h3Missing = document.createElement("h3");
        h3Missing.textContent = "Missing Ingredients: " + RecipeMissingIngredients[a];

        prepArea.appendChild(h3PrepTime);
        prepArea.appendChild(h3Missing);
        rightDiv.appendChild(recipeNameArea);
        rightDiv.appendChild(prepArea);

        
        if(a == 0){

            var tempArray = [];
            var recipes = fetch("https://api.spoonacular.com/recipes/" + bestRecipeId + "/analyzedInstructions?apiKey=" + APIKey).then(res => res.json()).then(res => displayRecipes(res));
            function displayRecipes(recipe)
            {
                for (let i = 0; i < recipe[0].steps.length; i++)
                {
        
                    tempArray[i] = recipe[0].steps[i].step;
                    var currentIngredients = recipe[0].steps[i].ingredients;
                    currentIngredients.forEach(element => {
                        if (!RecipeIngredients.includes(element.name))
                        {
                            RecipeIngredients.push(element.name);
                        }
                    });
                }
                //var realRecipeSteps = RecipeSteps;
                console.log(RecipeIngredients);
                //astring = tempArray;
                //return tempArray;
                //console.log(bestRecipeId);
            

            //getRecipeDetails(something);
            console.log(tempArray);
           // console.log(RecipeSteps);
            for(var c = 0; c < tempArray.length; c++){

                const stepNumber = document.createElement('h2');
                stepNumber.innerHTML = "Step " + c;
                rightDiv.appendChild(stepNumber);
                const instruction = document.createElement('p');
                instruction.innerHTML = tempArray[c];
                rightDiv.appendChild(instruction);
                console.log("Loop ran")
            }
            console.log("if statement ran");
            
            for(var b = 0; b < 5; b++){
                console.log(RecipeIngredients);
                //console.log("Inside loop for ingredients");
                const newIngredient = document.createElement('li');
                newIngredient.innerHTML = RecipeIngredients[b];
                ingredientList.appendChild(newIngredient);
            }
        }
        }  

        firstDiv.appendChild(ingredientList);

        card.appendChild(firstDiv);
        card.appendChild(rightDiv);

        cardWrapper.appendChild(card)
        //console.log("Reached the end of loop" + a);
    }

    const cardsId = document.getElementsByClassName("card")

    for(let i = 0; i < cardsId.length; i++) {
        cardsId[i].addEventListener("click", function() {
            if(cardsId[i].classList.contains("card animationTrigger")){
                cardsId[i].className = "card";
            }else{
                cardsId[i].className = "card animationTrigger"
            }
        })
    }
}

function addRecipe() {
    getRecipes();
}


