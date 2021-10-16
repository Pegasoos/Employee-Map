const mysql = require("mysql");
const util = require("util");

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
})
    
module.exports = connection;