/**
 * Created by Voltron on 201980802.
 */
const responseutil = require('../config/response.util');
const enums = require('../config/enum.util');
const promotionModel = require('../models/promotion.model');
module.exports = {
    Create: function (req, res, next) {
        // Fill Inventory Object
        const datetmp = enums.DateTimeNowToMilliSeconds();

        let promotion = {
            status_item: enums.STATUS_ITEM.ACTIVO,
            create_date: datetmp,
            modification_date: 0,
            maker: req.body.maker,
            name: req.body.name,
            imgurl: req.body.imgurl,
            description: req.body.description,
            price: req.body.price,
            offerprice: req.body.offerprice,
            star_date: req.body.star_date,
            end_date: req.body.end_date
        }
        
        promotionModel.asyncCreate(promotion).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result);
            next();
        }, reject => {
            responseutil.Send(res, reject.statusCode, reject.result, reject.message);
            next();
        });
    },
    Read: function (req, res, next) {
        const promotion = { id: req.query.id }
        promotionModel.asyncRead(promotion).then(resolve => {
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

        let promotion = {
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

        promotionModel.asyncUpdate(promotion).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result);
            next();
        }, reject => {
            responseutil.Send(res, reject.statusCode, reject.result, resolve.message);
            next();
        });

    },
    Delete: function (req, res, next) {
        const datetmp = enums.DateTimeNowToMilliSeconds();
        let promotion = {
            id: req.params.id,
            status_item: enums.STATUS_ITEM.DELETE,
            modification_date: datetmp,
            maker: req.body.maker
        }
        promotionModel.asyncDelete(promotion).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result, resolve.message);
            next();
        }, reject => {
            responseutil.Send(res, reject.statusCode, reject.result, resolve.message);
            next();
        });
    },
    GetAll: function (req, res, next) {

        let promotion = { status_item: req.params.status }
        promotionModel.asyncGetAll(promotion).then(resolve => {
            responseutil.Send(res, resolve.statusCode, resolve.result);
            //  next();
        }, reject => {
            responseutil.Send(res, reject.statusCode, reject.result, reject.message);
            next();
        });
    },

}