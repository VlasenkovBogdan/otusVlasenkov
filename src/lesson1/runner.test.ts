import { runner } from "./runner";

describe("Сложные выражения", () => {
    it("4 + 5 * 9", () => {
        expect(runner("4 + 5 * 9")).toEqual(49);
    });

    it("36 - 12 / 4", () => {
        expect(runner("36 - 12 / 4")).toEqual(33);
    });

    it("5 * 5 * 5", () => {
        expect(runner("5 * 5 * 5")).toEqual(125);
    });
});