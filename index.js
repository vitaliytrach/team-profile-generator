const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const page = require("./src/page");

let managers = [];
let engineers = [];
let interns = [];


const run = async () => {
    while(true) {
        const choice = await inquirer.prompt([
            {
                type: "list",
                message: "What kind of employee would you like to add?",
                choices: ["Manager", "Engineer", "Intern", "Done"],
                name: "option"
                }
            ]);
    
            if(choice.option === "Manager") {
                await addManager();
            } else if(choice.option === "Engineer") {
                await addEngineer();
            } else if(choice.option === "Intern") {
                await addIntern();
            } else if(choice.option === "Done") {
                generateHTML();
                break;
            } else {
                console.log("Invalid input");
            }
    }
}

const generateHTML = () => {
    page.appendPage(page.generateTopOfHTML());

    for(const m of managers) {
        page.appendPage(page.addManager(m.getName(), m.getID(), m.getEmail(), m.getOfficeNumber()));
    }

    for(const e of engineers) {
        page.appendPage(page.addEngineer(e.getName(), e.getID(), e.getEmail(), e.getGithub()));
    }

    for(const i of interns) {
        page.appendPage(page.addIntern(i.getName(), i.getID(), i.getEmail(), i.getSchool()));
    }

    page.appendPage(page.generateBottomOfHTML());
    page.generatePage();
}

const addManager = async () => {
    return await inquirer.prompt([
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

const addEngineer = async () => {
    return await inquirer.prompt([
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

const addIntern = async () => {
    return await inquirer.prompt([
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