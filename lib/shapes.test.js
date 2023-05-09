const { Circle, Triangle, Square } = require("./shapes.js");

describe("Instantiate Circle", () => {
  it("Should create a Circle containing an SVG element", () => {
    const circle = new Circle("SVG", "white", "green");
    expect(circle.render()).toBeDefined();
  });
});
describe("Instantiate Triangle", () => {
    it("Should create a Triangle containing an SVG element", () => {
      const triangle = new Triangle("SVG", "white", "green");
      expect(triangle.render()).toBeDefined();
    });
  });
  describe("Instantiate Square", () => {
    it("Should create a Square containing an SVG element", () => {
      const square = new Square("SVG", "white", "green");
      expect(square.render()).toBeDefined();
    });
  });
