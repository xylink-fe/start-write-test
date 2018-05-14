const assign = require("../src/assign");

describe("Object.assign", () => {
  let target = {
    a: "1",
    b: 3
  };

  const source = [
    {
      a: "3",
      c: 89
    },
    {
      a: "5",
      b: 7
    }
  ];

  const expected = {
    a: "5",
    b: 7,
    c: 89
  };

  test("should return a object", () => {
    expect(assign(target, source)).toBeInstanceOf(Object);
  });

  test("throw when target is not a object", () => {
    expect(assign).toThrow();
  });

  test("should return a object equal expected", () => {
    expect(assign(target, source)).toEqual(expected);
  });
});
