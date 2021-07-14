import { runner } from "./runner";

test.each([
  { expression: "4 + 5 * 9", expected: 49 },
  { expression: "36 - 12 / 4", expected: 33 },
  { expression: "5 * 5 * 5", expected: 125 },
  { expression: "1 + 3 + 7 * 5", expected: 39 },
  { expression: "81 / 9 * 9", expected: 81 },
  { expression: "0 * 2 * 7", expected: 0 },
])("runner test", ({ expression, expected }) => {
  expect(runner(expression)).toStrictEqual(expected);
});
