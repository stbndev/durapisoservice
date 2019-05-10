const Promise = require('promise');
const productEntity = require('../entities/product.entity');
const enums = require('../config/enum.util');
// const responseutil = require('../util/response.util')

module.exports = {
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