/**
 * Created by Voltron on 12/05/2017.
 */
const responseutil = require('../config/response.util');
const productModel = require('../models/product.model');
module.exports = {
    Create: function (req, res, next) { },
    Read: function (req, res, next) {
        //     res.status(200).send({
        //         'message': 'Welcome product!.'
        //     });
    },
    Update: function (req, res, next) { },
    Delete: function (req, res, next) { },
    GetAll: function (req, res, next) {
          productModel.asyncGetAll().then(resolve => {
            responseutil.Send(res, resolve.statusCode,resolve.result);
            next();
        }, reject => {
            // responseutil.Send(res, reject.statusCode, reject.result, reject.message, reject.href, reject.function);
            next();
        });
    },

}