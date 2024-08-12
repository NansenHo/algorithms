import { describe, it, expect } from "vitest";

describe("LeetCode 28 - Easy - Find the Index of First Occurrence in a String", () => {
  it.each([
    { haystack: "sadbutsad", needle: "sad", expectedIndex: 0 },
    { haystack: "leetcode", needle: "leeto", expectedIndex: -1 },
  ])("", ({ haystack, needle, expectedIndex }) => {
    expect(strStr(haystack, needle)).toBe(expectedIndex);
  });
});

function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}
