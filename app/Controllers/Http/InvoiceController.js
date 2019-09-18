const AbstractController = require('./AbstractModelController');
const Invoice = use('App/Models/Invoice');
class InvoiceController extends AbstractController {
  constructor() {
    super(Invoice, ['N_order', 'Name', 'City', 'Address', 'Label', 'Phone', 'Nit', 'Subtotal', 'transport_cost', 'Discount', 'Total', 'Payment_method', 'Product', 'Order_type']);
  }
};

module.exports = InvoiceController;
