import { jssvcheck, kindOf } from "./main";

// console.log([0,true,'',null,undefined].map(value=>kindOf(value)))

test("js primitive value type detect", () => {
  const exp = ["number", "boolean", "string", "null", "undefined"];

  [0, true, "", null, undefined]
    .map((value) => kindOf(value))
    .forEach((i, k) => {
      expect(i).toBe(exp[k]);
    });
});

test("js primitive value type check", () => {
  expect(jssvcheck("true", "string")).toBe(true);
  expect(jssvcheck(true, "boolean")).toBe(true);
  expect(jssvcheck(1, "number")).toBe(true);
  expect(jssvcheck(null, "null")).toBe(true);
  expect(jssvcheck(undefined, "undefined")).toBe(true);
});
