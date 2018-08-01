const assign = require("../src/assign");

describe("Object.assign", () => {
  let target = {
    a: "1",
    b: 3
  };

  const source = {
    a: "3",
    c: 89
  };

  const expected = {
    a: "3",
    b: 3,
    c: 89
  };

  test("should return a object", () => {

  });

  test("throw when target is not a object", () => {
  });

  test("should return a object equal expected", () => {

  });
});
