import { describe, it, expect } from "vitest";

function reverse(arr: any[]): any[] {
  if (arr.length <= 0) return [];

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}

describe("LeetCode 231 - Power of Two", () => {
  it.each([
    { arr: [16, 11, 12], expected: [12, 11, 16] },
    {
      arr: [15, "abc", true, undefined, null],
      expected: [null, undefined, true, "abc", 15],
    },
    { arr: [], expected: [] },
    { arr: [{ h: "1" }, { p: "2" }], expected: [{ p: "2" }, { h: "1" }] },
  ])("$arr => $expected", ({ arr, expected }) => {
    expect(reverse(arr)).toEqual(expected);
  });
});
