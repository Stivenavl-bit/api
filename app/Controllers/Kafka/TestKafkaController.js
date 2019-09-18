/** @type {import('@adonisjs/framework/src/Logger')} */
const logger = use('logger');

class KafkaController {
  index(data, commit) {
    logger.info('kafka data', data);
    commit();
  }
}

module.exports = KafkaController;
