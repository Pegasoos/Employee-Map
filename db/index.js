const connection = require("./connection");

class Query{
addDepartment(answers){
    connection.query(
    "INSERT INTO employees_db.employee_department SET ?",
     
    answers,
     
     function(err, res){
         if(err) throw err;
         console.log(`${res.affectedRows} department added!`)
     })
    console.log("-----------------------------------")
    };

addRole(answers){
        connection.query(
        "INSERT INTO employees_db.employee_role SET ?",
        answers,
        function(err, res){
            if(err) throw err;
            console.log(`${res.affectedRows} role added!`)
        })
        console.log("-----------------------------------");
};
addEmployees(answers){
        connection.query(
        "INSERT INTO employees_db.employee SET ?",
        answers,
        function(err, res){
            if(err) throw err;
            console.log(`${res.affectedRows} role added!`)
        })
        console.log("-----------------------------------");
};
viewDepartment(){
    connection.query(
        "SELECT * FROM employees_db.employee_department",
        function(err, res){
            if(err) throw err;
            for (var i = 0; i < res.length; i++) {
                console.log(`Department Id : ${res[i].dep_id} | Department Name: ${res[i].dep_name}`);
              }
        })
        console.log("-----------------------------------");
};
viewRole(){
       connection.query(
        "SELECT * FROM employees_db.employee_role",
        function(err, res){
            if(err) throw err;
            for (var i = 0; i < res.length; i++) {
                console.log(`Department Id : ${res[i].dep_id} | Role Id: ${res[i].role_id} | Title: ${res[i].title} | Salary: ${res[i].salary}`);
              }
        })
        console.log("-----------------------------------");
};
viewEmployee(){
    connection.query(
        "SELECT * FROM employees_db.employee;",
        function(err, res){
            if(err) throw err;
            for (var i = 0; i < res.length; i++) {
                console.log(`Id : ${res[i].id} | First Name: ${res[i].first_name} | Last Name: ${res[i].last_name} | Role Id: ${res[i].role_id} | Manager Id: ${res[i].manager_id}`);
              }
              console.log("-----------------------------------");
        })
        
};
//UPDATE employees_db.employee_role SET title = "Ratcheteer", dep_id = 1, salary = 30 WHERE role_id = 2;
updateRole(answers){
        connection.query(
        `UPDATE employees_db.employee_role SET title = "${answers.title}", dep_id = ${answers.dep_id}, salary = ${answers.salary} WHERE role_id = ${answers.role_id};`,
            function(err){
            if(err) throw err;
            console.log(`Department Id : ${answers.dep_id} | Role Id: ${answers.role_id} | Title: ${answers.title} | Salary: ${answers.salary}`);
            console.log("-----------------------------------");
        })
};
};

module.exports = new Query();
