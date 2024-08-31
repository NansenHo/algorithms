import { describe, it, expect } from "vitest";

describe("LeetCode 151 - Reverse Words in a String", () => {
  it.each([
    { input: "the sky is blue", expected: "blue is sky the" },
    { input: "a good   example", expected: "example good a" },
    { input: "   hello world   ", expected: "world hello" },
  ])("$input => $expected", ({ input, expected }) => {
    expect(reverseWords(input)).toBe(expected);
  });
});

function reverseWords(s: string): string {
  if (s.length <= 1) return s;

  const words = s.trim().split(" ");
  const nonEmptyWords = words.filter((s) => s !== "");
  const reverseWords = nonEmptyWords.reverse();

  return reverseWords.join(" ");
}
