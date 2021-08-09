import { parser } from "./parser";

import { firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";

// Создаем функцию runner, которая создает stack благодаря функции parser
// stack дальше используется как аргумент для firstPrioritiesCalc

export const runner = (line: string): number => {
    const stack = parser(line);

    if (stack === null) {
        throw new TypeError("Unexpected string");
    }

    const firstPrioritiesRes = firstPrioritiesCalc(stack);

    if (firstPrioritiesRes.length === 1) {
        return Number(firstPrioritiesRes[0]);
    }

    return secondPrioritiesCalc(firstPrioritiesRes);
};