const inquirer = require("inquirer");
const connection = require("./db/connection");
const queries = require("./db/index");
const { addDepartment, addRole, addEmployees, updateRole } = require("./db/index");

function mainTree(){//function begins with menu to select actions, is called again later to return to the starting menu
inquirer
.prompt([
    {// Code for Add option begins on line 17, Code for View option begins on line 101, Code for Update option begins on line 125, Code for Exit on line 150
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
        switch(res.AddChoices){//switch case to display different options
         case  "Add a new employee":
             inquirer.prompt([//prompts to store user's new employee information
                 {
                    type:"input",
                    name:"id",
                    message:"What is this employee's id?"
                 },
                 {
                     type:"input",
                     name:"first_name",
                     message: "What is this employee's fist name?"
                 },
                 {
                     type:"input",
                     name:"last_name",
                     message:"What is this employee's last name?"
                 },
                 {
                     type:"input",
                     name:"role_id",
                     message:"What is the id for this employee's role?"
                 },
                 {
                     type:"input",
                     name:"manager_id",
                     message:"What is the id of this employee's manager?"
                 }
             ]).then((answers) => {addEmployees(answers, mainTree)})//function to send user's inputs in a mysql query to create new employee in database
             break;
         case "Add a new role":
         inquirer.prompt([//user enters values for all role columns, values passed through function that queries mysql to create the role
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
         ]).then((answers) => {addRole(answers, mainTree)})
         break;

         case "Add a new department":
         inquirer.prompt([//user enters values for the two department columns "dep_id" and "dep_name"
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
         ]).then((answers) => {addDepartment(answers, mainTree)});//values passed through function that queries mysql to create department
         break;
        }
        })
    break;

    case "View current employees, roles, or department":
        inquirer.prompt([//list of options so user can view table of their choice
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
         queries.viewEmployee(mainTree);
         break;
         case "View roles":
         queries.viewRole(mainTree);
         break;
         case "View departments":
         queries.viewDepartment(mainTree);
         break;
        }
        })
    break;

    case "Update employee roles":
    inquirer.prompt([//user enters information to update the role based on the role id they enter
        {
            type:"input",
            message:"What is the title of the role you would like to update?",
            name:"title"
        },
        {
            type:"input",
            name:"dep_id",
            message:"What is the new id for this role's department?"
        },
        {
            type:"input",
            name:"role_id",
            message:"What is the id for this role?"
        },
        {
            type:"input",
            name:"salary",
            message:"What is the new salary for this role?"
        }
    ]).then((answers) => updateRole(answers, mainTree));
    break;

    case "Exit"://Exit option to stop connection to database and app when user is finished
    connection.end();
}})
};
mainTree();