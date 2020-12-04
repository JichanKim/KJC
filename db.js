var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'ls-4ab94082220316df9f6805e2cb989baaea4e9715.cu0xyssgzj43.ap-northeast-2.rds.amazonaws.com',
    user: 'dbmasteruser',
    password: 'angksehwjsqq',
    database: 'BU'
});
db.connect()
module.exports = db;