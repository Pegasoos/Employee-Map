const mysql = require("mysql");
const util = require("util");
//connection to mysql server
const connection = mysql.createConnection({
    host: "localhost",
    port:"3306",
    user:"root",
    password:"SpadeS258!",
    database:"employees_db"
});

connection.connect(function(err){
    if (err) throw err;
    console.log(`Connected as ${connection.threadId}`)
});

util.promisify(connection.query);
//export for use in other files
module.exports = connection;