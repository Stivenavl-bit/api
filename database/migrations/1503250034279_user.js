/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
  up() {
    this.create('users', table => {
      table.increments();
      table.string('tipo', 80).notNullable();
      table
        .string('username', 254)
        .notNullable()
        .unique();
      table
        .string('subname', 80)
        .notNullable()
        .unique();
      table
        .string('email', 80)
        .notNullable()
        .unique();
      table.string('rgie', 80).notNullable();
      table.string('nacimiento', 80).notNullable();
      table.string('sexo', 80).notNullable();
      table.string('typeicms', 80).notNullable();
      table.string('ddd', 80).notNullable();
      table
        .string('phone', 80)
        .notNullable()
        .unique();
      table.string('vendedor', 80).notNullable();
      table.string('horariodeentrega', 80).notNullable();
      table
        .string('namempresarial', 100)
        .notNullable()
        .unique();
      table.string('cpfcnpj', 80).notNullable();
      table.timestamps();
      table.timestamp('deleted_at');
    });
  }

  down() {
    this.drop('users');
  }
}

module.exports = UserSchema;
