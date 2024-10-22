import { describe, it, expect } from "vitest";

describe("LeetCode 2215 - Easy - Find the Difference of Two Arrays", () => {
  it.each([
    {
      nums1: [1, 2, 3],
      nums2: [2, 4, 6],
      answer: [
        [1, 3],
        [4, 6],
      ],
    },
    { nums1: [1, 2, 3, 3], nums2: [1, 1, 2, 2], answer: [[3], []] },
  ])(
    "the differences between $nums1 and $nums2 are $answer",
    ({ nums1, nums2, answer }) => {
      expect(findDifference(nums1, nums2)).toEqual(answer);
    }
  );
});

function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const diff1 = [...set1].filter((num) => !set2.has(num));
  const diff2 = [...set2].filter((num) => !set1.has(num));

  return [diff1, diff2];
}
