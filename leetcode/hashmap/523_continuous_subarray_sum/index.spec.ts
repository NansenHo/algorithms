import { describe, it, expect } from "vitest";

function checkSubarraySum(nums: number[], k: number): boolean {
  // prefix sum
  const remainderMap = new Map<number, number>();
  remainderMap.set(0, -1);

  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];

    const remainder = currentSum % k;

    if (remainderMap.has(remainder)) {
      if (i - remainderMap.get(remainder)! >= 2) {
        return true;
      }
    } else {
      remainderMap.set(remainder, i);
    }
  }

  return false;
}

describe("LeetCode 523 - Medium - Continuous Subarray Sum", () => {
  it.each([
    { nums: [23, 2, 4, 6, 7], k: 6, expectedOutput: true },
    { nums: [23, 2, 6, 4, 7], k: 6, expectedOutput: true },
    { nums: [23, 2, 6, 4, 7], k: 13, expectedOutput: false },
  ])("", ({ nums, k, expectedOutput }) => {
    expect(checkSubarraySum(nums, k)).toBe(expectedOutput);
  });
});
