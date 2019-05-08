const Promise = require('promise');
const productEntity = require('../entities/product.entity');
// const enums = require('../util/enum.util');
// const responseutil = require('../util/response.util')

module.exports = {
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