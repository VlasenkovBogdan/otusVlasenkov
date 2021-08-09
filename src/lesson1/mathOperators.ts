export type MathOperationType = (first: number, second: number) => number;

// записываем функции, которые будут в нашем калькуляторе
export const sum: MathOperationType = (first, second) => {
  return first + second;
};

export const minus: MathOperationType = (first, second) => {
  return first - second;
};

export const mul: MathOperationType = (first, second) => {
  return first * second;
};

export const div: MathOperationType = (first, second) => {
  return first / second;
};

export const mathPriorities: number[] = [1, 2];

const [FIRST, SECOND] = mathPriorities;

// Экспортируем математические операторы

export const mathOperators: { [key: string]: MathOperationType } = {
  "*": mul,
  "/": div,
  "+": sum,
  "-": minus,
};

// Пишем приоритет для операций

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "/": FIRST,
  "+": SECOND,
  "-": SECOND,
};
