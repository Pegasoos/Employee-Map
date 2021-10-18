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
.then((res) => {console.log(res)})
};
mainTree();