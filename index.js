// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkDown = require("./utils/generateMarkdown")
const fs = require("fs");
const path = require("path");
// TODO: Create an array of questions for user input
const questions = [


    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is the link to your GitHub repository?",
        name: "repo"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "list",
        message: "What license would you like to select?",
        name: "license",
        choices: ["MIT", "GPL", "APACHE 2.0"]
    },
    {
        type: "input",
        message: "What is the author name?",
        name: "author"

    },
    {
        type: "input",
        message: "Describe your project",
        name: "description"
    },
    {
        type: "input",
        message: "Enter installation instructions",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter usage information",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter contribution guidelines",
        name: "contribution"
    },
    {
        type: "input",
        message: "Enter test instructions",
        name: "test"
    },

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, "dist", fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile("README.md", generateMarkDown(answers))
        })
        .catch((error) => {
            console.log(error)
        });
}

// Function call to initialize app
init();
