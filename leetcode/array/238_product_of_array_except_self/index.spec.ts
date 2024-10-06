import { describe, it, expect } from "vitest";

describe("LeetCode 238 - Product of Array Except Self", () => {
  it.each([
    { nums: [1, 2, 3, 4], answer: [24, 12, 8, 6] },
    { nums: [-1, 1, 0, -3, 3], answer: [0, 0, 9, 0, 0] },
  ])("nums: $nums => answer: $answer", ({ nums, answer }) => {
    expect(productExceptSelf(nums).map((n) => (n === 0 ? 0 : n))).toEqual(
      answer
    );
  });
});

function productExceptSelf(nums: number[]): number[] {
  const numsLength = nums.length;
  let answer: number[] = [];

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    answer.push(prefix);
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = numsLength - 1; i >= 0; i--) {
    answer[i] *= suffix;
    suffix *= nums[i];
  }

  return answer;
}
