import { describe, it, expect } from "vitest";

describe("LeetCode 125 - Easy - Valid Palindrome", () => {
  it.each([
    { s: "A man, a plan, a canal: Panama", output: true },
    { s: "race a car", output: false },
    { s: " ", output: true },
    { s: "0P", output: false },
    { s: "Live on evasions? No, I save no evil.", output: true },
    { s: "Egad! Loretta has Adams as mad as a hatter. Old age!", output: true },
  ])("the string $s is a palindrome -> $output", ({ s, output }) => {
    expect(isPalindrome(s)).toBe(output);
  });
});

function isPalindrome(s: string): boolean {
  const adjustedString = s.toLowerCase().replaceAll(/[^a-z0-9]/g, "");

  let i = 0,
    j = adjustedString.length - 1;
  while (i < j) {
    if (adjustedString[i] !== adjustedString[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}
