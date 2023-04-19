const fs = require("fs");

const generateHTML = require('./src/generateHTML');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

const employeeArray = [];

const createManager = () => {
  return inquirer.prompt ([
      {
        type: "input",
        name: "managerName",
        message: "What is the managers name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the managers employee ID?",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter the manager's ID!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the managers email?",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerOffNum",
        message: "What is the managers office number?",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter an office number!");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then(answers => {
      const  { managerName, managerId, managerEmail, managerOffNum } = answers; 
      const newManager = new Manager (managerName, managerId, managerEmail, managerOffNum);

      employeeArray.push(newManager); 
      console.log(newManager); 
  })
};

const createEmployee = () => {
  console.log(`Now adding employees to the team.`);
  return inquirer.prompt ([
      {
        type: "list",
        name: "role",
        message: "Please choose your employee's role",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "employeeName",
        message: "What is the employee's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter an employee's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is the employee ID?",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter the employee's ID!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "employeeEmail",
        message: "What is the employee's email?",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is the employee's github address?",
        when: (input) => input.role === "Engineer",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the employee's github username!");
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What school did the intern graduate from?",
        when: (input) => input.role === "Intern",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the intern's school!");
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add more team members?",
        default: false,
      },
    ])
    .then((answers) => {
      let {
        employeeName,
        employeeId,
        employeeEmail,
        role,
        github,
        school,
        confirmAddEmployee,
      } = answers;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(
          employeeName,
          employeeId,
          employeeEmail,
          github
        );

        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(employeeName, employeeId, employeeEmail, school);

        console.log(employee);
      }

      employeeArray.push(employee);
      if (confirmAddEmployee) {
        return addEmployee(employeeArray);
      } else {
        return employeeArray;
      }
    });
}

const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Profile successfully created.");
    }
  });
};

createManager()
  .then(createEmployee)
  .then((employeeArray) => {
    return generateHTML(employeeArray);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
