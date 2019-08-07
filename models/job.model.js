const Promise = require('promise');
const jobEntity = require('../entities/job.entity');
const enums = require('../config/enum.util');

module.exports = {
    asyncDelete: function (job) {
        const promesa = new Promise(function (resolve, reject) {
            try {
                let query = jobEntity.findOneAndUpdate({
                    '_id': job.id
                }, {
                        'status_item': job.status_item,
                        'modification_date': job.modification_date,
                        'maker': job.maker
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
                                result: ` No found item ${job.id}`,
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
    asyncUpdate: function (job) {
        const promesa = new Promise(function (resolve, reject) {
            try {
                let query = jobEntity.findOneAndUpdate({
                    '_id': job.id
                }, {
                        'status_item': job.status_item,
                        'modification_date': job.modification_date,
                        'maker': job.maker,
                        'name': job.name,
                        'path': job.path
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
                                result: ` No found item ${job.id}`,
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
    , asyncRead: function (job) {
        let promesa = new Promise(function (resolve, reject) {
            try {
                
                const query = jobEntity.find({ id: job.id });

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
    asyncCreate: function (job) {
        let promesa = new Promise(function (resolve, reject) {
            try {
                let objectEntity = jobEntity({
                    status_item: job.status_item,
                    create_date: job.create_date,
                    modification_date: job.modification_date,
                    maker: job.maker,
                    name: job.name,
                    path: job.path
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
    }
    ,
    asyncGetAll: function (job) {
        let promesa = new Promise(function (resolve, reject) {
            try {
                let query;

                if (enums.CheckExist(job.status_item)) {
                    query = jobEntity.find({ status_item: job.status_item });
                } else {
                    query = jobEntity.find({});
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
            } catch (error) {
                error(error);
            }
        });
        return promesa;
    }
}