const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let managers = [];
let engineers = [];
let interns = [];

const run = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "What kind of employee would you like to add?",
            choices: ["Manager", "Engineer", "Intern", "Done"],
            name: "option"
        }
    ])
    .then(ans => {
        if(ans.option === "Manager") {
            addManager();
        } else if(ans.option === "Engineer") {
            addEngineer();
        } else if(ans.option === "Intern") {
            addIntern();
        } else if(ans.option === "Done") {
            generateHTML();
        } else {
            console.log("Invalid input");
        }
    });
}

const generateHTML = () => {
    for(const m of managers) {

    }

    for(const e of engineers) {

    }

    for(const i of interns) {
        
    }
}

const addManager = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter manager's name:",
            name: "managerName"
        },
        {
            type: "input",
            message: "Enter employee ID:",
            name: "managerID"
        },
        {
            type: "input",
            message: "Enter employee's email address: ",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "Enter employee's office number:",
            name: "officeNumber"
        },
    ]).then(result => {
        managers.push(new Manager(
            result.managerName,
            result.managerID,
            result.managerEmail,
            result.officeNumber
        ));
    });
}

const addEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter the engineer's name:",
            name: "engName"
        },
        {
            type: "input",
            message: "Enter employee ID:",
            name: "engID"
        },
        {
            type: "input",
            message: "Enter employee's email address: ",
            name: "engEmail"
        },
        {
            type: "input",
            message: "Enter employee's GitHub username:",
            name: "engGithub"
        },
    ]).then(result => {
        engineers.push(new Engineer(
            result.engName,
            result.engID,
            result.engEmail,
            result.engGithub
        ));
    });
}

const addIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter the intern's name:",
            name: "internName"
        },
        {
            type: "input",
            message: "Enter employee ID:",
            name: "internID"
        },
        {
            type: "input",
            message: "Enter employee's email address: ",
            name: "internEmail"
        },
        {
            type: "input",
            message: "Enter intern's school:",
            name: "internSchool"
        },
    ]).then(result => {
        interns.push(new Intern(
            result.internName,
            result.internID,
            result.internEmail,
            result.internSchool
        ));
    });
}

run();