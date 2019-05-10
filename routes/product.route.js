const ctrl = require('../controllers/product.controller');

module.exports = function (app) {
    // CRUD
    // 20190510.1626
    app.post('/api/products', ctrl.Create);
    app.get('/api/products/:id', ctrl.Read);
    app.patch('/api/products/:id', ctrl.Update);
    app.delete('/api/products/:id', ctrl.Delete);
    app.get('/api/products/:status/filter', ctrl.GetAll);
    app.get('/api/products', ctrl.GetAll);
}