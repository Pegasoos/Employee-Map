const connection = require("./connection");

class Query{
addDepartment(answers){
    let query = connection.query(
    "INSERT INTO employees_db.employee_department ?",
     answers,
     function(err, res){
         if(err) throw err;
         console.log(`${res.affectedRows} department added!`)
     })
    console.log(query.sql)
    };

addRole(answers){
    let query = connection.query(
        "INSERT INTO employees_db.employee_role ?",
        answers,
        function(err, res){
            if(err) throw err;
            console.log(`${res.affectedRows} role added!`)
        })
        console.log(query.sql);
};
addEmployees(answers){
let query = connection.query(
        "INSERT INTO employees_db.employee ?",
        answers,
        function(err, res){
            if(err) throw err;
            console.log(`${res.affectedRows} role added!`)
        })
        console.log(query.sql);
}
};


module.exports = new Query();
