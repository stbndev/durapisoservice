const Promise = require('promise');
const clientEntity = require('../entities/client.entity');
const enums = require('../config/enum.util');
// const responseutil = require('../util/response.util')

module.exports = {
    asyncDelete: function (client) {
        const promesa = new Promise(function (resolve, reject) {
            try {
                let query = clientEntity.findOneAndUpdate({
                    '_id': client.id
                }, {
                        'status_item': client.status_item,
                        'modification_date': client.modification_date,
                        'maker': client.maker
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
                                result: ` No found item ${client.id}`,
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

    asyncUpdate: function (client) {
        const promesa = new Promise(function (resolve, reject) {
            try {
                let query = clientEntity.findOneAndUpdate({
                    '_id': client.id
                }, {
                        'status_item': client.status_item,
                        'modification_date': client.modification_date,
                        'maker': client.maker,
                        'name': client.name,
                        'description': client.description,
                        'stock': client.stock,
                        'cost': client.cost,
                        'sale': client.sale,
                        'iva': client.iva,
                        'imgurl': client.imgurl
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
                                result: ` No found item ${client.id}`,
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
    , asyncRead: function (client) {
        let promesa = new Promise(function (resolve, reject) {
            try {
                const query = clientEntity.find({ id: client.id });

                query.exec(function (error, docs) {
                    if (error) {
                        reject({
                            statusCode: enums.HTTP_STATUS_CODE.BAD_GATEWAY,
                            result: '',
                            message: error.message

                        });
                    }
                    if (docs.length > 0) {
                        resolve({
                            statusCode: enums.HTTP_STATUS_CODE.OK,
                            result: JSON.stringify(docs),
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
    asyncCreate: function (client) {
        let promesa = new Promise(function (resolve, reject) {
            try {
                let objectEntity = clientEntity({
                    status_item: client.status_item,
                    create_date: client.create_date,
                    modification_date: client.modification_date,
                    maker: client.maker,
                    name: client.name,
                    description: client.description,
                    resenadurapiso: client.resenadurapiso,
                    imgurl: client.imgurl
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
    asyncGetAll: function (client) {
        let promesa = new Promise(function (resolve, reject) {
            try {
                let query;

                if (enums.CheckExist(client.status_item)) {
                    query = clientEntity.find({ status_item: client.status_item });
                } else {
                    query = clientEntity.find({});

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

                // if (enums.CheckExist(client.status_item)) {
                //     query = clientEntity.find({ status_item: client.status_item });
                // } else {
                //     query = clientEntity.find({});
                // }

                // query.
            } catch (error) {
                error(error);
            }
        });
        return promesa;
    }
}