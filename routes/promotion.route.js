const ctrl = require('../controllers/promotion.controller');

module.exports = function (app) {
    // CRUD
    // 20190802.0150
    app.post('/api/promotions', ctrl.Create);
    app.get('/api/promotions/:id', ctrl.Read);
    app.patch('/api/promotions/:id', ctrl.Update);
    app.delete('/api/promotions/:id', ctrl.Delete);
    app.get('/api/promotions/:status/filter', ctrl.GetAll);
    app.get('/api/promotions', ctrl.GetAll);
}