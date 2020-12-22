var mysql = require('mysql');
var db = mysql.createConnection({

    host: 'ls-712a3de0f216372c332622b5ed5c6f22fe2f67bd.cu0xyssgzj43.ap-northeast-2.rds.amazonaws.com',
    port: '3306',
    user: 'dbmasteruser',
    password:'angksehwjsqq',
    database: 'BU',
    multipleStatements: true
});
db.connect();
module.exports = db;