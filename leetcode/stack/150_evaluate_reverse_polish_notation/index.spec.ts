import { describe, it, expect } from "vitest";

describe("LeetCode 150 - Medium - Evaluate Reverse Polish Notation", () => {
  // prettier-ignore
  it.each([
      {tokens: ["2", "1", "+", "3", "*"], output: 9},
      {tokens: ["4", "13", "5", "/", "+"], output: 6},
      {tokens: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"], output: 22},
      {tokens: ["3", "4", "+", "2", "*", "7", "/"], output: 2},
      {tokens: ["5", "1", "2", "+", "4", "*", "+", "3", "-"], output: 14},
      {tokens: ["3", "-4", "*"], output: -12}, // 测试负数乘法
      {tokens: ["10", "6", "-"], output: 4}, // 测试简单减法
      {tokens: ["3", "4", "/", "2", "*"], output: 0}, // 测试除法和乘法
      {tokens: ["100", "10", "/", "5", "+"], output: 15}, // 测试较大数字的除法
      {tokens: ["3", "4", "+", "5", "6", "*", "+"], output: 37}, // 多层运算
      {tokens: ["10", "2", "/", "3", "-"], output: 2}, // 整数除法截断
      {tokens: ["7", "-2", "/"], output: -3}, // 测试负数的整数除法（截断向零）
      {tokens: ["15", "-7", "+"], output: 8}, // 加上负数
      {tokens: ["15", "7", "-", "2", "/"], output: 4} // 复杂组合
  ])('$tokens -> $output', ({tokens, output}) => { 
      expect(evalRPN(tokens)).toBe(output)
   })
});

function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  const operatorRegex = /^[+\-*/]$/;

  for (const token of tokens) {
    if (operatorRegex.test(token)) {
      const right = stack.pop();
      const left = stack.pop();

      let result: number;
      switch (token) {
        case "+":
          result = left! + right!;
          break;
        case "-":
          result = left! - right!;
          break;
        case "*":
          result = left! * right!;
          break;
        case "/":
          result = Math.trunc(left! / right!);
          break;
        default:
          throw new Error(`Unexpected operator ${token}`);
      }

      stack.push(result);
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
}
