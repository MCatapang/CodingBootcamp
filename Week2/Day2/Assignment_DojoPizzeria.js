function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

// First Pizza 
var pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(pizza1);

// Second Pizza
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

// Third Pizza
var pizza3 = pizzaOven("thin", "white", "american", ["mushrooms", "spinach"]);
console.log(pizza3);

// Fourth Pizza
var pizza4 = pizzaOven("rice", "tuna", "cheap", ["sadness", "tears", "misery"]);
console.log(pizza4);

// Bonus Challenge
var ingredient = {
    "crustType":    ["deep dish", "hand tossed", "thin"],
    "sauceType":    ["traditional", "marinara", "american"],
    "cheeses":      ["mozzarella", "feta", "american"],
    "toppings":     ["mushroom", "pepperoni", "sausage"]
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = ingredient.crustType[Math.floor(Math.random()*3)];
    pizza.sauceType = ingredient.sauceType[Math.floor(Math.random()*3)];
    pizza.cheeses = ingredient.cheeses[Math.floor(Math.random()*3)];
    pizza.toppings = ingredient.toppings[Math.floor(Math.random()*3)];
    return pizza;
}

console.log(randomPizza());