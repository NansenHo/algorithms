import { describe, it, expect } from "vitest";

describe("LeetCode 57 - Medium - Insert Interval", () => {
  it.each([
    {
      intervals: [
        [1, 3],
        [6, 9],
      ],
      newInterval: [2, 5],
      output: [
        [1, 5],
        [6, 9],
      ],
    },
    {
      intervals: [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16],
      ],
      newInterval: [4, 8],
      output: [
        [1, 2],
        [3, 10],
        [12, 16],
      ],
    },
    {
      intervals: [
        [3, 5],
        [6, 9],
      ],
      newInterval: [1, 2],
      output: [
        [1, 2],
        [3, 5],
        [6, 9],
      ],
    },
    {
      intervals: [
        [1, 5],
        [10, 15],
      ],
      newInterval: [6, 12],
      output: [
        [1, 5],
        [6, 15],
      ],
    },
    {
      intervals: [[1, 5]],
      newInterval: [6, 8],
      output: [
        [1, 5],
        [6, 8],
      ],
    },
    {
      intervals: [
        [1, 3],
        [6, 9],
        [12, 15],
      ],
      newInterval: [10, 11],
      output: [
        [1, 3],
        [6, 9],
        [10, 11],
        [12, 15],
      ],
    },
    {
      intervals: [],
      newInterval: [2, 5],
      output: [[2, 5]],
    },
    {
      intervals: [
        [1, 3],
        [6, 9],
      ],
      newInterval: [0, 10],
      output: [[0, 10]],
    },
  ])("", ({ intervals, newInterval, output }) => {
    expect(insert(intervals, newInterval)).toEqual(output);
  });
});

function insert(intervals: number[][], newInterval: number[]): number[][] {
  let merged: number[][] = [];
  let i = 0;
  let n = intervals.length;

  // 添加所有数值小于新区间的区间
  while (i < n && newInterval[0] > intervals[i][1]) {
    merged.push(intervals[i]);
    i++;
  }

  // 合并重叠区间
  while (i < n && newInterval[1] >= intervals[i][0]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  // 添加合并后的新区间
  merged.push(newInterval);

  // 添加所有数值大于新区间的区间
  while (i < n) {
    merged.push(intervals[i]);
    i++;
  }

  return merged;
}
