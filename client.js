'use strict';

var express = require('express');
var server  = express();
var path    = require('path');
var axios   = require('axios');
var cron = require('node-cron');
const { response } = require('./api');

//view engine setup
server.set('views', path.join(__dirname, '/web'));
server.set('view engine', 'ejs');
server.engine('html', require('ejs').renderFile);

cron.schedule('*/5  * * * * *', () => {
    console.log('매 1, 2, 4, 5분 마다 실행');

    var sensorType = 'T';
    var sensorVal = 20;
    var userId = 'Jichanto';
    
    axios.get('http://localhost:3000/api/inSsensor?sensorType='+sensorType + '&sensorValue=' + sensorVal + '&userId='+ userId).then((Response)=>{

    }).catch((Error)=>{
        console.log(Error);
    
    });

});
server.use(express.static(__dirname + '/node_modules/startbootstrap-sb-admin-2'))

//client Index
server.get('/list', (req, res, next) => {
  
    axios.get('http://localhost:3000/api').then((Response)=>{
        console.log(Response.data);
        
        //var arrData = 
        // npm install axios
        var arrData = {
            "data" : Response.data
        }
        //console.log(arrData);
        res.render('list.ejs', arrData);
    }).catch((Error)=>{
        console.log(Error);
    })
    
});

module.exports = server;