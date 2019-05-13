const ctrl = require('../controllers/client.controller');

module.exports = function (app) {
    // CRUD
    // 20190512.2040
    app.post('/api/clients', ctrl.Create);
    app.get('/api/clients/:id', ctrl.Read);
    app.patch('/api/clients/:id', ctrl.Update);
    app.delete('/api/clients/:id', ctrl.Delete);
    app.get('/api/clients/:status/filter', ctrl.GetAll);
    app.get('/api/clients', ctrl.GetAll);
}