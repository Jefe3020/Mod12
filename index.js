const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

let allEmployees = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

function getManager() {
  // inquirer.prompt

  //.then when you have the answers
  // let manager = new Manager(name, id, email, officeNumber)
  allEmployees.push(manager);
}
