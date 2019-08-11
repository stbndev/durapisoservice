const Promise = require('promise');
const userEntity = require('../entities/user.entity');
const enums = require('../config/enum.util');
// const responseutil = require('../util/response.util')

module.exports = {
    asyncCreate: function (user) {
        let promesa = new Promise(function (resolve, reject) {
            try {
                let objectEntity = userEntity({
                    status_item: user.status_item,
                    create_date: user.create_date,
                    modification_date: user.modification_date,
                    maker: user.maker,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    description: user.description,
                    imgurl: user.imgurl
                });

                objectEntity.save(function (error) {
                    if (error) {
                        reject({
                            statusCode: enums.HTTP_STATUS_CODE.BAD_REQUEST,
                            result: '',
                            message: error.message,
                        });
                    } else {
                        resolve({
                            statusCode: enums.HTTP_STATUS_CODE.OK,
                            result: JSON.stringify(objectEntity),
                            message: 'object create',
                        });
                    }
                });
            } catch
            (error) {
                error(error);
            }
        });
        return promesa;
    },
    asyncGetAll: function () {
        let promesa = new Promise(function (resolve, reject) {
            try {
                let query;
                query = userEntity.find({});
                query.exec(function (error, docs) {
                    if (error) {
                        reject({
                            statusCode: 500,
                            result: '',
                            message: error.message
                        });
                    }
                    
                    if (docs.length > 0) {
                        resolve({
                            statusCode: 200,
                            result: JSON.stringify(docs),
                            message: ''
                        });
                    } else {
                        resolve({
                            statusCode: 404,
                            result: JSON.stringify(docs),
                            message: ''
                        });
                    }
                });
            } catch (error) {
                error(error);
            }
        });
        return promesa;
    },
    asyncLogin: function (objuser) {
        let promesa = new Promise(function (resolve, reject) {
            try {
                const query = userEntity.find({
                    'email': objuser.email,
                    'password': objuser.password
                });

                query.exec(function (error, docs) {
                    if (error) {
                        reject({

                            statusCode: 500,
                            result: '',
                            message: error.message

                        });
                    }
                    if (docs.length > 0) {
                        resolve({
                            statusCode: 200,
                            result: JSON.stringify(docs[0]),
                            message: ''
                        });
                    } else {
                        resolve({
                            statusCode: 404,
                            result: JSON.stringify(docs[0]),
                            message: ''
                        });
                    }
                });
            } catch (error) {
                error(error);
            }
        });
        return promesa;
    }
}