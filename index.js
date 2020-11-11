const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// prompt for user entries
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your Github username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Explain the installation process:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples of usage:',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Select the license type for your project:',
            choices: [
                'None',
                'Apache License 2.0',
                'MIT License',
                'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause "New" or "Revised" License',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU General Public License v3.0',
                'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0',
                'The Unlicense'
            ]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide guidelinies to contributing to your project:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Then provide examples on how to run tests for your project:',
        }
    ]);
};

// generate readme file with user entry
function writeToFile(fileContent) {
    fs.writeFile('./dist/README.md', fileContent, err => {
        if (err) return console.log(err);
        console.log('Success! File created!');
      });
}

promptUser()
    .then(enteredData => {
        return generateMarkdown(enteredData);
    })
.then(pageHTML => {
    return writeToFile(pageHTML);
});