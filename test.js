//엄격한 코드 검사

'use strict';
/************* include library **************/
var express = require('express');
var api     = express();
var db      = require('./db');

/************* Routing **************/
//api Index
api.get('/', (req, res, next) => {
    //db.connect();
   
    console.log("init start");
    db.query(' select * from sensor_data ' , function(error, results, fields){
        if (error) {
            console.log(error);
            
        }

        console.log(results);
        res.send(results);
    });

      
});

/************* Routing **************/
//api Index
api.get('/sensor', (req, res, next) => {
    
    console.log("init start");
    db.query(' select * from sensor_data ' , function(error, results, fields){

        console.log(results);
        res.send(results);
    })

    res.send("Welcome is API Fucntion"+results);
    res.send(results);
});


 api.post('/sensor', (req, res, next) => {
    var sql = " insert into sensor_data (sensor_type, sensor_value, sensor_user, ins_date) values ('"+ req.body.sensor_type +"', "+ req.body.sensor_value +", '"+ req.body.sensor_user +"', now()) ";
    console.log(sql);
    db.connect();
    console.log("init start");
    db.query(sql , function(error, results, fields){

        console.log(error);
        console.log(results);
        res.send(results);
    })

    //req.body.sensorIdx
    //req.body.sensorType
    //req.body.sensorValue

});

api.post('/insSensor', (req, res, next) => {

    var sensorType = req.body.sensorType;// "";
    var sensorValue = req.body.sensorValue;//"";
    var userId = req.body.userId; //"";
    
    var sql = " insert into sensor_data (sensor_type, sensor_value, sensor_user, ins_date) values ";
    sql += " ('"+ sensorType +"', "+ sensorValue +", '"+ userId +"', now()) ";
    console.log(sql);
    db.connect();

    console.log("init start");
    db.query(sql , function(error, results, fields){

        console.log(error);
        console.log(results);
        res.send(results);
    })

    //req.body.sensorIdx
    //req.body.sensorType
    //req.body.sensorValue

});
api.get('/hello', (req, res, next) => {
    res.send("HTTP GET > Hello Nodejs");
});

api.post('/hello', (req, res, next) => {
    res.send("HTTP POST > Hello Nodejs");
});

//Query String
// ex) http://localhost/api/echo?param1=123&param2=321
api.get('/query_echo', (req, res, next) => {
    res.send(req.query);
});


module.exports = api;