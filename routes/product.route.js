const ctrl = require('../controllers/product.controller');

module.exports = function (app) {
    
    app.get('/api/products', ctrl.Get);    
    // app.delete('/api/users/:id', ctrl.Delete);
	// app.patch('/api/users/:id', ctrl.Patch);
    // app.get('/api/users/:id', ctrl.Get);
    // app.get('/api/users', ctrl.GetAll);
    // app.post('/api/users', ctrl.Create);
    // app.post('/api/users/upload', ctrl.Upload);
    
}