/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
  up() {
    this.create('users', table => {
      table.increments();
      table
        .string('tipo', 80)
        .notNullable()
        .unique();
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
      table
        .string('rgie', 80)
        .notNullable()
        .unique();
      table
        .string('nacimiento', 80)
        .notNullable()
        .unique();
      table
        .string('sexo', 80)
        .notNullable()
        .unique();
      table
        .string('typeicms', 80)
        .notNullable()
        .unique();
      table
        .string('ddd', 80)
        .notNullable()
        .unique();
      table
        .string('phone', 80)
        .notNullable()
        .unique();
      table
        .string('vendedor', 80)
        .notNullable()
        .unique();
      table
        .string('horariodeentrega', 80)
        .notNullable()
        .unique();
      table
        .string('namempresarial', 80)
        .notNullable()
        .unique();
      table
        .string('cpfcnpj', 80)
        .notNullable()
        .unique();
      table.timestamps();
      table.timestamp('deleted_at');
    });
  }

  down() {
    this.drop('users');
  }
}

module.exports = UserSchema;
