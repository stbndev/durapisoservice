
const responseutil = require('../config/response.util');
const enums = require('../config/enum.util');
const jobModel = require('../models/job.model');
module.exports = {
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

        jobModel.asyncCreate(job).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result);
            next();
        }, reject => {
            responseutil.Send(res, reject.statusCode, reject.result, reject.message);
            next();
        });
    },
    Read: function (req, res, next) {
        const job = { id: req.query.id }
        jobModel.asyncRead(job).then(resolve => {
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

        jobModel.asyncUpdate(job).then(resolve => {
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
        jobModel.asyncDelete(job).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result, resolve.message);
            next();
        }, reject => {
            responseutil.Send(res, reject.statusCode, reject.result, resolve.message);
            next();
        });
    },
    GetAll: function (req, res, next) {

        let job = { status_item: req.params.status }
        jobModel.asyncGetAll(job).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result);
            //  next();
        }, reject => {
            responseutil.Send(res, reject.statusCode, reject.result, reject.message);
            next();
        });
    },

}