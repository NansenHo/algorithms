import { describe, expect, it } from "vitest";

describe("LeetCode 1071 - Greatest Common Divisor of Strings", () => {
  it.each([
    { str1: "ABCABC", str2: "ABC", expectedOutput: "ABC" },
    { str1: "ABABAB", str2: "ABAB", expectedOutput: "AB" },
    { str1: "LEET", str2: "CODE", expectedOutput: "" },
    { str1: "ABCABC", str2: "ABD", expectedOutput: "" },
    { str1: "ABCDABCD#", str2: "ABC", expectedOutput: "" },
    { str1: "AAAA", str2: "A", expectedOutput: "A" },
  ])(
    "str1: $str1, str2: $str2 => $expectedOutput",
    ({ str1, str2, expectedOutput }) => {
      const output = gcdOfStrings(str1, str2);
      expect(output).toBe(expectedOutput);
    }
  );
});

function gcdOfStrings(str1: string, str2: string): string {
  // 这个筛选思路很重要
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  const g = gcd(str1.length, str2.length);

  return str1.slice(0, g);
}

// 要明白如何求两数的最大公约数
function gcd(a: number, b: number): number {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

// gcd(6, 4)
// gcd(4, 2)
// gcd(2, 0)

// gcd(4, 6)
// gcd(6, 4)
// gcd(4, 2)
// gcd(2, 0)
