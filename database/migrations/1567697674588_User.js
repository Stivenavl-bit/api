/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class User extends Schema {
  up() {
    this.create('Users', table => {
      table.increments();
      table.integer('codigo_cliente_omie', 30).notNullable();
      table.string('codigo_cliente_integracao', 20);
      table.string('cnpj_cpf', 20);
      table.string('razao_social', 60);
      table.string('nome_fantasia', 100);
      table.string('endereco', 60);
      table.string('bairro', 60);
      table.string('cidade', 40);
      table.string('estado', 2);
      table.string('cep', 10);
      table.string('contato', 100);
      table.string('email', 500);
      table.string('homepage', 100);
      table.string('inscricao_municipal', 20);
      table.string('inscricao_estadual', 20);
      table.string('inscricao_suframa', 20);
      table.string('pessoa_fisica', 2);
      table.string('optante_simples_nacional', 2);
      table.timestamps();
      table.timestamp('deleted_at');
    });
  }

  down() {
    this.drop('Users');
  }
}

module.exports = User;
