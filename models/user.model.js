const Promise = require('promise');
const userEntity = require('../entities/user.entity');
// const enums = require('../util/enum.util');
// const responseutil = require('../util/response.util')

module.exports = {
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