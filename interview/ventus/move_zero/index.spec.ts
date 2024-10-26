import { describe, it, expect } from "vitest";

describe("Interview - Ventus - Move Zero", () => {
  it.each([
    { arr: [0, 1, 2, 3], result: [1, 2, 3, 0] },
    { arr: [1, 2, 0, 4, 0, 6], result: [1, 2, 4, 6, 0, 0] },
  ])("", ({ arr, result }) => {
    expect(moveZeroes(arr)).toEqual(result);
  });
});

function moveZeroes(arr: number[]): number[] {
  let nonZeroIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[nonZeroIndex]] = [arr[nonZeroIndex], arr[i]];
      // 从前往后遍历，将每个非零元素放到 nonZeroIndex 的位置即可，0 就会自然而然被挤到数组的最后面
      nonZeroIndex++;
    }
  }

  return arr;
}
