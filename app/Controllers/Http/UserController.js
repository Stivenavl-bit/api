const AbstractController = require('./AbstractModelController');
const User = use('App/Models/User');

class UserController extends AbstractController {
  constructor() {
    super(User, ['Email', 'Phone', 'Name', 'Document', 'Hunter', 'Address']);
  }
}

module.exports = UserController;
