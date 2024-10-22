import { describe, it, expect } from "vitest";

describe("LeetCode 290 - Easy - Word Pattern", () => {
  it.each([
    { pattern: "abba", s: "dog cat cat dog", output: true },
    { pattern: "abba", s: "dog cat cat fish", output: false },
    { pattern: "aaaa", s: "dog cat cat dog", output: false },
    { pattern: "abba", s: "dog dog dog dog", output: false },
  ])("pattern: $pattern, s: $s -> $output", ({ pattern, s, output }) => {
    expect(wordPattern(pattern, s)).toBe(output);
  });
});

function wordPattern(pattern: string, s: string): boolean {
  const splitS = s.split(" ");

  if (splitS.length !== pattern.length) return false;

  const cToW = new Map<string, string>();
  const wToC = new Map<string, string>();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = splitS[i];

    if (cToW.has(char)) {
      if (cToW.get(char) !== word) {
        return false;
      }
    } else {
      cToW.set(char, word);
    }

    if (wToC.has(word)) {
      if (wToC.get(word) !== char) {
        return false;
      }
    } else {
      wToC.set(word, char);
    }
  }

  return true;
}
