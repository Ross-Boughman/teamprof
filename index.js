import inquirer from "inquirer";
import Manager from "./lib/Manager";
import Engineer from "./lib/Engineer";
import Intern from "./lib/Intern";
import { type } from "os";

const managerArray = [];
const engineerArray = [];
const internArray = [];

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the managers name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the managers employee ID?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the managers email?",
      },
      {
        type: "input",
        name: "managerOffNum",
        message: "What is the managers office number?",
      },
    ])
    .then((answers) => {
      const newManager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOffNum
      );
      managerArray.push(newManager);
      console.log(newManager);
    })
    .catch((error) => {
      if (error.isTtyError) {
      } else {
      }
    });
}
function createEngineer() {
  inquirer
    .prompt([
        {
        type: '',
        }
    ])
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineers name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineers employee ID?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineers email?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineers github address?",
      },
    ])
    .then((answers) => {
      const newEngineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      engineerArray.push(newEngineer);
      console.log(newEngineer);
    })
    .catch((error) => {
      if (error.isTtyError) {
      } else {
      }
    });
}
function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the interns name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is the interns employee ID?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the interns email?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What school did the intern graduate from?",
      },
    ])
    .then((answers) => {
      const newIntern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      internArray.push(newIntern);
      console.log(newIntern);
    })
    .catch((error) => {
      if (error.isTtyError) {
      } else {
      }
    });
}

createManager();
createEngineer();
createIntern()
