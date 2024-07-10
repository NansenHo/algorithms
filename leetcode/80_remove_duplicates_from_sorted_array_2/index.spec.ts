import { describe, it, expect } from "vitest";

describe("LeetCode 80 - Medium - Remove Duplicates from Sorted Array II", () => {
  it.each([
    {
      nums: [1, 1, 1, 2, 2, 3],
      expectedLength: 5,
      expectedNums: [1, 1, 2, 2, 3, 3],
    },
    {
      nums: [0, 0, 1, 1, 1, 1, 2, 3, 3],
      expectedLength: 7,
      expectedNums: [0, 0, 1, 1, 2, 3, 3, 3, 3],
    },
  ])(
    "the length of nums should be $expectedLength, nums should be $expectedNums",
    ({ nums, expectedLength, expectedNums }) => {
      expect(removeDuplicates(nums)).toBe(expectedLength);
      expect(nums).toEqual(expectedNums);
    }
  );
});

/**
 * 题目解释：
 *
 * 给了我一个升序整数数组，我需要原地删除多余的重复项，使得每个元素最多出现两次。
 *
 * 一个元素也可以只出现一次。
 *
 * 最后返回删除后数组的新长度，并且修改原数组，以使原数组前面部分包含去重后的元素。
 */

function removeDuplicates(nums: number[]): number {
  if (nums.length <= 2) {
    return 2;
  }

  // 指针 j 初始化为1，因为我们假设前两个元素（索引 0 和 1 ）是有效的。
  // 所以从第三个元素（索引 2 ）开始检查。
  let j = 1;
  // 从索引 2 开始遍历数组，检查每个元素，所以指针 i 为 2。
  for (let i = 2; i < nums.length; i++) {
    // 如果当前元素 nums[i] 与 nums[j-1] 不相等，说明它不是第三次出现，可以保留。
    if (nums[i] !== nums[j - 1]) {
      // 将指针 j 向前移动一位，表示发现了一个新的有效元素。
      j++;
      nums[j] = nums[i];
    }
  }

  return j + 1;
}
