import { describe, it, expect } from "vitest";

describe("Tech Magic - Coding Test", () => {
  it.each([
    { nums1: [1, 2, 3], nums2: [1, 3, 5], expectedIntersection: [1, 3] },
    { nums1: [1, 2, 3], nums2: [4, 5, 6], expectedIntersection: [] },
  ])(
    "The intersection of $nums1 and $nums2 is $expectedIntersection",
    ({ nums1, nums2, expectedIntersection }) => {
      expect(solution(nums1, nums2)).toEqual(expectedIntersection);
    }
  );
});

function solution(nums1: number[], nums2: number[]): number[] {
  const intersection: number[] = [];

  let i = 0,
    j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      intersection.push(nums1[i]);
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
