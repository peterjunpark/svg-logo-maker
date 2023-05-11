const { Circle, Triangle, Square } = require("./shapes.js");
const { writeFile } = require("fs");
const svgColors = require("./svgColors.json");

function makeLogo({ shape, ...rest }) {
  console.log(rest);
  return shape === "Circle"
    ? new Circle(rest)
    : shape === "Triangle"
    ? new Triangle(rest)
    : new Square(rest);
}

function writeLogo(logo) {
  writeFile("./output/logo.svg", logo, (err) => {
    err
      ? console.error(err)
      : console.log("Success! Generated logo.svg in output.");
  });
}

// Input validations
function isColorHex(input) {
  const hex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return hex.test(input);
}

function isColorKeyword(input) {
  return svgColors.includes(input.toLowerCase());
}

module.exports = {
  makeLogo,
  writeLogo,
  isColorHex,
  isColorKeyword,
};
