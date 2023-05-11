const { isValidColor } = require("./utils.js");

describe("Validate user inputs for textColor and bgColor.", () => {
  const goodInputs = {
    keyword: "hotpink",
    hex3: "#fff",
    hex6: "#3a8dde",
  };

  const badInputs = {
    keyword: "hello",
    hex3: "#ffg",
    hex4: "#ffff",
  }

  it("Should return true for color keywords and 3-digit and 6-digit hex codes.", () => {
    expect(isValidColor(goodInputs.hex3)).toEqual(true);
    expect(isValidColor(goodInputs.hex6)).toEqual(true);
    expect(isValidColor(goodInputs.keyword)).toEqual(true);
    expect(isValidColor(badInputs.hex3)).toEqual(false);
    expect(isValidColor(badInputs.hex4)).toEqual(false);
    expect(isValidColor(badInputs.keyword)).toEqual(false);
  });
});
