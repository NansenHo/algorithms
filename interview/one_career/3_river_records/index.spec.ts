import { describe, it, expect } from "vitest";

describe("Interview - One Career - River Records", () => {
  it.each([
    {
      input: [1, 2, 3, 4, 5],
      expectedMaxDifference: 4,
    },
    {
      input: [5, 4, 3, 2, 1],
      expectedMaxDifference: -1,
    },
    {
      input: [2, 3, 10, 1, 4, 8],
      expectedMaxDifference: 8,
    },
    {
      input: [9, 7, 3, 1, 6, 8, 5],
      expectedMaxDifference: 7,
    },
    {
      input: [3, 3, 3, 3],
      expectedMaxDifference: -1,
    },
    {
      input: [1, 100, 1, 100],
      expectedMaxDifference: 99,
    },
    {
      input: [1, 1, 1, 2],
      expectedMaxDifference: 1,
    },
    {
      input: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 100],
      expectedMaxDifference: 99,
    },
  ])(
    "the max difference of $input is $expectedMaxDifference",
    ({ input, expectedMaxDifference }) => {
      expect(findMaxDifference(input)).toBe(expectedMaxDifference);
    }
  );
});

function findMaxDifference(arr: number[]): number {
  let minNumber = arr[0];
  let maxDifference = -1;

  for (const num of arr) {
    if (num > minNumber) {
      maxDifference = Math.max(maxDifference, num - minNumber);
    }

    minNumber = Math.min(minNumber, num);
  }

  return maxDifference;
}
