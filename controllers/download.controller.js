// const validator = require('validator');
const downloadModel = require('../models/download.model');
// const crypto = require('../util/crypto.util');
// const userEntity = require('../entities/user.entity');
const enums = require('../config/enum.util');
// const email = require('../util/email.util');
const responseutil = require('../config/response.util');
// const jwt = require('jsonwebtoken');
// const SuperSecret = require('../config/SuperSecret');
// const jwtutil = require('../util/jwt.util');
module.exports = {
    Create: function (req, res, next) { 
        // Fill Download Object
        const datetmp = enums.DateTimeNowToMilliSeconds();
        let download = {
            status_item: enums.STATUS_ITEM.ACTIVO,
            create_date: datetmp,
            modification_date: 0,
            maker: req.body.maker,
            title: req.body.title,
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
    Update: function (req, res, next) { },
    Delete: function (req, res, next) { },
    GetAll: function (req, res, next) {
        
        let download = { status_item : req.params.status }

        downloadModel.asyncGetAll(download).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result);
          //  next();
        }, reject => {
            responseutil.Send(res, reject.statusCode, reject.result, reject.message, reject.href, reject.function);
            next();
        });
    },

}