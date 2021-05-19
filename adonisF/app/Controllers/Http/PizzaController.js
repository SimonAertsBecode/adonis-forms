"use strict";

//bring model
const Pizza = use("App/Models/Pizza");

class PizzaController {
  async retrieve({ view }) {
    const pizzas = await Pizza.all();

    return view.render("index", {
      title: "all pizzas",
      pizzas: pizzas.toJSON(),
    });
  }

  async pizzaItem({ view, params }){
      const pizza = await Pizza.find(params.id);

      return view.render("pizzaItem", {
        pizza: pizza,
        title: pizza.title,
      });
  }
}

module.exports = PizzaController;
