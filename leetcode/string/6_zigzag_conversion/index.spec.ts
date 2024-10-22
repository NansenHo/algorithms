import { describe, it, expect } from "vitest";

describe("LeetCode 6 - Medium - Zigzag Conversion", () => {
  it.each([
    { s: "PAYPALISHIRING", numRows: 3, output: "PAHNAPLSIIGYIR" },
    { s: "PAYPALISHIRING", numRows: 4, output: "PINALSIGYAHRPI" },
    { s: "A", numRows: 1, output: "A" },
  ])("", ({ s, numRows, output }) => {
    expect(convert(s, numRows)).toBe(output);
  });
});

function convert(s: string, numRows: number): string {
  const rows: string[] = [];
  const cycleLen = 2 * numRows - 2;

  for (let i = 0; i < s.length; i++) {
    const pos = i % cycleLen || 0;
    const row = pos < numRows ? pos : cycleLen - pos;

    if (rows[pos] === undefined) rows[pos] = "";

    rows[row] += s[i];
  }

  return rows.join("");
}
