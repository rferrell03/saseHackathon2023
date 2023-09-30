var recipeContainer = document.getElementById("recipeCardHolder");
var counter = 0;

function addRecipe() {
    while(counter < 10){
        var newElement = document.createElement("div");
        newElement.textContent = counter;
        counter++;
        recipeContainer.append(newElement);
    }
}


