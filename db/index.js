const connection = require("./connection");
const consoletables = require("console.table");
class Query{ //Query class to organize methods for interacting with mysql database
addDepartment(answers, callback){ //Query to add departments to department table in employee_db database
    connection.query(
    "INSERT INTO employees_db.employee_department SET ?",
     
    answers,
     
     function(err, res){
         if(err) throw err;
         console.table('Departments', res);
         console.log(`${res.affectedRows} department added!`)
         callback(); //All database queries contain a callback function which will return 
                     //the user to the main inquirer menu, so they can keep making queries
                     // until they decide to exit the app
     })
    };

addRole(answers, callback){ //Query to add roles to role table in employee_db database
        connection.query(
        "INSERT INTO employees_db.employee_role SET ?",
        answers,
        function(err, res){
            if(err) throw err;
            console.log(`${res.affectedRows} role added!`)
            callback();
        })
};
addEmployees(answers, callback){ //Query to add employees to role table in employee_db database
        connection.query(
        "INSERT INTO employees_db.employee SET ?",
        answers,
        function(err, res){
            if(err) throw err;
            console.log(`${res.affectedRows} employee added!`)
            callback();
        })
};
viewDepartment(callback){ //Query to retrieve department data from database and display in console as a table
    connection.query(
        "SELECT * FROM employees_db.employee_department",
        function(err, res){
            if(err) throw err;
            console.table('Departments', res);
            callback();
        })
};
viewRole(callback){ //Query to retrieve role data from database and display in console as a table
       connection.query(
        "SELECT * FROM employees_db.employee_role",
        function(err, res){
            if(err) throw err;
            console.table('Roles', res);
            callback();
        })
};
viewEmployee(callback){ //Query to retrieve employee data from database and display in console as a table
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
//export for use elsewhere
module.exports = new Query();
