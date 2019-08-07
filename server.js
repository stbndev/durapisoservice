const express = require('express');
let routes = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
// const jwtutil = require('./util/jwt.util');
const configdb = require('./config/mongoose');

// alpha
app.set('port', (process.env.PORT || 5000));
// app.set('superSecret', SuperSecret.NIP);
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.status(200).send({
        'message': 'Welcome!. to be continue'
    });
});

routes = require('./routes/job.route')(app);
routes = require('./routes/promotion.route')(app);
routes = require('./routes/download.route')(app);
routes = require('./routes/client.route')(app);
routes = require('./routes/user.route')(app);
routes = require('./routes/product.route')(app);

mongoose.disconnect();

mongoose.connect(configdb.url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    reconnectTries: Number.MAX_VALUE
}).then(x => {
    console.log('connection success');
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});

// #20190501.1620
// KICK OFF DURAPISOSERVICE
// #20190728.0102
// ADD FEATURES & COMPONENTS
// 
