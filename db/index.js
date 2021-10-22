const connection = require("./connection");
const consoletables = require("console.table");
class Query{
addDepartment(answers, callback){
    connection.query(
    "INSERT INTO employees_db.employee_department SET ?",
     
    answers,
     
     function(err, res){
         if(err) throw err;
         console.table('Departments', res);
         console.log(`${res.affectedRows} department added!`)
         callback();
     })
    };

addRole(answers, callback){
        connection.query(
        "INSERT INTO employees_db.employee_role SET ?",
        answers,
        function(err, res){
            if(err) throw err;
            console.log(`${res.affectedRows} role added!`)
            callback();
        })
};
addEmployees(answers, callback){
        connection.query(
        "INSERT INTO employees_db.employee SET ?",
        answers,
        function(err, res){
            if(err) throw err;
            console.log(`${res.affectedRows} employee added!`)
            callback();
        })
};
viewDepartment(callback){
    connection.query(
        "SELECT * FROM employees_db.employee_department",
        function(err, res){
            if(err) throw err;
            console.table('Departments', res);
            callback();
        })
};
viewRole(callback){
       connection.query(
        "SELECT * FROM employees_db.employee_role",
        function(err, res){
            if(err) throw err;
            console.table('Roles', res);
            callback();
        })
};
viewEmployee(callback){
    connection.query(
        "SELECT * FROM employees_db.employee;",
        function(err, res){
            if(err) throw err;
            console.table('Employee', res);
            callback();
        })
};
//UPDATE employees_db.employee_role SET title = "Ratcheteer", dep_id = 1, salary = 30 WHERE role_id = 2;
updateRole(answers, callback){
        connection.query(
        `UPDATE employees_db.employee_role SET title = "${answers.title}", dep_id = ${answers.dep_id}, salary = ${answers.salary} WHERE role_id = ${answers.role_id};`,
            function(err, res){
            if(err) throw err;
            console.log(res.message);
            callback();
        })
};
};

module.exports = new Query();
