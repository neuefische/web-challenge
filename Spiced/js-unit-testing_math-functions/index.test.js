import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

test("add() returns 5 if called with add(2,3)", () => {
  expect(add(2, 3)).toBe(5);
});

test("add() returns a negative value if the greater argument is negative", () => {
  expect(add(2, -5)).toBeLessThan(0);
});

test("add() returns a value close to 0.3 if calld with add(0.1, 0.2)", () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("subtract() returns 5 if called with subtract(15,5)", () => {
  expect(subtract(15, 5)).toBe(10);
});

test("subtract() returns a negative value if second argument is greater than the first one", () => {
  expect(subtract(5, 15)).toBeLessThan(0);
});

test("multiply() returns 8 if called with multiply(2,4)", () => {
  expect(multiply(2, 4)).toBe(8);
});

test("multiply() returns a negative value if onls the first argument ist negative", () => {
  expect(multiply(-2, 4)).toBeLessThan(0);
});

test("multiply() returns a negative value if only the second argument is negative", () => {
  expect(multiply(-4, 2)).toBeLessThan(0);
});

test("multiply() returns a positive value if called with two negative arguments", () => {
  expect(multiply(-2, -4)).toBe(8);
});

test("divide() returns 3 if called with divide(9,3)", () => {
  expect(divide(9, 3)).toBe(3);
});

test("divide() results 'You should not do this!' if called with 0 as second argument", () => {
  expect(divide(9, 0)).toBe("You should not do this!");
});
