/**
 * Created by Voltron on 12/05/2017.
 */
const responseutil = require('../config/response.util');
const enums = require('../config/enum.util');
const clientModel = require('../models/client.model');
module.exports = {
    Create: function (req, res, next) {
        // Fill Inventory Object
        const datetmp = enums.DateTimeNowToMilliSeconds();
        let client = {
            status_item: enums.STATUS_ITEM.ACTIVO,
            create_date: datetmp,
            modification_date: 0,
            maker: req.body.maker,
            description: req.body.description,
            imgurl: req.body.imgurl,
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            mobil: req.body.mobil,
            feedback: req.body.feedback
        }
        clientModel.asyncCreate(client).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result);
            next();
        }, reject => {
            responseutil.Send(res, reject.statusCode, reject.result, reject.message);
            next();
        });
    },
    Read: function (req, res, next) {
        const client = { id: req.query.id }
        clientModel.asyncRead(client).then(resolve => {
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
        
        let client = {
            id: req.params.id,
            status_item: req.body.status_item,
            modification_date: datetmp,
            maker: req.body.maker,
            description: req.body.description,
            imgurl: req.body.imgurl,
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            mobil: req.body.mobil,
            feedback: req.body.feedback
        }
        
        clientModel.asyncUpdate(client).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result);
            next();
        }, reject => {
            responseutil.Send(res, reject.statusCode, reject.result, resolve.message);
            next();
        });
        
    },
    Delete: function (req, res, next) {
        const datetmp = enums.DateTimeNowToMilliSeconds();
        let client = {
            id: req.params.id,
            status_item: enums.STATUS_ITEM.DELETE,
            modification_date: datetmp,
            maker: req.body.maker
        }
        clientModel.asyncDelete(client).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result, resolve.message);
            next();
        }, reject => {
            responseutil.Send(res, reject.statusCode, reject.result, resolve.message);
            next();
        });
    },
    GetAll: function (req, res, next) {

        let client = { status_item: req.params.status }
        clientModel.asyncGetAll(client).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result);
            //  next();
        }, reject => {
            responseutil.Send(res, reject.statusCode, reject.result, reject.message);
            next();
        });
    },

}