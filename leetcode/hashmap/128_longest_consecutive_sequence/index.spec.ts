import { describe, it, expect } from "vitest";

describe("LeetCode 128 - Medium - Longest Consecutive Sequence", () => {
  it.each([
    { nums: [100, 4, 200, 1, 3, 2], length: 4 },
    { nums: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1], length: 9 },
    { nums: [1, 2, 0, 1], length: 3 },
    { nums: [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6], length: 7 },
    { nums: [1, 9, 3, 10, 4, 20, 2], length: 4 },
    { nums: [], length: 0 },
    { nums: [5], length: 1 },
    { nums: [1, 2, 3, 4, 5], length: 5 },
    { nums: [10, 30, 20, 40], length: 1 },
    { nums: [-1, -2, -3, -4], length: 4 },
    { nums: [2, 2, 2, 2], length: 1 },
    { nums: [0, -1, 1, 2, 5, 6, 7, 8], length: 4 },
  ])(
    "the length of longest consecutive sequence in $nums is $length",
    ({ nums, length }) => {
      expect(longestConsecutive(nums)).toBe(length);
    }
  );
});

function longestConsecutive(nums: number[]): number {
  const numsSet = new Set(nums);
  let maxLength = 0;

  for (const num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let length = 1;
      let sequenceNum = num;

      while (numsSet.has(sequenceNum + 1)) {
        sequenceNum++;
        length++;
      }

      maxLength = Math.max(maxLength, length);
    }
  }

  return maxLength;
}
