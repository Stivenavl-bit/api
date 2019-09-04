/* eslint-disable lines-between-class-members */
/* eslint-disable spaced-comment */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
const User = use('App/Models/User');
// eslint-disable-next-line no-unused-vars
const Superagent = use('superagent');

class TestController {
  //crear usuarios
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
  async productsbetalabs({ request }) {
    const { tipo, username, subname, email, cpfcnpj, rgie, nacimiento, sexo, typeicms, ddd, phone, vendedor} = request.all();
    const produ = await User.create({
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
      vendedor
    });
    return produ;
  }

  async login({ request }) {
    const { email } = request.all();
    console.log("el usuario existe");
    return email;

  }
}

module.exports = TestController;
