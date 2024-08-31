import { describe, it, expect } from "vitest";

// 位运算
function isPowerOfTwo(num: number): boolean {
  return num > 0 && (num & (num - 1)) === 0;
}

// 以 2 为底的对数
function isPowerOfTwo2(num: number): boolean {
  return Math.log2(num) % 1 === 0;
}

describe("LeetCode 231 - Power of Two", () => {
  it.each([
    { num: 16, expected: true },
    { num: 15, expected: false },
    { num: 5, expected: false },
  ])("$num is power of two => $expected", ({ num, expected }) => {
    expect(isPowerOfTwo(num)).toBe(expected);
    expect(isPowerOfTwo2(num)).toBe(expected);
  });
});
