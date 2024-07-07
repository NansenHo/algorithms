import { describe, it, expect } from "vitest";

// https://www.bilibili.com/video/BV1Qy4y1t7jt/?spm_id_from=333.337.search-card.all.click&vd_source=1294962bcae2fd95b963d0f7cc7c38f0

/**
 * 合并两个有序数组
 *
 * 给定两个有序整数数组 nums1, nums2，将 nums2 合并到 nums1 中，使得 nums1 成为一个有序数组。
 *
 * 说明：
 * 1. 初始化 nums1 和 nums2 的元素数量分别为 m 和 n
 * 2. 你可以假设 nums1 有足够的空间（大于或等于 m + n）来保存 nums2 中的元素
 */

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
