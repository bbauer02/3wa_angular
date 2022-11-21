// Exercice 4.1
class Recipe {
    name: string;
    star?: number; // attribut facultatif
}

let recipes: Recipe[] = []; // pour le type notation équivalente Array<Recipe>


let mockRecipes = [
    { name: 'Rillettes de tofu' },
    { name: 'Champignons farcis', star: 10 },
    { name: 'Houmous' },
    { name: 'Steak végétal' },
];

mockRecipes.forEach(recipe => {
    recipes.push(recipe);
});

mockRecipes.forEach(recipe => {
    console.log(`Name: ${recipe.name} star(s): ${recipe.star || 0}`);
});

// Exercice 4.2

let notes: Array<number> = [];
let count: number = 10;
while (count > 0) {
    notes.push(Math.round(Math.random()));
    count--;
}

console.log(notes);