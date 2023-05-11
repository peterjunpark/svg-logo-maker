const inquirer = require("inquirer");
const maxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
const {
  makeLogo,
  writeLogo,
  isValidColor,
} = require("./lib/utils.js");

inquirer.registerPrompt("maxlength-input", maxLengthInputPrompt);
console.log(
  "\x1b[1m\x1b[93m~ SVG Logo Maker ~\n" +
    "\x1b[33mComplete the following prompts to generate a logo.\n" +
    "Color inputs can be either hex codes or recognized SVG color keywords."
);
inquirer
  .prompt([
    {
      name: "shape",
      message: "Choose the shape of your logo",
      type: "list",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      name: "text",
      message: "Enter text for your logo",
      type: "maxlength-input",
      maxLength: 3,
    },
    {
      name: "textColor",
      message: "Enter your logo's text color",
      type: "input",
      validate: (answer) => {
        if (isValidColor(answer)) return true;
        return "Unrecognized color. Try again.";
      },
    },
    {
      name: "bgColor",
      message: "Enter your logo's background color",
      type: "input",
      validate: (answer) => {
        if (isValidColor(answer)) return true;
        return "Unrecognized color. Try again.";
      },
    },
  ])
  .then((answers) => {
    const logo = makeLogo(answers).render();
    writeLogo(logo);
  });
