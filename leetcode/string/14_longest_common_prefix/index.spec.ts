import { describe, it, expect } from "vitest";

describe("LeetCode 14 - Easy - Longest Common Prefix", () => {
  it.each([
    { strs: ["flower", "flow", "flight"], expectedPrefix: "fl" },
    { strs: ["dog", "racecar", "car"], expectedPrefix: "" },
    { strs: ["aaa", "aa", "aaa"], expectedPrefix: "aa" },
  ])(
    "the longest common prefix of $strs is $expectedPrefix",
    ({ strs, expectedPrefix }) => {
      expect(longestCommonPrefix(strs)).toBe(expectedPrefix);
      expect(longestCommonPrefix2(strs)).toBe(expectedPrefix);
    }
  );
});

function longestCommonPrefix2(strs: string[]): string {
  // 时间复杂度：O(n + m)
  if (strs.length === 0) return "";

  let commonPrefix = strs[0];

  for (let i = 0; i < strs.length; i++) {
    while (!strs[i].startsWith(commonPrefix)) {
      commonPrefix = commonPrefix.slice(0, -1);
      if (commonPrefix === "") return "";
    }
  }

  return commonPrefix;
}

function longestCommonPrefix(strs: string[]): string {
  // 时间复杂度 O(n log n)
  strs.sort();

  let commonPrefix = "";
  const theFirstStr = strs[0];

  for (let i = 0; i < theFirstStr.length; i++) {
    if (theFirstStr[i] === strs[strs.length - 1][i]) {
      commonPrefix += theFirstStr[i];
    } else {
      break;
    }
  }

  return commonPrefix;
}
