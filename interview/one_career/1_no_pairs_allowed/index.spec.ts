import { describe, it, expect } from "vitest";

describe("Interview - One Career - No Pairs Allowed", () => {
  it.each([
    { words: ["add", "boook", "break"], expectedMinOperations: [1, 1, 0] },
    {
      words: ["aabbcc", "abcd", "aabbaa", "aaaa"],
      expectedMinOperations: [3, 0, 3, 2],
    },
    { words: ["a", "aa", "aaa", "aaaaa"], expectedMinOperations: [0, 1, 1, 2] },
    {
      words: ["abcdef", "abccba", "aabbccddeeff", "abcabcabc"],
      expectedMinOperations: [0, 1, 6, 0],
    },
    {
      words: ["boooook", "boook", "ook"],
      expectedMinOperations: [2, 1, 1],
    },
    {
      words: ["xyz", "xyyz", "xxyyzz", "xxxyyyzzz"],
      expectedMinOperations: [0, 1, 3, 3],
    },
  ])(
    "the minimal operations of $words is $expectedMinOperations",
    ({ words, expectedMinOperations }) => {
      const minOperations = minimalOperations(words);
      console.log(minOperations);

      expect(minimalOperations(words)).toEqual(expectedMinOperations);
    }
  );
});

function minimalOperations(words: string[]): number[] {
  const minOperations: number[] = [];

  for (const word of words) {
    let changes = 0;
    let i = 1;

    while (i <= word.length) {
      if (word[i] === word[i - 1]) {
        changes++;
        i++;
      }
      i++;
    }

    minOperations.push(changes);
  }

  return minOperations;
}
