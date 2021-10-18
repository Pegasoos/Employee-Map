//const query = require("./db/index");
const inquirer = require("inquirer");
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
.then((res) =>
    {switch(res.StartMenu){
    case "Add a new employee, role, or department":
    console.log("success A");
    break;

    case "View current employees, roles, or department":
    console.log("success B");
    break;

    case "Update employee roles":
    console.log("success C");
    break;

    case "Exit":
    console.log("success D");
    break;
}})
};
mainTree();