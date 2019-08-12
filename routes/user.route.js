const ctrl = require('../controllers/user.controller');

module.exports = function (app) {
    // CRUD
    app.post('/api/login', ctrl.Login);

    app.post('/api/users', ctrl.Create);
    app.get('/api/users/:id', ctrl.Read);
    app.patch('/api/users/:id', ctrl.Update);
    app.delete('/api/users/:id', ctrl.Delete);
    // get all
    app.get('/api/users', ctrl.GetAll);


}