//엄격한 코드 검사
'use strict';

/************* include library **************/
var express             = require('express');
var path                = require('path');
const { query } = require('express');
var server              = express();

/************* view engine setup **************/
server.set('views', path.join(__dirname, '/web'));

server.set('view engine', 'ejs');
server.engine('html', require('ejs').renderFile);


server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, '/web')));


/************* Routing **************/

//intro
server.get('/', (req, res, next) => {
    res.render("index.html");
});

//Quary String에 대하여 알아보자
server.get('/study', (req, res, next) => {

    // http://localhost/study?id=1234&name=백석대

    let student = {
        id : 0,
        name : "손님",
        age : 21
    }

    if(req.query.id !== null && req.query.id !== undefined){
        student.id = req.query.id;
    }
    if(req.query.name !== null && req.query.name !== undefined){
        student.name = req.query.name;
    }

    if(req.query.age !== null && req.query.age !== undefined){
        student.age = req.query.age;
    }
  
  
    console.log(student);
    res.render("iWillStudy.html", student);
});


//구구단 페이지
server.get('/99dan',  (req, res, next) => {

    // http://localhost/study?primary=8

    let gugudan = {
        primary : 2,
        length : 9
    }

    if(req.query.primary !== null && req.query.primary !== undefined){
        gugudan.primary = req.query.primary;
    }
    /* interger check */
    let val = parseInt(req,query.primary);
   // console.log(Number.isInteger(parseInt(req.query.primary)));
    if( Number.isInteger(val) == true  ){

        // 2단부터 9단까지만 구동되게
        if(val >1 && val < 10){
            res.render("99dan.html", gugudan);
        }else{
            res.send("유효하지 않은 값입니다.")
        }
    }else
        res.send("숫자가 아닙니다.")
  

});

module.exports = server;
