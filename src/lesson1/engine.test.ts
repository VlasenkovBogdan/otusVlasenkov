import { firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";

describe("Первый приоритет", () => {
    it("[6 / 2]", () => {
        expect(firstPrioritiesCalc([6, "/", 2])).toEqual([3]);
    })
})
describe("Второй приоритет", () => {
    it("[3 + 2]", () => {
        expect(secondPrioritiesCalc([3, "+", 2])).toEqual(5);
    })
})