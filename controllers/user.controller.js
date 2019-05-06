/**
 * Created by Voltron on 12/05/2017.
 */
// const validator = require('validator');
const userModel = require('../models/user.model');
// const crypto = require('../util/crypto.util');
// const userEntity = require('../entities/user.entity');
// const enums = require('../util/enum.util');
// const email = require('../util/email.util');
const responseutil = require('../config/response.util');
// const jwt = require('jsonwebtoken');
// const SuperSecret = require('../config/SuperSecret');
// const jwtutil = require('../util/jwt.util');
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
        }
        userModel.asyncLogin(objUser).then(resolve => {

            responseutil.Send(res, resolve.statusCode,resolve.result);

            next();
        }, reject => {
            // responseutil.Send(res, reject.statusCode, reject.result, reject.message, reject.href, reject.function);
            next();
        });
    },
    Create: function (req, res, next) { },
    Read: function (req, res, next) {
        //     res.status(200).send({
        //         'message': 'Welcome product!.'
        //     });
    },
    Update: function (req, res, next) { },
    Delete: function (req, res, next) { },
    GetAll: function (req, res, next) {

        // userModel.asyncGetAll().then(resolve => {
        //     responseutil.Send(res, resolve.statusCode, resolve.result, resolve.message, resolve.href, resolve.function);
        //     next();
        // }, reject => {
        //     responseutil.Send(res, reject.statusCode, reject.result, reject.message, reject.href, reject.function);
        //     next();
        // });
    },

}