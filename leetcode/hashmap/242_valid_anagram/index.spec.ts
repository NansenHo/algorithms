import { describe, it, expect } from "vitest";

describe("LeetCode 242 - Easy - Valid Anagram", () => {
  it.each([
    { s: "anagram", t: "nagaram", output: true },
    { s: "rat", t: "car", output: false },
    { s: "", t: "", output: true },
    { s: "a", t: "a", output: true },
    { s: "ab", t: "ba", output: true },
    { s: "abc", t: "cab", output: true },
    { s: "listen", t: "silent", output: true },
    { s: "hello", t: "billion", output: false },
    { s: "eleven", t: "twelve", output: false },
    { s: "rat", t: "rats", output: false },
    { s: "aaa", t: "aaaa", output: false },
    { s: "aabbcc", t: "ccbbaa", output: true },
    {
      s: "abcdefghijklmnopqrstuvwxyz",
      t: "zyxwvutsrqponmlkjihgfedcba",
      output: true,
    },
    { s: "aabbcc", t: "aabbcd", output: false },
    { s: "ab", t: "aa", output: false },
    { s: "123abc", t: "abc123", output: true },
    { s: "1a1", t: "a11", output: true },
  ])("s: $s, t: $t -> $output", ({ s, t, output }) => {
    expect(isAnagram(s, t)).toBe(output);
  });
});

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const charCountMap = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    charCountMap.set(
      char,
      charCountMap.has(char) ? charCountMap.get(char)! + 1 : 1
    );
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];

    if (charCountMap.has(char)) {
      charCountMap.set(char, charCountMap.get(char)! - 1);

      if (charCountMap.get(char)! < 0) return false;
    } else {
      return false;
    }
  }

  return true;
}
