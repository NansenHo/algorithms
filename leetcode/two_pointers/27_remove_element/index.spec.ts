import { describe, it, expect } from "vitest";

describe("LeetCode 27 - Easy - Remove Element", () => {
  it.each([
    {
      nums: [3, 2, 2, 3],
      val: 3,
      expectedOutput: 2,
      expectedNums: [2, 2],
    },
    {
      nums: [0, 1, 2, 2, 3, 0, 4, 2],
      val: 2,
      expectedOutput: 5,
      expectedNums: [0, 1, 3, 0, 4],
    },
  ])(
    "$nums, $val => $expectedNums",
    ({ nums, val, expectedOutput, expectedNums }) => {
      expect(removeElement2(nums, val)).toBe(expectedOutput);
      expect(nums).toEqual(expectedNums);
    }
  );
});

function removeElement(nums: number[], val: number): number {
  if (nums.length === 0) {
    return 0;
  }

  while (nums.includes(val)) {
    const indexOfVal = nums.lastIndexOf(val);
    nums.splice(indexOfVal, 1);
  }

  return nums.length;
}

function removeElement2(nums: number[], val: number): number {
  if (nums.length === 0) {
    return 0;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      // 因为数组长度变短了 1，所以 i 也要自减 1
      i--;
    }
  }

  return nums.length;
}
