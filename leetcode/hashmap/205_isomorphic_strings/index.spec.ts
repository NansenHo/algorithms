import { describe, it, expect } from "vitest";

describe("LeetCode 205 - Easy - Isomorphic Strings", () => {
  it.each([
    { s: "egg", t: "add", output: true },
    { s: "foo", t: "bar", output: false },
    { s: "paper", t: "title", output: true },
    { s: "abc", t: "def", output: true },
    { s: "ab", t: "aa", output: false },
    { s: "13", t: "42", output: true },
    { s: "badc", t: "baba", output: false },
    { s: "xyzzy", t: "abbaa", output: false },
    { s: "aabbcc", t: "xxyyzz", output: true },
    { s: "123", t: "321", output: true },
  ])("s: $s, t: $t -> $output", ({ s, t, output }) => {
    expect(isIsomorphic(s, t)).toBe(output);
  });
});

function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const sToT: Map<string, string> = new Map();
  const tToS: Map<string, string> = new Map();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (sToT.has(sChar)) {
      if (sToT.get(sChar) !== tChar) {
        return false;
      }
    } else {
      sToT.set(sChar, tChar);
    }

    if (tToS.has(tChar)) {
      if (tToS.get(tChar) !== sChar) {
        return false;
      }
    } else {
      tToS.set(tChar, sChar);
    }
  }

  return true;
}
