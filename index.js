// TODO: Include packages needed for this application
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name:'title',
        message:'Enter project title',
    },
    {
        type: 'input',
        name:'description',
        message:'Enter description',
    },
    {
        type: 'input',
        name:'installation',
        message:'Enter instructions for installation',
    },
    {
        type: 'input',
        name:'usage',
        message:'Enter information on how to use',
    },
    {
        type: 'input',
        name:'license',
        message:'Enter license information',
    },
    {
        type: 'input',
        name:'contributing',
        message:'Enter contribution',
    },
    {
        type: 'input',
        name:'tests',
        message:'Enter tests',
    },
    {
        type: 'input',
        name:'username',
        message:'What is your username?',
    },
    {
        type: 'input',
        name:'email',
        message:'What is your email?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
