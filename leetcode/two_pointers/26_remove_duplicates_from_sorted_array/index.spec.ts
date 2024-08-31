import { describe, it, expect } from "vitest";

describe("LeetCode 26 - Easy - Remove Duplicates from Sorted Array", () => {
  it.each([
    { nums: [1, 1, 2], expectedOutput: 2, expectedNums: [1, 2, 2] },
    {
      nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
      expectedOutput: 5,
      expectedNums: [0, 1, 2, 3, 4, 2, 2, 3, 3, 4],
    },
  ])(
    "length of nums is $expectedOutput, $nums => $expectedNums",
    ({ nums, expectedOutput, expectedNums }) => {
      expect(removeDuplicates2(nums)).toBe(expectedOutput);
      expect(nums).toEqual(expectedNums);
    }
  );
});

function removeDuplicates2(nums: number[]): number {
  // 用双指针的做法来处理，复杂度会降低到 O(n)
  if (nums.length === 0) {
    return 0;
  }

  let uniqueIndex = 1;

  for (let i = 1; i < nums.length; i++) {
    // 因为是和前一个进行比较，所以让循环从第二个开始
    if (nums[i] !== nums[i - 1]) {
      nums[uniqueIndex] = nums[i];
      uniqueIndex++;
    }
  }

  return uniqueIndex;
}

function removeDuplicates(nums: number[]): number {
  // 因为 splice 复杂度也是 O(n)
  // 所以最终的复杂度是 O(n^2)
  if (!nums.length) {
    return 0;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
}
