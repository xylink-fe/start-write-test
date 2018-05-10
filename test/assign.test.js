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

  const errorTarget = [1,2,4];

  const expected = {
    a: "3",
    b: 3,
    c: 89
  };

  const notObject = "Not a object";

  test("should return a object", () => {
    let result = assign(target,source);
    let expectResult = false;

    if(Object.prototype.toString.call(result) === "[object Object]") {
      expectResult = true;
    }

    expect(expectResult).toBe(true);
  });

  test("throw when target is not a object", () => {
    expect(assign(errorTarget, source)).toBe(notObject);
  });

  test("should return a object equal expected", () => {
    let result = assign(target, source);

    expect(result).toEqual(expected);
  });
});
