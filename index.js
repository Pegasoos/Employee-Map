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
         ]).then((answers) => {console.log(answers)})
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
         console.log("Success B")
         break;

         case "View departments":
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