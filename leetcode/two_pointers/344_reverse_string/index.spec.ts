import { describe, it, expect } from "vitest";

describe("LeetCode 344 - Easy - Reverse String", () => {
  it.each([
    { s: ["h", "e", "l", "l", "o"], reversedS: ["o", "l", "l", "e", "h"] },
    {
      s: ["H", "a", "n", "n", "a", "h"],
      reversedS: ["h", "a", "n", "n", "a", "H"],
    },
  ])("$s => $reversedS", ({ s, reversedS }) => {
    reverseString(s);
    expect(s).toEqual(reversedS);
  });
});

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];

    left++;
    right--;
  }
}
