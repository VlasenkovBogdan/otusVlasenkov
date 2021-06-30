import { parser } from "./parser";


describe("Parser test", () => {
    it("3 + 2", () => {
        expect(parser("3 + 2")).toEqual([3, "+", 2]);
    });
    it("5 + 5 * 5", () => {
        expect(parser("5 + 5 * 5")).toEqual([5, "+", 5, "*", 5]);
    });
    it("1 + 2 * 3 - 4 / 5 + 6 - 8", () => {
        expect(parser("1 + 2 * 3 - 4 / 5 + 6 - 8")).toEqual([1, "+", 2, "*", 3, "-", 4, "/", 5, "+", 6, "-", 8]);
    });
    it("1 * 32 - 2 * 2", () => {
        expect(parser("1 * 32 - 2 * 2")).toEqual([1, "*", 32, "-", 2, "*", 2]);
    });
})