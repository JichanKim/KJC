'use strict';

var express = require('express');
var server  = express();
var path    = require('path');
var axios   = require('axios');

//view engine setup
server.set('views', path.join(__dirname, '/web'));
server.set('view engine', 'ejs');
server.engine('html', require('ejs').renderFile);


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