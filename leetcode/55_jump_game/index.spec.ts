import { describe, it, expect } from "vitest";

describe("LeetCode 55 - Medium - Jump Game", () => {
  it.each([
    { nums: [2, 3, 1, 1, 4], expectedOutput: true },
    { nums: [3, 2, 1, 0, 4], expectedOutput: false },
    { nums: [2, 0], expectedOutput: true },
    { nums: [2, 5, 0, 0], expectedOutput: true },
    { nums: [0], expectedOutput: true },
  ])("$nums => $expectedOutput", ({ nums, expectedOutput }) => {
    expect(canJump(nums)).toBe(expectedOutput);
  });
});

function canJump(nums: number[]): boolean {
  // 增加一个指针来指向能够到达的最远距离。
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
      return false;
    }

    maxReach = Math.max(maxReach, i + nums[i]);
  }

  return maxReach >= nums.length - 1;
}
