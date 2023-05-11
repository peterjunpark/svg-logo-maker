const { Circle, Triangle, Square } = require("./shapes.js");

describe("Create a Circle/Triangle/Square object with given text, textColor, and bgColor.", () => {
  const testParams = {text: "5vG", textColor: "#fff", bgColor: "green"}

  it("Should print a Circle SVG element with the correct text and fill colors.", () => {
    const circle = new Circle(testParams);
    expect(circle.render()).toEqual(
      '<svg version="1.1" width="300" height="200"><circle cx="150" cy="100" r="100" fill="green" /><text x="150" y="125" font-size="80" text-anchor="middle" fill="#fff">5vG</text></svg>'
    );
  });

  it("Should print a Triangle SVG element with the correct text and fill colors.", () => {
    const triangle = new Triangle(testParams);
    expect(triangle.render()).toEqual(
      '<svg version="1.1" width="300" height="200"><polygon points="50,200 250,200 150,0" fill="green" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="#fff">5vG</text></svg>'
    );
  });

  it("Should print a Square SVG element with the correct text and fill colors.", () => {
    const square = new Square(testParams);
    expect(square.render()).toEqual(
      '<svg version="1.1" width="300" height="200"><rect x="50" y="0" width="200" height="200" fill="green" /><text x="150" y="125" font-size="80" text-anchor="middle" fill="#fff">5vG</text></svg>'
    );
  });
});
