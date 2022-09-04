function pizzaoven(one, two, three, four){
    var pizza={

    };
    pizza.crustType= one;
    pizza.sauceType= two;
    pizza.cheeses=three;
    pizza.toppings= four;
    return pizza;
}
var piz1= pizzaoven("deep dish", "traditional" ,["mozarella"], ["pepperoni","sausage"]);
console.log(piz1);
var piz2=pizzaoven("hand tossed","marinara", ["mozarella", "feta"],["mushrooms","olives","onions"]);
console.log(piz2);
var piz3=pizzaoven("hand tossed","traditional", ["mozarella"], ["mushrooms","olives","tomatoes"]);
console.log(piz3);
var piz4=pizzaoven("deep dish","marinara", "feta",["mushrooms","olives"]);
console.log(piz4);


