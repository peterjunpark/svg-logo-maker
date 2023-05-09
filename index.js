const inquirer = require("inquirer");
const { createLogo } = require("./lib/utils.js");

function init() {
  inquirer
    .prompt([
      {
        name: "shape",
        message: "Choose the shape of your logo",
        type: "list",
        choices: ["Circle", "Triangle", "Square"],
        suffix: " :",
      },
      {
        name: "text",
        message: "Enter text for your logo",
        type: "input",
        suffix: " (up to 3 characters) :",
      },
      {
        name: "textColor",
        message:
          "Enter your logo's text color",
        type: "input",
        suffix: " (keyword and hexadecimal values allowed) :",
      },
      {
        name: "bgColor",
        message:
          "Enter your logo's background color",
        type: "input",
        suffix: " (keyword and hexadecimal values allowed) :",
      },
    ])
    .then((answers) => {
      const logo = createLogo(answers);
      console.log(logo)
    });
}
init();
