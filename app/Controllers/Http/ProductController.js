const AbstractController = require('./AbstractModelController');
const Product = use('App/Models/Product');

class PoductController extends AbstractController {
  constructor() {
    super(Product, ['code_produt', 'name', 'city', 'screen', 'property', 'SKU', 'price', 'Unity']);
  }
};

module.exports = PoductController;
