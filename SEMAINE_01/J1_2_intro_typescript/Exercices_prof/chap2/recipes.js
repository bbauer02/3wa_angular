// Exercice 4.1
var Recipe = /** @class */ (function () {
    function Recipe() {
    }
    return Recipe;
}());
var recipes = []; // pour le type notation équivalente Array<Recipe>
var mockRecipes = [
    { name: 'Rillettes de tofu' },
    { name: 'Champignons farcis', star: 10 },
    { name: 'Houmous' },
    { name: 'Steak végétal' },
];
mockRecipes.forEach(function (recipe) {
    recipes.push(recipe);
});
mockRecipes.forEach(function (recipe) {
    console.log("Name: " + recipe.name + " star(s): " + (recipe.star || 0));
});
// Exercice 4.2
var notes = [];
var count = 10;
while (count > 0) {
    notes.push(Math.round(Math.random()));
    count--;
}
console.log(notes);
