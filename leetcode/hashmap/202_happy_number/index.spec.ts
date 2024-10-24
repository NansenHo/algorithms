import { describe, it, expect } from "vitest";

describe("LeetCode 202 - Easy - Happy Number", () => {
  it.each([
    { n: 19, output: true },
    { n: 2, output: false },
  ])("n($n) is happy number -> $output", ({ n, output }) => {
    expect(isHappy(n)).toBe(output);
  });
});

function isHappy(n: number): boolean {
  // 这里用了一个 Set 来存储所有的和，并通过 Set.has 来作为退出条件避免无限循环。
  const sums = new Set();

  while (n !== 1 && !sums.has(n)) {
    sums.add(n);
    n = calculateSum(n);
  }

  return n === 1;
}

function isHappy_recursion(n: number): boolean {
  const sum = calculateSum(n);

  return sum === 1 ? true : isHappy(sum);
}

function calculateSum(n: number): number {
  return n
    .toString()
    .split("")
    .reduce((acc, char) => acc + Number(char) ** 2, 0);

  // reduce 方法接收两个参数：一个回调函数和一个初始值（这里的初始值是 0）。
  // 回调函数接收两个参数：acc（累加器，累计结果的变量）和 char（当前处理的数组元素）。
  // 在每次迭代中，char 是数组中的一个字符，它被转换为数字 Number(char)，然后计算它的平方 Number(char) ** 2。
  // 这个计算得到的平方值加到 acc（累加器）上，acc 初始值为 0，它逐步增加到最后一个元素被处理完毕。
}

function calculateSum_for_loop(n: number): number {
  let sum = 0;
  const str = n.toString();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const num = Number(char);

    sum += num ** 2;
  }

  return sum;
}
