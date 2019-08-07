const ctrl = require('../controllers/job.controller');

module.exports = function (app) {
    // CRUD
    app.post('/api/jobs', ctrl.Create);
    app.get('/api/jobs/:id', ctrl.Read);
    app.patch('/api/jobs/:id', ctrl.Update);
    app.delete('/api/jobs/:id', ctrl.Delete);
    // get all
    app.get('/api/jobs', ctrl.GetAll);

}