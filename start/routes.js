/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
const Database = use('Database')
// User betalabs
Route.group(() => {
  Route.post('/registerbetalabs', 'BetaController.registerbetalabs');
  Route.get('/posts', async () => {
    return Database.table('users').select('*')
  });
}).prefix('api/v1/user/');
// Products betalabs
Route.group(() => {
  Route.post('/productosbetalabs', 'BetaController.productsbetalabs');
  Route.post('/veriproductosbetalabs', 'BetaController.verificacionproducto');
  Route.get('/posts', async () => {
    return Database.table('products').select('*')
  });
}).prefix('api/v1/product/');
// Facturas betalabs
Route.group(() => {
  Route.post('/productosbetalabs', 'BetaController.productsbetalabs');
  Route.post('/veriproductosbetalabs', 'BetaController.verificacionproducto');
  Route.get('/posts', async () => {
    return Database.table('products').select('*')
  });
}).prefix('api/v1/product/');
// User listo
Route.group(() => {
  Route.post('/registerlisto', 'BetaController.registerlisto');
  Route.get('/posts', async () => {
    return Database.table('users').select('*')
  });
}).prefix('api/v1/user/');
// Products listo
Route.group(() => {
  Route.post('/productoslisto', 'BetaController.productslisto');
  Route.post('/veriproductoslisto', 'BetaController.verificacionproducto');
  Route.get('/posts', async () => {
    return Database.table('products').select('*')
  });
}).prefix('api/v1/product/');
// Facturas listo
Route.group(() => {
  Route.post('/productoslisto', 'BetaController.productslisto');
  Route.post('/veriproductoslisto', 'BetaController.verificacionproducto');
  Route.get('/posts', async () => {
    return Database.table('products').select('*')
  });
}).prefix('api/v1/product/');
// User sap
Route.group(() => {
  Route.post('/registersap', 'BetaController.registersap');
  Route.get('/posts', async () => {
    return Database.table('users').select('*')
  });
}).prefix('api/v1/user/');
// Products sap
Route.group(() => {
  Route.post('/productossap', 'BetaController.productssap');
  Route.post('/veriproductossap', 'BetaController.verificacionproducto');
  Route.get('/posts', async () => {
    return Database.table('products').select('*')
  });
}).prefix('api/v1/product/');
// Facturas sap
Route.group(() => {
  Route.post('/productossap', 'BetaController.productssap');
  Route.post('/veriproductossap', 'BetaController.verificacionproducto');
  Route.get('/posts', async () => {
    return Database.table('products').select('*')
  });
}).prefix('api/v1/product/');