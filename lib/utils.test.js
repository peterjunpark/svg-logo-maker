const { isColorHex, isColorKeyword } = require("./utils.js");

describe("Validate user inputs for textColor and bgColor.", () => {
  const tests = {
    keyword: "hotpink",
    badKeyword: "hello",
    hex3: "#fff",
    hex6: "#3a8dde",
  };

  it("isColorHex should return true for 3-digit and 6-digit hex codes.", () => {
    expect(isColorHex(tests.hex3)).toBe(true);
    expect(isColorHex(tests.hex6)).toBe(true);
    expect(isColorHex(tests.keyword)).toBe(false);
  });

  it("isColorKeyword return true for only recognized color keywords.", () => {
    expect(isColorKeyword(tests.keyword)).toBe(true);
    expect(isColorKeyword(tests.hex6)).toBe(false);
    expect(isColorKeyword(tests.badKeyword)).toBe(false);
  });
});
