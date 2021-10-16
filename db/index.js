const connection = require("./connection");

class Query{
addDepartment(answers){
let query = connection.query(
    "INSERT INTO employees_db.employee_department ?",
     answers,
     function(err, res){
         if(err) throw err;
         console.log(`${res.affectedRows} department added!`)
     })};

    };

module.exports = new Query();
