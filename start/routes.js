const Route = use('Route');

// User
Route.group(() => {
  Route.post('/clientes', 'UserController.store');
}).prefix('api/v1/geral/');
// Product
Route.group(() => {
  Route.get('/productos', 'ProductController.store');
}).prefix('api/v1/geral/');
// invoice
Route.group(() => {
  Route.post('/pedidocompra', 'invoiceController.store');
}).prefix('api/v1/produtos/');
