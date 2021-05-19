"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserCardSchema extends Schema {
  up() {
    this.create("user_cards", (table) => {
      table.increments();
      table.string("title");
      table.timestamps();
    });
  }

  down() {
    this.drop("user_cards");
  }
}

module.exports = UserCardSchema;
