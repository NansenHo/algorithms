import { describe, it, expect } from "vitest";

describe("LeetCode 392 - Easy - Is Subsequence", () => {
  it.each([
    { s: "abc", t: "ahbgdc", output: true },
    { s: "acb", t: "ahbgdc", output: false },
    { s: "axc", t: "ahbgdc", output: false },
  ])("the subsequence of $t is $s", ({ s, t, output }) => {
    expect(isSubsequence(s, t)).toBe(output);
  });
});

function isSubsequence(s: string, t: string): boolean {
  let i = 0;
  for (let j = 0; j < t.length; j++) {
    if (t[j] === s[i]) {
      i++;
    }
  }

  return s.length === i;
}
