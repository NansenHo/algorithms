import { describe, it, expect } from "vitest";

describe("", () => {
  it.each([
    { nums: [4, 5, 0, -2, -3, 1], k: 5, expectedOutput: 7 },
    { nums: [5], k: 9, expectedOutput: 0 },
    { nums: [-1, 2, 9], k: 2, expectedOutput: 2 },
    { nums: [2, -2, 2, -4], k: 6, expectedOutput: 2 },
  ])("", ({ nums, k, expectedOutput }) => {
    expect(subarraysDivByK(nums, k)).toBe(expectedOutput);
  });
});

function subarraysDivByK(nums: number[], k: number): number {
  let count = 0;
  let prefixSum = 0;

  const remainderCount = new Map<number, number>();
  remainderCount.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    // 当余数是负数时，应将其转换为非负数。可以通过 (remainder + k) % k 来实现。
    const remainder = ((prefixSum % k) + k) % k;

    // check
    if (remainderCount.has(remainder)) {
      count += remainderCount.get(remainder)!;
      console.log(count);
    }

    // update map
    remainderCount.set(remainder, (remainderCount.get(remainder) || 0) + 1);
    console.log(remainderCount);
  }

  return count;
}
