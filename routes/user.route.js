const ctrl = require('../controllers/user.controller');

module.exports = function (app) {
    // CRUD
    app.post('/api/login', ctrl.Login);
    app.post('/api/users', ctrl.Create);

    // app.get('/api/items/:id', ctrl.Read);
    // app.patch('/api/items/:id', ctrl.Update);
    // app.delete('/api/items/:id', ctrl.Delete);
    // // get all
    app.get('/api/users', ctrl.GetAll);


}