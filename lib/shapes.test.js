const { Circle, Triangle, Square } = require("./shapes.js");

describe("Instantiate Circle", () => {
  it("Should create a Circle containing an SVG element", () => {
    const circle = new Circle("SVG", "white", "green");
    expect(circle.render()).toBeDefined();
    expect(circle.render()).toBe(
      '<svg version="1.1" width="300" height="200"><circle cx="150" cy="100" r="100" fill="green" /><text x="150" y="125" font-size="80" text-anchor="middle" fill="white">SVG</text></svg>'
    );
  });
});
describe("Instantiate Triangle", () => {
  it("Should create a Triangle containing an SVG element", () => {
    const triangle = new Triangle("SVG", "white", "green");
    expect(triangle.render()).toBeDefined();
    expect(triangle.render()).toBe(
      '<svg version="1.1" width="300" height="200"><polygon points="50,200 250,200 150,0" style="green" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>'
    );
  });
});
describe("Instantiate Square", () => {
  it("Should create a Square containing an SVG element", () => {
    const square = new Square("SVG", "white", "green");
    expect(square.render()).toBeDefined();
    expect(square.render()).toBe(
      '<svg version="1.1" width="300" height="200"><rect x="50" y="0" width="200" height="200" fill="green" /><text x="150" y="125" font-size="80" text-anchor="middle" fill="white">SVG</text></svg>'
    );
  });
});
