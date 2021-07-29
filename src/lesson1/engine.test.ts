import { firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";

describe("Первый приоритет", () => {
    it("[3 + 6 / 2]", () => {
        expect(firstPrioritiesCalc([6, "/", 2, "+", 3])).toEqual([3, "+", 3]);
    })
})
describe("Второй приоритет", () => {
    it("[3 + 6 + 3]", () => {
        expect(secondPrioritiesCalc([3, "+", 6, "+", 3])).toEqual(12);
    })
})