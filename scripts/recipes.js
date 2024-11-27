const recipes = {
  chocolateChipCookies: {
        name: "Chocolate Chip Cookies",
        cookTime: "20 mins",
        servings: "12",
        ingredients: [
            "1 cup flour",
            "1/2 cup sugar",
            "1/2 cup butter",
            "1 cup chocolate chips",
            "1 egg"
        ],
        directions: [
            "Preheat oven to 350°F.",
            "Cream together butter and sugar.",
            "Add egg and mix until smooth.",
            "Stir in flour and chocolate chips.",
            "Drop by spoonfuls onto baking sheet and bake for 12 minutes."
        ]
    },
        lavenderScones: {
        name: "Lavender Scones",
        cookTime: "30 mins",
        servings: "6",
        ingredients: [
            "1 cup flour",
            "1 tbsp lavender",
            "2 tbsp sugar",
            "1/2 cup butter",
            "1/2 cup milk"
        ],
        directions: [
            "Preheat oven to 350°F.",
            "Mix all dry ingredients.",
            "Cut in butter until mixture is crumbly.",
            "Add milk and lavender, stir until just combined.",
            "Bake for 20 minutes or until golden."
        ]
    },

    pumpkinSpiceMuffins: {
        name: "Pumpkin Spice Muffins",
        cookTime: "25 mins",
        servings: "12",
        ingredients: [
            "1 1/2 cups flour",
            "1 cup sugar",
            "1/2 cup pumpkin puree",
            "1/4 cup vegetable oil",
            "1/4 cup milk",
            "1 tsp baking powder",
            "1/2 tsp baking soda",
            "1/2 tsp cinnamon",
            "1/2 tsp nutmeg",
            "1/4 tsp ginger",
            "1/4 tsp cloves"
        ],
        directions: [
            "Preheat oven to 350°F.",
            "In a large bowl, mix together flour, sugar, baking powder, baking soda, cinnamon, nutmeg, ginger, and cloves.",
            "In another bowl, whisk pumpkin puree, oil, and milk until smooth.",
            "Combine wet and dry ingredients, stirring until just blended.",
            "Pour batter into muffin tins and bake for 20-25 minutes, or until a toothpick comes out clean."
        ]
    },

    peanutButterCookies: {
        name: "Peanut Butter Cookies",
        cookTime: "15 mins",
        servings: "24",
        ingredients: [
            "1 cup peanut butter",
            "1 cup sugar",
            "1 egg",
            "1 tsp vanilla extract"
        ],
        directions: [
            "Preheat oven to 350°F.",
            "In a bowl, mix together peanut butter, sugar, egg, and vanilla until smooth.",
            "Roll dough into small balls and place on a baking sheet.",
            "Flatten each ball with a fork, creating a criss-cross pattern.",
            "Bake for 10-12 minutes, or until edges are golden brown."
        ]
    },

    lavenderHoneyLemonCookies: {
        name: "Lavender Honey Lemon Cookies",
        cookTime: "18 mins",
        servings: "16",
        ingredients: [
            "1 1/4 cups flour",
            "1/2 cup sugar",
            "1/4 cup honey",
            "1/2 cup butter",
            "1 tbsp lavender",
            "1 tsp lemon zest",
            "1/2 tsp baking powder",
            "1 egg"
        ],
        directions: [
            "Preheat oven to 350°F.",
            "Cream together butter, sugar, and honey until light and fluffy.",
            "Add egg, lavender, and lemon zest, mixing until smooth.",
            "In a separate bowl, combine flour and baking powder, then add to the wet ingredients.",
            "Drop by spoonfuls onto a baking sheet and bake for 15-18 minutes, or until edges are lightly golden."
        ]
    }
    // Add other recipes here
};





function openRecipePopup(recipeId) {
    const recipe = recipes[recipeId];
    if (!recipe) return; // Safety check

    document.getElementById('recipe-name').textContent = recipe.name;
    document.getElementById('cook-time').textContent = `Cook Time: ${recipe.cookTime}`;
    document.getElementById('servings').textContent = `Servings: ${recipe.servings}`;

    // Populate ingredients
    const ingredientsList = document.getElementById('ingredients-list');
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Populate directions
    const directionsList = document.getElementById('directions-list');
    directionsList.innerHTML = '';
    recipe.directions.forEach(direction => {
        const li = document.createElement('li');
        li.textContent = direction;
        directionsList.appendChild(li);
    });

    // Show the popup
    document.getElementById('recipe-popup').style.display = 'flex';
}

function closeRecipePopup() {
    document.getElementById('recipe-popup').style.display = 'none';

}