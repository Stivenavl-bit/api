/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ItemProductsSchema extends Schema {
  up() {
    this.create('products', table => {
      table.increments();
      table.string('tipo', 80).notNullable();
      table.string('username', 254).notNullable();
      table.string('subname', 80).notNullable();
      table.string('cpfcnpj', 80).notNullable();
      table.string('rgie', 80).notNullable();
      table.string('nacimiento', 80).notNullable();
      table.string('typeicms', 80).notNullable();
      table.string('ddd', 80).notNullable();
      table.string('phone', 80).notNullable();
      table.string('vendedor', 80).notNullable();

      table.timestamps();
      table.timestamp('deleted_at');
    });
  }

  down() {
    this.drop('products');
  }
}

module.exports = ItemProductsSchema;
