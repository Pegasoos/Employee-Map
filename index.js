const inquirer = require("inquirer");
const connection = require("./db/connection");
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
         console.log("Success B")
         break;

         case "Add a new department":
         console.log("Success C")
         break;
        }
        })
    break;

    case "View current employees, roles, or department":
        inquirer.prompt([
            {
                type:"list",
                choices: ["View an employee", "View a role", "View a department"],
                name:"ViewChoices",
                message:"Would you like to:"
            }
        ])
        .then((res) => {
        switch(res.ViewChoices){
         case  "View an employee":
         console.log("Success A")
         break;

         case "View a role":
         console.log("Success B")
         break;

         case "View a department":
         console.log("Success C")
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