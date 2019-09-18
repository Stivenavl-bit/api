/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @type {import('@adonisjs/framework/src/Env')} */
const superagent = require('superagent');
const nocache = require('superagent-no-cache');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');
const Env = use('Env');

class AbstractController {
  constructor(model, permissibleParams) {
    this.Model = model;
    this.permissibleParams = permissibleParams;
  }

  connectcontact() {
    const data = {};
    const result = await superagent
      .get('https://app.omie.com.br/')
      .aout(Env.get('OMIE_USER'), Env.get('OMIE_KEY'))
      .query({
        action: 'create',
        data
      })
      .use(nocache);

    console.log(result);
  }

  index() {
    return this.Model.paginate();
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   */

  store({
    request
  }) {
    data.findOrFail(id);
    async function user() {
      const User = await create.User();
    }
    const data = request.only(this.permissibleParams);
    return this.Model.create(data)
  }


  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async update({
    params,
    request
  }) {
    const model = await this.model.findOrFail(params.id);

    const data = request.only(this.permissibleParams);

    model.merge(data);
    model.save();

    return model;
  }

  /**
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async delete({
    params,
    response
  }) {
    const model = await this.model.findOrFail(params.id);
    model.delete();
    response.noContent();
  }
}

module.exports = AbstractController;
