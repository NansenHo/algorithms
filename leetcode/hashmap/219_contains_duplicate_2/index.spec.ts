import { describe, it, expect } from "vitest";

describe("LeetCode 219 - Easy - Contains Duplicate 2", () => {
  it.each([
    { nums: [1, 2, 3, 1], k: 3, output: true },
    { nums: [1, 0, 1, 1], k: 1, output: true },
    { nums: [1, 2, 3, 1, 2, 3], k: 2, output: false },
    { nums: [1, 2, 3, 4, 5, 6], k: 5, output: false },
    { nums: [99, 99], k: 2, output: true },
    { nums: [1, 2, 3, 4, 5, 6, 1], k: 6, output: true },
    { nums: [1, 2, 3, 4, 1, 5], k: 2, output: false },
    { nums: [1, 2, 3, 1, 2, 3, 1], k: 3, output: true },
    { nums: [1], k: 1, output: false },
    { nums: [1, 2, 1], k: 0, output: false },
    { nums: [1, 2, 3, 1, 2, 1], k: 3, output: true },
    { nums: [1, 1, 1, 1], k: 2, output: true },
    { nums: [], k: 0, output: false },
    { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k: 5, output: false },
  ])("", ({ nums, k, output }) => {
    expect(containsNearbyDuplicate(nums, k)).toBe(output);
  });
});

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const numToIndex = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (numToIndex.has(num)) {
      const indexGap = Math.abs(numToIndex.get(num)! - i);

      if (indexGap > k) {
        numToIndex.set(num, i);
      } else {
        return true;
      }
    } else {
      numToIndex.set(num, i);
    }
  }

  return false;
}
