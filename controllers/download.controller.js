
const downloadModel = require('../models/download.model');
const enums = require('../config/enum.util');
const responseutil = require('../config/response.util');

module.exports = {
    Create: function (req, res, next) {
        
        const datetmp = enums.DateTimeNowToMilliSeconds();
        let download = {
            status_item: enums.STATUS_ITEM.ACTIVO,
            create_date: datetmp,
            modification_date: 0,
            maker: req.body.maker,
            name: req.body.name,
            description: req.body.description,
            pathurl: req.body.pathurl
        }
        
        downloadModel.asyncCreate(download).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result);
            next();
        }, reject => {
            responseutil.Send(res, reject.statusCode, reject.result, reject.message, reject.href, reject.function);
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
        // Fill Download Object
        const datetmp = enums.DateTimeNowToMilliSeconds();
        let download = {
            id: req.params.id,
            status_item: req.body.status_item,
            modification_date: datetmp,
            maker: req.body.maker,
            name: req.body.name,
            description: req.body.description,
            pathurl: req.body.pathurl
        }
        downloadModel.asyncUpdate(download).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result);
            next();
        }, reject => {
            responseutil.Send(res, reject.statusCode, reject.result, resolve.message);
            next();
        });
    },
    Delete: function (req, res, next) { 
        const datetmp = enums.DateTimeNowToMilliSeconds();
        let download = {
            id: req.params.id,
            status_item: enums.STATUS_ITEM.DELETE,
            modification_date: datetmp,
            maker: req.body.maker
        }
        downloadModel.asyncDelete(download).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result, resolve.message);
            // next();
        }, reject => {
            responseutil.Send(res, reject.statusCode, reject.result, resolve.message);
            next();
        });
    },
    GetAll: function (req, res, next) {

        let download = { status_item: req.params.status }

        downloadModel.asyncGetAll(download).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result);
            //  next();
        }, reject => {
            responseutil.Send(res, reject.statusCode, reject.result, reject.message, reject.href, reject.function);
            next();
        });
    },

}