import { describe, it, expect } from "vitest";

describe("SIVA - Medium - 文字列比較", () => {
  it.each([
    { x: "xyz", y: "xyz", output: true },
    { x: "xxxyyy", y: "yyyxxx", output: true },
    { x: "xxyy", y: "xyxy", output: false },
    { x: "xxy", y: "xyxy", output: false },
    { x: "xxy", y: "xyy", output: false },
    { x: "xxyz", y: "xyxx", output: false },
    { x: "xxy", y: "xyxx", output: false },
  ])("$x & $y => $output", ({ x, y, output }) => {
    expect(isTransformableString(x, y)).toBe(output);
  });
});

function isTransformableString(x: string, y: string): boolean {
  if (x === y) return true;
  if (x.length !== y.length) return false;

  const len = x.length;
  if (len % 2 !== 0) return false;

  const mid = Math.floor(len / 2);
  const x1 = x.slice(0, mid);
  const x2 = x.slice(mid);
  const y1 = y.slice(0, mid);
  const y2 = y.slice(mid);

  if (isTransformableString(x1, y1) && isTransformableString(x2, y2)) {
    return true;
  }

  if (isTransformableString(x1, y2) && isTransformableString(x2, y1)) {
    return true;
  }

  return false;
}
