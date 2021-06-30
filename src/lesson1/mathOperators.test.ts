import { mul, div, sum, minus } from "./mathOperators";

describe("mathOperators test cases", () => {
    it("mul 3 * 4 to equal 12", () => {
        expect(mul(3, 4)).toBe(12);
    });

    it("div 8 / 2 to equal 4", () => {
        expect(div(8, 2)).toBe(4);
    });

    it("add 3 + 2 to equal 5", () => {
        expect(sum(3, 2)).toBe(5);
    });

    it("minus 6 - 5 to equal 1", () => {
        expect(minus(6, 5)).toBe(1);
    });
});