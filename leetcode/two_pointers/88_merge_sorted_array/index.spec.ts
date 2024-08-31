import { describe, it, expect } from "vitest";

describe("LeetCode 88 - Easy - Merge Sorted Array", () => {
  it.each([
    {
      nums1: [1, 2, 3, 0, 0, 0],
      m: 3,
      nums2: [2, 5, 6],
      n: 3,
      expected: [1, 2, 2, 3, 5, 6],
    },
    {
      nums1: [1],
      m: 1,
      nums2: [],
      n: 0,
      expected: [1],
    },
    {
      nums1: [0],
      m: 0,
      nums2: [1],
      n: 1,
      expected: [1],
    },
    {
      nums1: [-1, 0, 0, 3, 3, 3, 0, 0, 0],
      m: 6,
      nums2: [1, 2, 2],
      n: 3,
      expected: [-1, 0, 0, 1, 2, 2, 3, 3, 3],
    },
  ])("$nums1 should equal $expected", ({ nums1, m, nums2, n, expected }) => {
    merge2(nums1, m, nums2, n);
    expect(nums1).toEqual(expected);
  });
});

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // 方案一：合并数组后排序
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);
}

function merge1(nums1: number[], m: number, nums2: number[], n: number): void {
  // 方案二
  // 时间复杂度：O(m + n)
  // 空间复杂度：O(m)
  const _nums1 = nums1.slice();

  let p = 0;
  let p1 = 0;
  let p2 = 0;

  while (p1 < m && p2 < n) {
    nums1[p++] = _nums1[p1] < nums2[p2] ? _nums1[p1++] : nums2[p2++];
  }

  while (p1 < m) {
    nums1[p++] = _nums1[p1++];
  }
  while (p2 < n) {
    nums1[p++] = nums2[p2++];
  }
}

function merge2(nums1: number[], m: number, nums2: number[], n: number): void {
  // 方案三：方案二的优化版，将指针改成从后往前遍历元素，从而不用多拷贝一份 nums1
  // 时间复杂度和方案二一样，是 O(m + n)
  // 但空间复杂度优化到了 O(1)
  let p1 = m - 1;
  let p2 = n - 1;

  let p = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    nums1[p--] = nums1[p1] > nums2[p2] ? nums1[p1--] : nums2[p2--];
  }

  while (p2 >= 0) {
    nums1[p--] = nums2[p2--];
  }
}
