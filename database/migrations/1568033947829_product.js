/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProductoSchema extends Schema {
  up() {
    this.create('products', table => {
      table.increments();
      table.integer('code_produt', 30);
      table.integer('name', 30);
      table.integer('city', 30);
      table.integer('screen', 30);
      table.integer('property', 30);
      table.integer('SKU', 30);
      table.integer('price', 30);
      table.integer('Unity', 30);
      table.timestamps();
    });
  }

  down() {
    this.drop('products');
  }
}

module.exports = ProductoSchema;
