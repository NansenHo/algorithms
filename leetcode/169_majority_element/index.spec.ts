import { describe, it, expect } from "vitest";

describe("LeetCode 169 - Easy - Majority Element", () => {
  it.each([
    { nums: [3, 2, 3], expectedElement: 3 },
    {
      nums: [2, 2, 1, 1, 1, 2, 2],
      expectedElement: 2,
    },
  ])(
    "the majority element of $nums is $expectedElement",
    ({ nums, expectedElement }) => {
      expect(majorityElement(nums)).toBe(expectedElement);
    }
  );
});

function majorityElement(nums: number[]): number {
  // 时间复杂度：O(n log n)
  if (nums.length <= 2) {
    return nums[0];
  }

  nums.sort((a, b) => a - b);

  let j = 1;
  let majority = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      j++;
      if (j > nums.length / 2) {
        majority = nums[i];
      }
    } else {
      j = 1;
    }
  }

  return majority;
}
