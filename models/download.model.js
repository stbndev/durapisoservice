const Promise = require('promise');
const downloadEntity = require('../entities/download.entity');
const enums = require('../config/enum.util');
//const responseutil = require('../util/response.util')

module.exports = {
    asyncDelete: function (download) {
        const promesa = new Promise(function (resolve, reject) {
            try {
                let query = downloadEntity.findOneAndUpdate({
                    '_id': download.id
                }, {
                        'status_item': download.status_item,
                        'modification_date': download.modification_date,
                        'maker': download.maker
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
                                result: ` No found item ${download.id}`,
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

    asyncUpdate: function (download) {
        const promesa = new Promise(function (resolve, reject) {
            try {
                let query = downloadEntity.findOneAndUpdate({
                    '_id': download.id
                }, {
                        'status_item': download.status_item,
                        'modification_date': download.modification_date,
                        'maker': download.maker,
                        'title': download.title,
                        'description': download.description,
                        'pathurl': download.pathurl
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
                                result: ` No found item ${download.id}`,
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
    , asyncRead: function (download) {
        // let promesa = new Promise(function (resolve, reject) {
        //     try {
        //         const query = downloadEntity.find({ id: download.id });

        //         query.exec(function (error, docs) {
        //             if (error) {
        //                 reject({
        //                     statusCode: enums.HTTP_STATUS_CODE.BAD_GATEWAY,
        //                     result: '',
        //                     message: error.message

        //                 });
        //             }
        //             if (docs.length > 0) {
        //                 resolve({
        //                     statusCode: enums.HTTP_STATUS_CODE.OK,
        //                     result: JSON.stringify(docs),
        //                     message: ''
        //                 });
        //             } else {
        //                 resolve({
        //                     statusCode: enums.HTTP_STATUS_CODE.BAD_REQUEST,
        //                     result: JSON.stringify(docs),
        //                     message: ''
        //                 });
        //             }
        //         });
        //     } catch (error) {
        //         error(error);
        //     }
        // });
        // return promesa;
    },
    asyncCreate: function (download) {
        let promesa = new Promise(function (resolve, reject) {
            try {
                let objectEntity = downloadEntity({
                    status_item: download.status_item,
                    create_date: download.create_date,
                    modification_date: download.modification_date,
                    maker: download.maker,
                    title: download.title,
                    description: download.description,
                    pathurl: download.pathurl
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
    asyncGetAll: function (download) {
        let promesa = new Promise(function (resolve, reject) {
            try {
                let query;

                if (enums.CheckExist(download.status_item)) {
                    query = downloadEntity.find({ status_item: download.status_item });
                } else {
                    query = downloadEntity.find({});

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

                // if (enums.CheckExist(download.status_item)) {
                //     query = downloadEntity.find({ status_item: download.status_item });
                // } else {
                //     query = downloadEntity.find({});
                // }

                // query.
            } catch (error) {
                error(error);
            }
        });
        return promesa;
    }
}