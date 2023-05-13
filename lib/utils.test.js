const { isValidColor } = require("./utils.js");

describe("Validate user inputs for textColor and bgColor.", () => {
  const goodInputs = ["hotpink", "#fff", "#3a8dde"];
  const badInputs = ["hello", "#ffg", "#ffff", "#fffffg"];

  it("Should return true for color keywords and 3-digit and 6-digit hex codes.", () => {
    goodInputs.forEach(input => {
      expect(isValidColor(input)).toEqual(true);
    })
  });
  it("Should return false for invalid inputs.", () => {
    badInputs.forEach(input => {
      expect(isValidColor(input)).toEqual(false);
    })
  })
});
