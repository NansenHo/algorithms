import { describe, it, expect } from "vitest";

describe("LeetCode 228 - Easy - Summary Ranges", () => {
  it.each([
    { nums: [0, 1, 2, 4, 5, 7], output: ["0->2", "4->5", "7"] },
    { nums: [0, 2, 3, 4, 6, 8, 9], output: ["0", "2->4", "6", "8->9"] },
    { nums: [], output: [] },
    { nums: [1], output: ["1"] },
    { nums: [1, 3], output: ["1", "3"] },
    { nums: [1, 2, 3, 4, 5], output: ["1->5"] },
    { nums: [0, 1, 3, 4, 5, 7, 8, 10], output: ["0->1", "3->5", "7->8", "10"] },
    { nums: [-3, -2, -1, 0, 2, 3, 4], output: ["-3->0", "2->4"] },
    {
      nums: [5, 6, 7, 9, 11, 12, 13, 15],
      output: ["5->7", "9", "11->13", "15"],
    },
    { nums: [0, 2, 4, 6, 8], output: ["0", "2", "4", "6", "8"] },
  ])("$nums -> $output", ({ nums, output }) => {
    expect(summaryRanges(nums)).toEqual(output);
  });
});

function summaryRanges(nums: number[]): string[] {
  const result: string[] = [];

  for (let i = 0; i < nums.length; i++) {
    let str = `${nums[i]}`;
    const startIndex = i;

    while (nums[i] + 1 === nums[i + 1]) {
      i++;
    }

    if (i !== startIndex) str += `->${nums[i]}`;

    result.push(str);
  }

  return result;
}
