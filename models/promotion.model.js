const Promise = require('promise');
const promotionEntity = require('../entities/promotion.entity');
const enums = require('../config/enum.util');
// const responseutil = require('../util/response.util')

module.exports = {
    asyncDelete: function (promotion) {
        const promesa = new Promise(function (resolve, reject) {
            try {
                let query = promotionEntity.findOneAndUpdate({
                    '_id': promotion.id
                }, {
                        'status_item': promotion.status_item,
                        'modification_date': promotion.modification_date,
                        'maker': promotion.maker
                    }, {
                        new: true
                    }, function (error, res) {
                        if (error) {
                            reject({
                                statusCode: enums.HTTP_STATUS_CODE.BAD_REQUEST,
                                result: '',
                                message: error.message
                            });
                        }
                        if (!enums.CheckExist(res._doc)) {
                            reject({
                                statusCode: enums.HTTP_STATUS_CODE.BAD_REQUEST,
                                result: ` No found item ${promotion.id}`,
                                message: 'set'
                            });
                        } else {
                            resolve({
                                statusCode: enums.HTTP_STATUS_CODE.OK,
                                result: JSON.stringify(res),
                                message: ''
                            });
                        }
                    });
            } catch (error) {
                reject({
                    statusCode: enums.HTTP_STATUS_CODE.BAD_REQUEST,
                    result: '',
                    message: error.message
                });
            }
        });
        return promesa;
    },

    asyncUpdate: function (promotion) {
        const promesa = new Promise(function (resolve, reject) {
            try {
                let query = promotionEntity.findOneAndUpdate({
                    '_id': promotion.id
                }, {
                        'status_item': promotion.status_item,
                        'modification_date': promotion.modification_date,
                        'maker': promotion.maker,
                        'description': promotion.description,
                        'imgurl': promotion.imgurl,
                        'name': promotion.name,
                        'lastname': promotion.lastname,
                        'email': promotion.email,
                        'mobil': promotion.mobil,
                        'feedback': promotion.feedback
                    }, {
                        new: true
                    }, function (error, res) {
                        if (error) {
                            reject({
                                statusCode: enums.HTTP_STATUS_CODE.BAD_REQUEST,
                                result: '',
                                message: error.message
                            });
                        }
                        if (!enums.CheckExist(res._doc)) {
                            reject({
                                statusCode: enums.HTTP_STATUS_CODE.BAD_REQUEST,
                                result: ` No found item ${promotion.id}`,
                                message: 'set'
                            });
                        } else {
                            resolve({
                                statusCode: enums.HTTP_STATUS_CODE.OK,
                                result: JSON.stringify(res),
                                message: ''
                            });
                        }
                    });
            } catch (error) {
                reject({
                    statusCode: enums.HTTP_STATUS_CODE.BAD_REQUEST,
                    result: '',
                    message: error.message
                });
            }
        });
        return promesa;
    }
    , asyncRead: function (promotion) {
        let promesa = new Promise(function (resolve, reject) {
            try {
                
                const query = promotionEntity.find({ id: promotion.id });

                query.exec(function (error, docs) {
                    if (error) {
                        reject({
                            statusCode: enums.HTTP_STATUS_CODE.BAD_GATEWAY,
                            result: '',
                            message: error.message

                        });
                    }
                    if (docs.length > 0) {

                         // console.dir(docs[0]._doc);
                         // console.log('end');
                        
                        resolve({
                            statusCode: enums.HTTP_STATUS_CODE.OK,
                            result: JSON.stringify(docs[0]._doc),
                            message: ''
                        });
                    } else {
                        resolve({
                            statusCode: enums.HTTP_STATUS_CODE.BAD_REQUEST,
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
    asyncCreate: function (promotion) {
        let promesa = new Promise(function (resolve, reject) {
            try {
                let objectEntity = promotionEntity({
                    status_item: promotion.status_item,
                    create_date: promotion.create_date,
                    modification_date: promotion.modification_date,
                    maker: promotion.maker,
                    name: promotion.name,
                    imgurl: promotion.imgurl,
                    description: promotion.description,
                    price: promotion.price,

                    : promotion.feedback
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
                            message: 'create object',
                        });
                    }
                });
            } catch
            (error) {
                error(error);
            }
        });
        return promesa;
    }
    ,
    asyncGetAll: function (promotion) {
        let promesa = new Promise(function (resolve, reject) {
            try {
                let query;

                if (enums.CheckExist(promotion.status_item)) {
                    query = promotionEntity.find({ status_item: promotion.status_item });
                } else {
                    query = promotionEntity.find({});
                }
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

                // if (enums.CheckExist(promotion.status_item)) {
                //     query = promotionEntity.find({ status_item: promotion.status_item });
                // } else {
                //     query = promotionEntity.find({});
                // }

                // query.
            } catch (error) {
                error(error);
            }
        });
        return promesa;
    }
}