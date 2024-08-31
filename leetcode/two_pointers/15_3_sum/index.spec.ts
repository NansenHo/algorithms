import { describe, it, expect } from "vitest";

describe("LeetCode 15 - Medium - 3 Sum", () => {
  it.each([
    {
      input: [-1, 0, 1, 2, -1, -4],
      expected: [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    },
    { input: [0, 1, 1], expected: [] },
    { input: [0, 0, 0], expected: [[0, 0, 0]] },
  ])("$input  => $expected", ({ input, expected }) => {
    const result = threeSum(input);
    expect(result).toEqual(expected);
  });
});

function threeSum(nums: number[]): number[][] {
  // 边界情况
  if (nums.length < 3) return [];

  // 排序
  nums.sort((a, b) => a - b);

  const list: number[][] = [];
  let left: number, right: number;

  for (let i = 0; i < nums.length; i++) {
    // 防止重复
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    left = i + 1;
    right = nums.length - 1;

    while (left < right) {
      // 防止重复
      if (right === i) {
        right--;
      } else if (nums[i] + nums[left] + nums[right] === 0) {
        list.push([nums[i], nums[left], nums[right]]);
        // 防止重复
        while (nums[left] === nums[left + 1]) {
          left++;
        }
        left++;
        // 防止重复
        while (nums[right] === nums[right - 1]) {
          right--;
        }
        right--;
      } else if (nums[i] + nums[left] + nums[right] < 0) {
        left++;
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        right--;
      }
    }
  }

  return list;
}
