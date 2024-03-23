import { describe, it, expect } from "vitest";

// 该算法的逻辑是：
// 用两个指针（i, j）来分别从数组开头和结尾处出发，往数组中间走
// 比如有 [e, a, b, d, s, c, f] 数组
// i 找到比 e 大的，j 找到比 e 小的，然后 i 和 j 的值交换位置
// 这样一直处理下去，直到 i 和 j 相遇

function sort(arr: number[], start: number, end: number): number {
  const init = start;
  const flag = arr[init];
  start++;

  while (start < end) {
    while (arr[end] > flag) {
      end--;
    }
    while (arr[start] < flag) {
      start++;
    }
    if (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
    }
  }

  [arr[init], arr[start - 1]] = [arr[start - 1], arr[init]];

  return start;
}

function quickSortInPlace(arr: number[], start: number, end: number): number[] {
  if (start < end) {
    let index: number = sort(arr, start, end);
    quickSortInPlace(arr, start, index - 1);
    quickSortInPlace(arr, index, end);
  }

  return arr;
}

describe("quick sort in place", () => {
  it("", () => {
    let arr: number[] = [
      1, 200, 78, 809, 478, 234, 232, 21, 34, 543, 89, 295, 238, 684,
    ];

    expect(quickSortInPlace(arr, 0, arr.length - 1)).toEqual([
      1, 21, 34, 78, 89, 200, 232, 234, 238, 295, 478, 543, 684, 809,
    ]);
  });
});
