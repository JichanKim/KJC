//엄격한 코드 검사
'use strict';

/************* include library **************/
var express = require('express');
var mysql   = require('mysql');
var api     = express();
var db      = require('./db');

var connection = mysql.createConnection({
    host     : 'ls-712a3de0f216372c332622b5ed5c6f22fe2f67bd.cu0xyssgzj43.ap-northeast-2.rds.amazonaws.com',
    user     : 'dbmasteruser',
    password : 'buackr!!##',
    database : 'BU'
});

/************* Routing **************/
//api Index
api.get('/', (req, res, next) => {


var dbInfo = {

    host: ' ls-712a3de0f216372c332622b5ed5c6f22fe2f67bd.cu0xyssgzj43.ap-northeast-2.rds.amazonaws.com',
    port: '3306',
    user: 'dbmasteruser',
    password:'buackr!!##',
    database: 'BU',
    multipleStatements: true
}


    connection.connect();
    db.query('SELECT * FROM sensor_data ', function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        res.send(results);
        console.log(results);
        
    });
    connection.end();    
});

/************* Routing **************/
//api Index


// post

api.post('/insSensor', (req, res, next) => {

    var sensorType = req.body.sensorType;// "";
    var sensorValue = req.body.sensorValue;//"";
    var userId = req.body.userId; //"";
    
    var sql = " insert into sensor_data (sensor_type, sensor_value, sensor_user, ins_date ) values ";
    sql += " ('"+ sensorType +"', "+ sensorValue +", '"+ userId +"', now()) ";
    console.log(sql);
    connection.connect();

    console.log("init start");
    connection.query(sql , function(error, results, fields){

        console.log(error);
        console.log(results);
        res.send(results);
    })

});

//Query String
// ex) http://localhost/api/echo?param1=123&param2=321
api.get('/query_echo', (req, res, next) => {
    res.send(req.query);
});


module.exports = api;
// 231654984321
// res.send(results)
//hty