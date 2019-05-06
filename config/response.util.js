/**
 * Created by Voltron on 18/06/2017.
 */
module.exports = {

    Send: function (res, HttmpResponseNumber, result, message = "") {
        if (HttmpResponseNumber == null && (HttmpResponseNumber != 200 && HttmpResponseNumber != 400)) {
            throw Error("numberResponse is required");
        }
        const buildResponse = {
            "result": result,
            "message": message,
        };
        res.status(HttmpResponseNumber).send(JSON.stringify(buildResponse));
    }
};