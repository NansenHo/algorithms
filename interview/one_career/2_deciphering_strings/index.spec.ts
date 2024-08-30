import { describe, it, expect } from "vitest";

describe("Interview - One Career - Deciphering Strings", () => {
  it.each([
    { s: "bd", k: 2, t: "ac" },
    { s: "gx", k: 4, t: "cx" },
    { s: "aaaaaaaaaaaaaaaaaaaaaabd", k: 2, t: "aaaaaaaaaaaaaaaaaaaaaaac" },
  ])(
    "the smallest string of $s is $t after shifting $k step",
    ({ s, k, t }) => {
      expect(getSmallestString(s, k)).toBe(t);
    }
  );
});

function getSmallestString(s: string, k: number): string {
  let smallestString = "";

  for (const char of s) {
    let bestChar = "";

    // the char code of 'a': 97
    // the char code of 'z': 122
    for (let i = 97; i <= 122; i++) {
      const distance = getDistance(i, char.charCodeAt(0));

      if (distance <= k) {
        bestChar = String.fromCharCode(char.charCodeAt(0) - distance);
        k -= distance;

        break;
      }
    }

    smallestString += bestChar;
  }

  return smallestString;
}

function getDistance(a: number, b: number): number {
  let distance = Math.abs(b - a);

  // 字母表是循环排列的，z 和 a 之间的最短距离是 1，而不是 25
  distance = Math.min(distance, 26 - distance);

  return distance;
}
