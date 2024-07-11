import { describe, it, expect } from "vitest";

describe("LeetCode 189 - Medium - Rotate Array", () => {
  it.each([
    {
      nums: [1, 2, 3, 4, 5, 6, 7],
      k: 3,
      expectedNums: [5, 6, 7, 1, 2, 3, 4],
    },
    {
      nums: [-1, -100, 3, 99],
      k: 2,
      expectedNums: [3, 99, -1, -100],
    },
    {
      nums: [1],
      k: 1,
      expectedNums: [1],
    },
    {
      nums: [1, 2],
      k: 2,
      expectedNums: [1, 2],
    },
    {
      nums: [1, 2],
      k: 3,
      expectedNums: [2, 1],
    },
  ])(
    "after rotating $nums to the right by $k steps, it should become $expectedNums",
    ({ nums, k, expectedNums }) => {
      rotate(nums, k);
      expect(nums).toEqual(expectedNums);
    }
  );
});

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const length = nums.length;
  k = k % length;

  reverse(nums, 0, length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, length - 1);
}

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}
