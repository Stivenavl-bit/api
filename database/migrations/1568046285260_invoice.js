/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class InvoiceSchema extends Schema {
  up() {
    this.create('invoices', table => {
      table.increments();
      table.string('N_order', 80);
      table.string('Name', 80);
      table.string('City', 80);
      table.string('Address', 80);
      table.string('Label', 80);
      table.string('Phone', 80);
      table.string('Nit', 80);
      table.string('Subtotal', 80);
      table.string('transport_cost', 80);
      table.string('Discount', 80);
      table.string('Total', 80);
      table.string('Payment_method', 80);
      table.string('Product', 80);
      table.string('Order_type', 80);
      table.timestamps();
    });
  }

  down() {
    this.drop('invoices');
  }
}

module.exports = InvoiceSchema;
