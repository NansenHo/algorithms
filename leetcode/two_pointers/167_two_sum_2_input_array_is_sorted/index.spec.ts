import { describe, it, expect } from "vitest";

describe("LeetCode 167 - Medium - Two Sum II - Input Array Is Sorted", () => {
  it.each([
    { numbers: [2, 7, 11, 15], target: 9, output: [1, 2] },
    { numbers: [2, 3, 4], target: 6, output: [1, 3] },
    { numbers: [-1, 0], target: -1, output: [1, 2] },
  ])("the sum of $output is $target", ({ numbers, target, output }) => {
    expect(twoSum(numbers, target)).toEqual(output);
  });
});

function twoSum(numbers: number[], target: number): number[] {
  const complementIndexMap = new Map<number, number>();

  for (let i = 0; i < numbers.length; i++) {
    if (complementIndexMap.has(numbers[i])) {
      return [complementIndexMap.get(numbers[i])!, i + 1];
    } else {
      complementIndexMap.set(target - numbers[i], i + 1);
    }
  }

  return [];
}
