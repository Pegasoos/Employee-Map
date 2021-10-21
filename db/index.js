const connection = require("./connection");
const consoletables = require("console.table");
class Query{
addDepartment(answers){
    connection.query(
    "INSERT INTO employees_db.employee_department SET ?",
     
    answers,
     
     function(err, res){
         if(err) throw err;
         console.table('Departments', res);
         console.log(`${res.affectedRows} department added!`)
     })
    };

addRole(answers){
        connection.query(
        "INSERT INTO employees_db.employee_role SET ?",
        answers,
        function(err, res){
            if(err) throw err;
            console.table('Roles', res);
            console.log(`${res.affectedRows} role added!`)
        })
};
addEmployees(answers){
        connection.query(
        "INSERT INTO employees_db.employee SET ?",
        answers,
        function(err, res){
            if(err) throw err;
            console.table('Employees', res);
            console.log(`${res.affectedRows} role added!`)
        })
};
viewDepartment(){
    connection.query(
        "SELECT * FROM employees_db.employee_department",
        function(err, res){
            if(err) throw err;
            console.table('Departments', res);
        })
};
viewRole(){
       connection.query(
        "SELECT * FROM employees_db.employee_role",
        function(err, res){
            if(err) throw err;
            console.table('Roles', res);
        })
};
viewEmployee(){
    connection.query(
        "SELECT * FROM employees_db.employee;",
        function(err, res){
            if(err) throw err;
            console.table('Employee', res);
        })
        
};
//UPDATE employees_db.employee_role SET title = "Ratcheteer", dep_id = 1, salary = 30 WHERE role_id = 2;
updateRole(answers){
        connection.query(
        `UPDATE employees_db.employee_role SET title = "${answers.title}", dep_id = ${answers.dep_id}, salary = ${answers.salary} WHERE role_id = ${answers.role_id};`,
            function(err, res){
            if(err) throw err;
            console.table(res);
            console.log(`Department Id : ${answers.dep_id} | Role Id: ${answers.role_id} | Title: ${answers.title} | Salary: ${answers.salary}`);
        })
};
};

module.exports = new Query();
