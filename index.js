// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile}= require('fs').promises;

// TODO: Create an array of questions for user input
const questions = () => { return inquirer.prompt([
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
]);
};

// TODO: Create a function to write README file
const generateReadMe = ({title, description, installation, usage, license, contributing, tests, username, email}) => 
`# ${title}

## Description
${description}

## Table of contents
- Installation (#installation)
- Usage (#usage)
- License (#license)
- Contributing (#contributing)
- Tests (#tests)
- Questions (#questions)

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributing
${contributing}

## Tests
${tests}

## Question
If you have any questions reach out to me at ${email}.
My Github username is ${username} and this is the link to my Github (https://github.com/${username})`;



// TODO: Create a function to initialize app
const init = () => {
    
}

// Function call to initialize app
init();
