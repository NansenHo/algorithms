import { describe, it, expect } from "vitest";

describe("LeetCode 560 - Medium - Subarray Sum Equals K", () => {
  it.each([
    { nums: [1, 1, 1], k: 2, expectedOutput: 2 },
    { nums: [1, 2, 3], k: 3, expectedOutput: 2 },
    { nums: [1, 2, 1, 2, 1], k: 3, expectedOutput: 4 },
    // 为了应对下面的 case，要先检查再更新
    { nums: [1], k: 0, expectedOutput: 0 },
  ])(
    "$expectedNums sub array nums sum equals $k in $nums",
    ({ nums, k, expectedOutput }) => {
      expect(subarraySum(nums, k)).toBe(expectedOutput);
    }
  );
});

function subarraySum(nums: number[], k: number): number {
  let count = 0;
  let sum = 0;
  const prefixSumMap = new Map<number, number>();
  prefixSumMap.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    // 检查是否有符合条件的前缀和
    if (prefixSumMap.has(sum - k)) {
      count += prefixSumMap.get(sum - k)!;
    }

    // update prefixSumMap
    prefixSumMap.set(sum, (prefixSumMap.get(sum) || 0) + 1);
  }

  return count;
}
