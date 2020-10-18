//엄격한 코드 검사  <오세연> TEST
'use strict';

/************* include library **************/
var express = require('express');
var mysql =    require('mysql');
var api     = express();

/************* Routing **************/
//api Index
api.get('/', (req, res, next) => {
    res.send("Welcome is API Fucntion");


/************* Routing **************/
//api Index
    var connection = mysql.createConnection({
        host: 'ls-712a3de0f216372c332622b5ed5c6f22fe2f67bd.cu0xyssgzj43.ap-northeast-2.rds.amazonaws.com',
        port: '3306',
        user: 'dbmasteruser',
        password:' buackr!!##',
        database: 'BU',
        multipleStatements: true
    });

    var connerction = mysql.createConnection({
        host : dbInfo.host,
        user : dbInfo.user,
        password : dbInfo.password,
        database : dbInfo.database
    })
    connection.connet();
    connection.query('SELECT * FROM sensor-data' , function (error, results, fields){
        if (error) {
            console.log(error);
        }

        console.log(results);
    });
    connection.end();
    res.send("Welcome is API Function");
});
    api.get('/hello', (req, res, next) => {
    var pId = "0";
    if(req.query.id !== null && req.query.id !== undefined){
        pId = req.query.id;
    }
    res.send("HTTP GET > Hello Nodejs");
});

api.post('/insSensor', (req, res, next) => {

    var sensorType = req.body.sensorType;// "";
    var sensorValue = req.body.sensorValue;//"";
    var userId = req.body.userId; //"";
    
    var sql = " insert into sensor_data (sensor_type, sensor_value, sensor_usr_id, ins_date, upd_date ) values ";
    sql += " ('"+ sensorType +"', "+ sensorValue +", '"+ userId +"', now() , now()) ";
    console.log(sql);
    connection.connect();
    connection.query(sql , function(error, results, fields){

        console.log(error);
        console.log(results);
        res.send(results);
    })

    //req.body.sensorIdx
    //req.body.sensorType
    //req.body.sensorValue

})
//Query String
// ex) http://localhost/api/echo?param1=123&param2=321
api.get('/query_echo', (req, res, next) => {
    res.send(req.query);
});


module.exports = api;
