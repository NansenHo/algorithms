import { describe, it, expect } from "vitest";

describe("LeetCode 383 - Easy - Ransom Note", () => {
  it.each([
    { ransomNote: "a", magazine: "b", output: false },
    { ransomNote: "aa", magazine: "ab", output: false },
    { ransomNote: "aa", magazine: "aab", output: true },
    { ransomNote: "hello", magazine: "hola", output: false },
    { ransomNote: "paper", magazine: "paperclip", output: true },
    { ransomNote: "urgent", magazine: "urgent message", output: true },
    { ransomNote: "longnote", magazine: "short", output: false },
    { ransomNote: "abc", magazine: "aabbcc", output: true },
    { ransomNote: "testcase", magazine: "caseoftest", output: true },
    { ransomNote: "leetcode", magazine: "leetcode.com", output: true },
  ])(
    "ransomNode: $ransomNote, magazine: $magazine -> $output",
    ({ ransomNote, magazine, output }) => {
      expect(canConstruct(ransomNote, magazine)).toBe(output);
    }
  );
});

function canConstruct(ransomNote: string, magazine: string): boolean {
  if (magazine.length < ransomNote.length) return false;

  const map = new Map<string, number>();

  for (let i = 0; i < magazine.length; i++) {
    const char = magazine[i];

    map.set(char, map.has(char) ? map.get(char)! + 1 : 1);
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];
    if (!map.has(char)) return false;

    map.set(char, map.get(char)! - 1);

    if (map.get(char)! < 0) return false;
  }

  return true;
}
