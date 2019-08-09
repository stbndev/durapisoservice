
const responseutil = require('../config/response.util');
const enums = require('../config/enum.util');
const userModel = require('../models/job.model');
module.exports = {
    Login: function (req, res, next) {
        let objUser = {
            "_id": "",
            "status_item": "",
            "create_date": "",
            "modification_date": "",
            "maker": "",
            "name": "",
            "email": req.body.email,
            "password": req.body.password,
            "description": "",
            "imgurl": "https://www.emojirequest.com/images/SalutingEmoji.jpg"
        };
        userModel.asyncLogin(objUser).then(resolve => {
            responseutil.Send(res, resolve.statusCode,resolve.result);
            next();
        }, reject => {
            // responseutil.Send(res, reject.statusCode, reject.result, reject.message, reject.href, reject.function);
            next();
        });
    },
    Create: function (req, res, next) {
        // Fill Inventory Object
        const datetmp = enums.DateTimeNowToMilliSeconds();

        let job = {
            status_item: enums.STATUS_ITEM.ACTIVO,
            create_date: datetmp,
            modification_date: 0,
            maker: req.body.maker,
            name: req.body.name,
            path: req.body.path
        }

        userModel.asyncCreate(job).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result);
            next();
        }, reject => {
            responseutil.Send(res, reject.statusCode, reject.result, reject.message);
            next();
        });
    },
    Read: function (req, res, next) {
        const job = { id: req.query.id }
        userModel.asyncRead(job).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result);
            // next();
        }, reject => {
            responseutil.Send(res, reject.statusCode, reject.result, resolve.message);
            next();
        });
    },
    Update: function (req, res, next) {
        // Fill Inventory Object
        const datetmp = enums.DateTimeNowToMilliSeconds();

        let job = {
            id: req.params.id,
            status_item: req.body.status_item,
            modification_date: datetmp,
            maker: req.body.maker,
            name: req.body.name,
            imgurl: req.body.imgurl,
            description: req.body.description,
            price: req.body.price,
            offerprice: req.body.offerprice,
            start_date: req.body.start_date,
            end_date: req.body.end_date
        }

        userModel.asyncUpdate(job).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result);
            next();
        }, reject => {
            responseutil.Send(res, reject.statusCode, reject.result, resolve.message);
            next();
        });

    },
    Delete: function (req, res, next) {
        const datetmp = enums.DateTimeNowToMilliSeconds();
        let job = {
            id: req.params.id,
            status_item: enums.STATUS_ITEM.DELETE,
            modification_date: datetmp,
            maker: req.body.maker
        }
        userModel.asyncDelete(job).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result, resolve.message);
            next();
        }, reject => {
            responseutil.Send(res, reject.statusCode, reject.result, resolve.message);
            next();
        });
    },
    GetAll: function (req, res, next) {

        let job = { status_item: req.params.status }
        userModel.asyncGetAll(job).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result);
            //  next();
        }, reject => {
            responseutil.Send(res, reject.statusCode, reject.result, reject.message);
            next();
        });
    },

}
