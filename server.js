// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [];
function promptUser() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of your project",
        name: "title",
      },
      {
        type: "input",
        message: "Please enter a description about your project.",
        name: "description",
      },
      {
        type: "input",
        message:
          "What are the installation instructions for this project. Write NONE if no instructions",
        name: "installation",
      },
      {
        type: "input",
        message: "What is the purpose of your application?",
        name: "usage",
      },
      {
        type: "input",
        message: "Who contributed on this project?",
        name: "contribution",
      },
      {
        type: "checkbox",
        message: "Please select a license.",
        choices: ["Apache", "MIT", "ISC", "GNU GPLv3", "None"],
        name: "license",
      },
      {
        type: "input",
        message: "Anyone acredited on this work?",
        name: "credit",
      },
      {
        type: "input",
        message: "What is your Github username",
        name: "username",
      },
    ])
    .then(function (userAnswers) {
      const fileData = generateMarkdown(userAnswers);
      writeToFile("README.md", fileData);
    });
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const fileLoc = path.join(__dirname, fileName);
  return fs.writeFile(fileLoc, data, function (err) {
    if (err) throw err;
    console.log("File written");
  });
}

// TODO: Create a function to initialize app
function init() {
  promptUser();
}

// Function call to initialize app
init();
