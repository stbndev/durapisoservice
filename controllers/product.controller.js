/**
 * Created by Voltron on 12/05/2017.
 */
// const validator = require('validator');
// const userModel = require('../models/users.model');
// const crypto = require('../util/crypto.util');
// const userEntity = require('../entities/user.entity');
// const enums = require('../util/enum.util');
// const email = require('../util/email.util');
// const responseutil = require('../util/response.util');
// const jwt = require('jsonwebtoken');
// const SuperSecret = require('../config/SuperSecret');
// const jwtutil = require('../util/jwt.util');
module.exports = {
    
    Get: function (req, res, next) {
        res.status(200).send({
            'message': 'Welcome product!.'
        });
    },
    
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