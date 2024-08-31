import { describe, it, expect } from "vitest";

// 该算法
// 平均和最坏的时间复杂度都是 O(n^2)
// 最好时间复杂度是 O(n)（当输入数组已经是降序排列时）

// 逻辑简单粗暴，性能较差，在数据量低的时候还可以接受

function bubbleSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

describe("bubble sort", () => {
  it("", () => {
    let arr = [1, 200, 78, 809, 478, 234, 232, 21, 34, 543, 89, 295, 238, 684];

    expect(bubbleSort(arr)).toEqual([
      1, 21, 34, 78, 89, 200, 232, 234, 238, 295, 478, 543, 684, 809,
    ]);
  });
});
