import { describe, it, expect } from "vitest";

// H-Index wiki 解释： https://zh.wikipedia.org/zh-cn/H%E6%8C%87%E6%95%B0

describe("LeetCode 274 - Medium - H-Index", () => {
  it.each([
    {
      citations: [3, 0, 6, 1, 5],
      expectedOutput: 3,
    },
    {
      citations: [1, 3, 1],
      expectedOutput: 1,
    },
    {
      citations: [0, 0, 0, 0],
      expectedOutput: 0,
    },
    {
      citations: [4, 4, 4, 4],
      expectedOutput: 4,
    },
    {
      citations: [10, 8, 5, 4, 3],
      expectedOutput: 4,
    },
    {
      citations: [100, 200, 300],
      expectedOutput: 3,
    },
    {
      citations: [1, 1, 1, 1, 1, 1],
      expectedOutput: 1,
    },
  ])(
    "the h-index of $citations is $expectedOutput",
    ({ citations, expectedOutput }) => {
      expect(hIndex(citations)).toBe(expectedOutput);
    }
  );
});

function hIndex(citations: number[]): number {
  // 对引用次数数组进行降序排序
  citations.sort((a, b) => b - a);

  let hIndex = 0;

  for (let i = 0; i < citations.length; i++) {
    // 如果当前引用次数大于或等于 i + 1，则更新 h-index
    if (citations[i] >= i + 1) {
      hIndex = i + 1;
    } else {
      // 一旦找到一个不满足条件的引用次数，后续的引用次数都会更小，直接退出循环
      break;
    }
  }

  return hIndex;
}
