const inquirer = require("inquirer");
const connection = require("./db/connection");
const { addDepartment, addRole } = require("./db/index");
const queries = require("./db/index");
function mainTree(){
inquirer
.prompt([
    {
        type: "list",
        choices: ["Add a new employee, role, or department", "View current employees, roles, or department", "Update employee roles", "Exit"],
        name:"StartMenu",
        message:"Would you like to:"
    }
])
.then((res) =>{
    switch(res.StartMenu){
    case "Add a new employee, role, or department":
        inquirer.prompt([
            {
                type:"list",
                choices: ["Add a new employee", "Add a new role", "Add a new department"],
                name:"AddChoices",
                message:"Would you like to:"
            }
        ])
        .then((res) => {
        switch(res.AddChoices){
         case  "Add a new employee":
             console.log("Success A")
         break;

         case "Add a new role":
         inquirer.prompt([
             {
                 type:"input",
                 name:"dep_id",
                 message:"What is the id for this role's department?"
             },
             {
                 type:"input",
                 name:"role_id",
                 message:"What is the id for this role?"
             },
             {
                 type:"input",
                 name:"title",
                 message:"What is this role's title?"
             },
             {
                 type:"input",
                 name:"salary",
                 message:"What is this role's salary?"
             }
         ]).then((answers) => {addRole(answers)})
         break;

         case "Add a new department":
         inquirer.prompt([
             {
                type: "input",
                name:"dep_id",
                message:"What is the department id?"
             },
             {
                type: "input",
                name: "dep_name",
                message: "What is the department name?"
             }
         ]).then((answers) => {addDepartment(answers)})
         break;
        }
        })
    break;

    case "View current employees, roles, or department":
        inquirer.prompt([
            {
                type:"list",
                choices: ["View employees", "View roles", "View departments"],
                name:"ViewChoices",
                message:"Would you like to:"
            }
        ])
        .then((res) => {
        switch(res.ViewChoices){
         case  "View employees":
         queries.viewEmployee();
         break;

         case "View roles":
         queries.viewRole();
         break;

         case "View departments":
         queries.viewDepartment();
         break;
        }
        })
    break;

    case "Update employee roles":
    console.log("success C");
    break;

    case "Exit":
    connection.end();
    break;
}})
};
mainTree();