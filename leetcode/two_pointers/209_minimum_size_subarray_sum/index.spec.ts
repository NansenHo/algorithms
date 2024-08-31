import { describe, it, expect } from "vitest";

describe("LeetCode 209 - Medium - Minimum Size Subarra Sum", () => {
  it.each([
    { nums: [2, 3, 1, 2, 4, 3], target: 7, expectedOutput: 2 },
    {
      nums: [1, 1, 1, 1, 1, 1, 1, 1],
      target: 11,
      expectedOutput: 0,
    },
  ])("", ({ nums, target, expectedOutput }) => {
    expect(minSubArrayLen(target, nums)).toBe(expectedOutput);
  });
});

function minSubArrayLen(target: number, nums: number[]): number {
  let i = 0;
  let minLength = nums.length;
  let currentSum = 0;

  for (let j = 0; j < nums.length; j++) {
    currentSum += nums[j];

    while (currentSum >= target) {
      const currentLength = j - i + 1;
      minLength = Math.min(minLength, currentLength);
      currentSum -= nums[i];
      i++;
    }
  }

  return i === 0 ? 0 : minLength;
}
