import { describe, it, expect } from "vitest";

describe("LeetCode 349 - Easy - Intersection of Two Arrays", () => {
  it.each([
    { nums1: [1, 2, 2, 1], nums2: [2, 2], expectedIntersection: [2] },
    { nums1: [4, 9, 5], nums2: [9, 4, 9, 8, 4], expectedIntersection: [4, 9] },
  ])(
    "The intersection of $nums1 and $nums2 -> $expectedIntersection",
    ({ nums1, nums2, expectedIntersection }) => {
      expect(intersection(nums1, nums2)).toEqual(expectedIntersection);
    }
  );
});

function intersection(nums1: number[], nums2: number[]): number[] {
  const intersection: number[] = [];

  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  // prettier-ignore
  let i = 0, j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      if (intersection[intersection.length - 1] !== nums1[i]) {
        intersection.push(nums1[i]);
      }
      i++;
      j++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      i++;
    }
  }

  return intersection;
}
