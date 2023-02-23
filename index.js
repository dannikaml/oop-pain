// link to page creation
const generateHTML = require('./src/generateHTML');

// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

// team array
const teamMembers = []; 

// start of manager prompts 
const managerInput = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Managers first and last name?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Enter Managers Name...");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID: ",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Enter Manager's ID...")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Manager's email: ",
            validate: email => {
                valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ("Enter Manager's email: ")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Enter office number...')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamMembers.push(manager); 
        console.log(manager); 
    })
};

const addEmployee = () => {
    console.log(`Adding employees to html`);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'job',
            message: "Please select the employees job title: ",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Employees full name?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Enter Employees name...");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Employees ID:",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Enter Employees ID...")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employees email address: ",
            validate: email => {
                valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the Employees GitHub username: ",
            when: (input) => input.job === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Enter Employees GitHub username: ")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school name: ",
            when: (input) => input.job === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Enter school name: ")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        // data for employee types 

        let { name, id, email, job, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (job === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (job === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamMembers.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamMembers); 
        } else {
            return teamMembers;
        }
    })

};


// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Success! You're index.html page is now ready...")
        }
    })
}; 

managerInput()
.then(addEmployee)
.then(teamMembers => {
    return generateHTML(teamMembers);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
console.log(err);
});