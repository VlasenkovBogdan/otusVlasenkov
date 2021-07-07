import { parser } from "./parser";

test.each([
    {expression: "3 + 2" , expected: [3, "+", 2]},
    {expression: "5 + 5 * 5" , expected: [5, "+", 5, "*", 5]},
    {expression: "1 + 2 * 3 - 4 / 5 + 6 - 8" , expected: [1, "+", 2, "*", 3, "-", 4, "/", 5, "+", 6, "-", 8]},
    {expression: "1 * 32 - 2 * 2" , expected: [1, "*", 32, "-", 2, "*", 2]},
])("Parser test", ({expression,  expected}) => {
    expect(parser(expression)).toStrictEqual(expected);
});