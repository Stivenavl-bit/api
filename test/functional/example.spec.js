/** @type {import('@adonisjs/vow/src/Suite')} */
const { test, trait } = use('Test/Suite')('Post');
/** @type {import('http-status-codes')} */
const HttpStatus = use('http-status-codes');

/** @type {import('@adonisjs/vow/src/ApiClient')} */
trait('Test/ApiClient');

test('get bad route', async ({ client }) => {
  const response = await client
    .post('/')
    .send({})
    .type('json')
    .end();

  response.assertStatus(HttpStatus.NOT_FOUND);
});
