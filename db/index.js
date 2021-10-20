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
updateRole(answers){
    let query = connection.query(//placeholder variables to model the function
        `UPDATE employees_db.employee_role SET role_id = ${answers.second}, title = ${answers.third}, salary = ${answers.fourth} WHERE employees_db.employee.id = ${answers.first}`,
        function(err, res){
            if(err) throw err;
            console.log(res.affectedRows)
        })
        console.log(query.sql);
};
};


module.exports = new Query();
