const inquirer = require("inquirer");
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt")
const { createLogo, writeToFile } = require("./lib/utils.js");

function init() {
  inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
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
        type: "maxlength-input",
        maxLength: 3,
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
