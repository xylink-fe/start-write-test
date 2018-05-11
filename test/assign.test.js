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
    expect(Object.prototype.toString.call(assign(target, source))).toBe('[object Object]')
  });

  test("throw when target is not a object", () => {
    expect(assign([],[])).toBe('Soucres not na Object or An empty object')
  });

  test("should return a object equal expected", () => {
    expect(assign(target, source)).toEqual(expected)
  });
});
