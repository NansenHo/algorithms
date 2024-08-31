import { describe, it, expect } from "vitest";

describe("LeetCode 3 - Medium - Length of Longest Substring", () => {
  it.each([
    { input: "abcabcbb", output: 3 },
    { input: "bbbbb", output: 1 },
    { input: "pwwkew", output: 3 },
    { input: " ", output: 1 },
    { input: "au", output: 2 },
    { input: "dvdf", output: 3 },
  ])("$input => $output", ({ input, output }) => {
    expect(lengthOfLongestSubstring(input)).toBe(output);
  });
});

function lengthOfLongestSubstring(s: string): number {
  const chars: string[] = [];
  let longest = 0;

  for (let char of s) {
    const possibleIndex = chars.indexOf(char);

    if (possibleIndex !== -1) {
      chars.splice(0, possibleIndex + 1);
    }

    chars.push(char);

    longest = Math.max(chars.length, longest);
  }

  return longest;
}
