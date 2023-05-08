const inquirer = require("inquirer");
const { Shape, Circle, Triangle, Square } = require("./lib/shapes.js");

function init() {
  inquirer
    .prompt([
      {
        name: "text",
        message: "Enter text for your logo",
        type: "input",
        suffix: " (up to 3 characters) :",
        transformer: answer => answer.toUpperCase().slice(0,3),
        filter: answer => answer.slice(0,3),
      },
      {
        name: "shape",
        message: "Choose the shape of your logo",
        type: "list",
        choices: ["Circle", "Triangle", "Square"],
        suffix: " :",
      },
      {
        name: "colour",
        message:
          "Enter your logo's colour",
        type: "input",
        suffix: " (keyword and hexadecimal values allowed) :",
      },
    ])
    .then((answers) => {
      console.log(answers);
    });
}
init();
