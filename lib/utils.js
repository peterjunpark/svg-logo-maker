const { Circle, Triangle, Square } = require("./shapes.js");
const { writeFile } = require("fs");
const svgColors = require("./svgColors.json");

function makeLogo({ shape, ...rest }) {
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

function isValidColor(input) {
  const hex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

  // Color is valid hex code || Color is recognized color keyword
  return hex.test(input) || svgColors.includes(input.toLowerCase());
}

module.exports = {
  makeLogo,
  writeLogo,
  isValidColor,
};
