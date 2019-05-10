/**
 * Created by Voltron on 12/05/2017.
 */
const responseutil = require('../config/response.util');
const enums = require('../config/enum.util');
const productModel = require('../models/product.model');
module.exports = {
    Create: function (req, res, next) {
        // Fill Inventory Object
        const datetmp = enums.DateTimeNowToMilliSeconds();
        let product = {
            status_item: enums.STATUS_ITEM.ACTIVO,
            create_date: datetmp,
            modification_date: 0,
            maker: req.body.maker,
            name: req.body.name,
            description: req.body.description,
            stock: req.body.stock,
            cost: req.body.cost,
            sale: req.body.sale,
            iva: req.body.iva,
            imgurl: req.body.imgurl
        }
        productModel.asyncCreate(product).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result);
            next();
        }, reject => {
            // responseutil.Send(res, reject.statusCode, reject.result, reject.message, reject.href, reject.function);
            next();
        });
    },
    Read: function (req, res, next) {
        const product = { id: req.query.id }
        productModel.asyncRead(product).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result);
            next();
        }, reject => {
            // responseutil.Send(res, reject.statusCode, reject.result, reject.message, reject.href, reject.function);
            next();
        });
    },
    Update: function (req, res, next) {
        // Fill Inventory Object
        const datetmp = enums.DateTimeNowToMilliSeconds();
        let product = {
            status_item: enums.STATUS_ITEM.ACTIVO,
          //  create_date: datetmp,
            modification_date: datetmp,
            maker: req.body.maker,
            name: req.body.name,
            description: req.body.description,
            stock: req.body.stock,
            cost: req.body.cost,
            sale: req.body.sale,
            iva: req.body.iva,
            imgurl: req.body.imgurl
        }
        productModel.asyncUpdate(product).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result);
            next();
        }, reject => {
            // responseutil.Send(res, reject.statusCode, reject.result, reject.message, reject.href, reject.function);
            next();
        });
    },
    Delete: function (req, res, next) { },
    GetAll: function (req, res, next) {
        productModel.asyncGetAll().then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result);
            next();
        }, reject => {
            // responseutil.Send(res, reject.statusCode, reject.result, reject.message, reject.href, reject.function);
            next();
        });
    },

}