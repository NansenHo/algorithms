import { describe, it, expect } from "vitest";

describe("LeetCode 1 - twoSum", () => {
  it.each([
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { nums: [3, 3], target: 6, expected: [0, 1] },
    { nums: [3, 2, 4], target: 6, expected: [1, 2] },
    { nums: [3, 3, 3], target: 8, expected: [] },
  ])(
    "nums: $nums & target: $target => $expected",
    ({ nums, target, expected }) => {
      const list = twoSum(nums, target).sort();
      expect(list).toEqual(expected);
    }
  );
});

function twoSum(nums: number[], target: number): number[] {
  const partnerToIndex = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    let partner = target - nums[i];

    if (partnerToIndex.has(partner)) {
      return [partnerToIndex.get(partner)!, i];
    }

    partnerToIndex.set(nums[i], i);
  }

  return [];
}
