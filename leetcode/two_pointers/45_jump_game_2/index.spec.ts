import { describe, it, expect } from "vitest";

describe("LeetCode 45 - Medium - Jump Game 2", () => {
  it.each([
    { nums: [2, 3, 1, 1, 4], expectedOutput: 2 },
    { nums: [2, 3, 0, 1, 4], expectedOutput: 2 },
    { nums: [1, 2, 1, 1, 1], expectedOutput: 3 },
    { nums: [7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 1, 2, 9, 0, 3], expectedOutput: 2 },
  ])("the jumps of $nums is $expectedOutput", ({ nums, expectedOutput }) => {
    expect(jump(nums)).toBe(expectedOutput);
  });
});

function jump(nums: number[]): number {
  let jumps = 0;
  let farthest = 0;
  let currentEnd = 0;

  // 当我们在某次跳跃后已经可以到达最后一个位置时，后续的计算和循环就没有意义了。
  // 继续循环会增加不必要的计算，降低效率。
  // 所以循环只到 nums.length - 1
  for (let i = 0; i < nums.length - 1; i++) {
    // 计算出每一步中有可能的所有走法中的最长的一次
    farthest = Math.max(farthest, i + nums[i]);

    // 都计算结束后，再更新 jumps 和 currentEnd
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;

      // 如果这时 currentEnd 已经可以到达最后一个元素则退出循环
      if (currentEnd >= nums.length - 1) {
        break;
      }
    }
  }

  return jumps;
}
