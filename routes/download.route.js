const ctrl = require('../controllers/download.controller');

module.exports = function (app) {
    // CRUD
    app.post('/api/downloads', ctrl.Create);
    app.get('/api/downloads/:id', ctrl.Read);

    app.patch('/api/downloads/:id', ctrl.Update);
    app.delete('/api/downloads/:id', ctrl.Delete);
    // get all
    //app.get('/api/downloads', ctrl.GetAll);
    app.get('/api/downloads/:status/filter', ctrl.GetAll);


}