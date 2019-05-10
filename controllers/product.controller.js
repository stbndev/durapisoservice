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
            responseutil.Send(res, reject.statusCode, reject.result, resolve.message);
            next();
        });
    },
    Update: function (req, res, next) {
        // Fill Inventory Object
        const datetmp = enums.DateTimeNowToMilliSeconds();
        let product = {
            id: req.params.id,
            status_item: req.body.status_item,
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
            responseutil.Send(res, reject.statusCode, reject.result, resolve.message);
            next();
        });
    },
    Delete: function (req, res, next) {
        const datetmp = enums.DateTimeNowToMilliSeconds();
        let product = {
            id: req.params.id,
            status_item: enums.STATUS_ITEM.DELETE,
            modification_date: datetmp,
            maker: req.body.maker
        }
        productModel.asyncDelete(product).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result, resolve.message);
            next();
        }, reject => {
            responseutil.Send(res, reject.statusCode, reject.result, resolve.message);
            next();
        });
    },
    GetAll: function (req, res, next) {

        let product = { status_item : req.params.status }
        productModel.asyncGetAll(product).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result);
           //  next();
        }, reject => {
             responseutil.Send(res, reject.statusCode, reject.result, reject.message);
            next();
        });
    },

}