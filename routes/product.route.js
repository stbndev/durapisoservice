const ctrl = require('../controllers/product.controller');

module.exports = function (app) {
    // CRUD
    app.post('/api/products', ctrl.Create);
    app.get('/api/products/:id', ctrl.Read);
    app.patch('/api/products/:id', ctrl.Update);
    app.delete('/api/products/:id', ctrl.Delete);
    // get all
    app.get('/api/products', ctrl.GetAll);

}