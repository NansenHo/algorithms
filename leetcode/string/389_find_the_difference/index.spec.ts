import { describe, it, expect } from "vitest";

describe("LeetCode 389 - Easy - Find the Difference", () => {
  it.each([
    { s: "abcd", t: "abcde", output: "e" },
    { s: "", t: "y", output: "y" },
  ])("the difference between $s and $t is $output", ({ s, t, output }) => {
    expect(findTheDifference(s, t)).toBe(output);
  });
});

function findTheDifference(s: string, t: string): string {
  const adjustedS = s.split("").sort((a, b) => a.localeCompare(b));
  const adjustedT = t.split("").sort((a, b) => a.localeCompare(b));

  let i = 0;
  while (i < adjustedT.length) {
    if (adjustedS[i] !== adjustedT[i]) {
      return adjustedT[i];
    }
    i++;
  }

  return adjustedT[adjustedT.length - 1];
}
