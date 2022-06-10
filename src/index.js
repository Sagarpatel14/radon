const express = require('express');
var bodyParser = require('body-parser');
const ip = require("ip")
const moment = require("moment")

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.use(function (req, res, next){
    currentDateAndTime = moment().format("YYYY-MM-DD hh:MM:SS");
    currentIp = req.ip;
    currentReqestPath = req.path; 
    console.log(currentDateAndTime + "," + currentIp + "," + currentReqestPath )
})

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

