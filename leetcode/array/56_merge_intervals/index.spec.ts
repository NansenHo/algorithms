import { describe, it, expect } from "vitest";

describe("LeetCode 56 - Medium - Merge Intervals", () => {
  it.each([
    {
      intervals: [
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ],
      output: [
        [1, 6],
        [8, 10],
        [15, 18],
      ],
    },
    {
      intervals: [
        [1, 4],
        [4, 5],
      ],
      output: [[1, 5]],
    },
    {
      intervals: [
        [5, 7],
        [1, 3],
        [4, 6],
        [6, 8],
      ],
      output: [
        [1, 3],
        [4, 8],
      ],
    },
    {
      intervals: [
        [1, 10],
        [2, 6],
        [8, 12],
        [10, 15],
      ],
      output: [[1, 15]],
    },
    {
      intervals: [
        [1, 4],
        [2, 3],
        [3, 5],
        [7, 8],
        [8, 10],
      ],
      output: [
        [1, 5],
        [7, 10],
      ],
    },
    {
      intervals: [
        [1, 3],
        [7, 9],
        [4, 6],
        [10, 13],
      ],
      output: [
        [1, 3],
        [4, 6],
        [7, 9],
        [10, 13],
      ],
    },
    {
      intervals: [
        [1, 2],
        [1, 4],
        [1, 3],
      ],
      output: [[1, 4]],
    },
  ])("$intervals -> $output", ({ intervals, output }) => {
    expect(merge(intervals)).toEqual(output);
  });
});

function merge(intervals: number[][]): number[][] {
  const adjustedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  const result: number[][] = [];

  for (let i = 0; i < adjustedIntervals.length; i++) {
    const currentInts = adjustedIntervals[i];

    if (result.length === 0) {
      result.push(currentInts);
    } else {
      const last = result[result.length - 1][1];

      if (currentInts[0] <= last) {
        result[result.length - 1][1] = Math.max(last, currentInts[1]);
      } else {
        result.push(currentInts);
      }
    }
  }

  return result;
}
