/* eslint-disable lines-between-class-members */
/* eslint-disable spaced-comment */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
const User = use('App/Models/User');
const Produ = use('App/Models/Product');
// eslint-disable-next-line no-unused-vars
const Superagent = use('superagent');

class BetaController {
  //create users
  async registerbetalabs({ request }) {
    const { tipo, username, subname, email, cpfcnpj, rgie, nacimiento, sexo, typeicms, ddd, phone, vendedor, horariodeentrega, namempresarial } = request.all();
    const user = await User.create({
      tipo,
      username,
      subname,
      email,
      cpfcnpj,
      rgie,
      nacimiento,
      sexo,
      typeicms,
      ddd,
      phone,
      vendedor,
      horariodeentrega,
      namempresarial
    });
    return user;
  }
  //create products
  async productsbetalabs({ request }) {
    const { tipo, username, subname, cpfcnpj, rgie, nacimiento, typeicms, ddd, phone, vendedor } = request.all();
    const produ = await Produ.create({
      tipo,
      username,
      subname,
      cpfcnpj,
      rgie,
      nacimiento,
      typeicms,
      ddd,
      phone,
      vendedor
    });
    return produ;
  }

  async login({ request }) {
    const { email, tipo } = request.all();
    const target = (email, tipo)
    return target;

  }
  async verificacionproducto({ request }) {
    const { username } = request.all();
    return username;

  }
}

module.exports = BetaController;
