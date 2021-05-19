"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PizzasSchema extends Schema {
  up() {
    this.create("pizzas", (table) => {
      table.increments();
      table.string("title");
      table.string("body");
      table.string("img");
      table.timestamps();
    });
  }

  down() {
    this.drop("pizzas");
  }
}

module.exports = PizzasSchema;
