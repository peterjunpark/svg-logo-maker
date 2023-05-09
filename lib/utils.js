const { Circle, Triangle, Square } = require("./shapes.js");

function createLogo({ shape, text, textColor, bgColor }) {
  switch (shape) {
    case "Circle":
      return new Circle(text, textColor, bgColor);
    case "Triangle":
      return new Triangle(text, textColor, bgColor);
    case "Square":
      return new Square(text, textColor, bgColor);
  }
}

function writeToFile(logo) {

}

module.exports = {
  createLogo,
  writeToFile
};
