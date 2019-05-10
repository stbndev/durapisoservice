const Promise = require('promise');
const productEntity = require('../entities/product.entity');
const enums = require('../config/enum.util');
// const responseutil = require('../util/response.util')

module.exports = {
    asyncUpdate:function (product) {
        const promesa = new Promise(function (resolve, reject) {
            try {

                let query = inventoryEntity.findOneAndUpdate({
                    '_id': objectInventory.id
                }, {
                        'status_item': objectInventory.status_item,
                        'modification_date': objectInventory.modification_date,
                        'maker': objectInventory.maker,
                        'product_code': objectInventory.product_code,
                        'barcode': objectInventory.barcode,
                        'description': objectInventory.description,
                        'items_current': objectInventory.items_current,
                        'items_entries': objectInventory.items_entries,
                        'items_outgoings': objectInventory.items_outgoings,
                        'items_stock': objectInventory.items_stock
                    }, {
                        new: true
                    }, function (error, res) {
                        if (error) {
                            reject({
                                statusItem: enums.STATUS_ITEM.INCIDENCIA,
                                statusCode: enums.HTTP_STATUS_CODE.BAD_REQUEST,
                                result: '',
                                message: error.message,
                                href: '',
                                function: ''
                            });
                        }

                        if (!enums.CheckExist(res._doc)) {
                            reject({
                                statusItem: enums.STATUS_ITEM.INCIDENCIA,
                                statusCode: enums.HTTP_STATUS_CODE.BAD_REQUEST,
                                result: ` No found item ${objectInventory.id}`,
                                message: 'set',
                                href: '',
                                function: ''
                            });
                        } else {
                            resolve({
                                statusItem: enums.STATUS_ITEM.SUCCESS,
                                statusCode: enums.HTTP_STATUS_CODE.OK,
                                result: JSON.stringify(res),
                                message: '',
                                href: '',
                                function: ''
                            });
                        }
                    });
            } catch (error) {
                reject({
                    statusItem: enums.STATUS_ITEM.INCIDENCIA,
                    statusCode: enums.HTTP_STATUS_CODE.BAD_REQUEST,
                    result: '',
                    message: error.message,
                    href: '',
                    function: ''
                });
            }
        });
        return promesa;
    }
    ,asyncRead: function (product) {
        let promesa = new Promise(function (resolve, reject) {
            try {
                const query = productEntity.find({ id: product.id });

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
    asyncCreate: function (product) {
        let promesa = new Promise(function (resolve, reject) {
            try {
                let objectEntity = productEntity({
                    status_item: product.status_item,
                    create_date: product.create_date,
                    modification_date: product.modification_date,
                    maker: product.maker,
                    name: product.name,
                    description: product.description,
                    stock: product.stock,
                    cost: product.cost,
                    sale: product.sale,
                    iva: product.iva,
                    imgurl: product.imgurl
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
    asyncGetAll: function () {
        let promesa = new Promise(function (resolve, reject) {
            try {
                const query = productEntity.find({});

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