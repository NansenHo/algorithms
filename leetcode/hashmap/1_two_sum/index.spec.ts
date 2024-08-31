import { describe, it, expect } from "vitest";

function twoSum(nums: number[], target: number): number[] {
  interface Map {
    [key: number]: number;
  }
  const map: Map = {};

  for (let i = 0; i < nums.length; i++) {
    const partner = target - nums[i];

    if (nums[i] in map) {
      return [i, map[nums[i]]];
    }

    map[partner] = i;
  }

  return [];
}

describe("LeetCode 1 - twoSum", () => {
  it.each([
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { nums: [3, 3], target: 6, expected: [0, 1] },
    { nums: [3, 2, 4], target: 6, expected: [1, 2] },
    { nums: [3, 3, 3], target: 8, expected: [] },
  ])(
    "nums: $nums & target: $target => $expected",
    ({ nums, target, expected }) => {
      const list = twoSum_map(nums, target).sort();
      expect(list).toEqual(expected);
    }
  );
});

function twoSum_map(nums: number[], target: number): number[] {
  const partnerMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    let partner = target - nums[i];

    if (partnerMap.has(partner)) {
      return [partnerMap.get(partner)!, i];
    }

    partnerMap.set(nums[i], i);
  }

  return [];
}
