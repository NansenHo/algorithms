import { describe, it, expect } from "vitest";

describe("LeetCode 1768 - Merge Strings Alternately", () => {
  it.each([
    { word1: "abc", word2: "pqr", expected: "apbqcr" },
    { word1: "ab", word2: "pqrs", expected: "apbqrs" },
    { word1: "abcd", word2: "pq", expected: "apbqcd" },
  ])("$word1 , $word2 => $expected", ({ word1, word2, expected }) => {
    expect(mergeAlternately(word1, word2)).toBe(expected);
    expect(mergeAlternately1(word1, word2)).toBe(expected);
    expect(mergeAlternately2(word1, word2)).toBe(expected);
  });
});

function mergeAlternately2(word1: string, word2: string): string {
  let minLength = Math.min(word1.length, word2.length);
  let res = "";

  for (let i = 0; i < minLength; i++) {
    res += word1[i] + word2[i];

    if (i + 1 === minLength) {
      if (word1[i + 1]) {
        res += word1.slice(i + 1);
      }
      if (word2[i + 1]) {
        res += word2.slice(i + 1);
      }
    }
  }

  return res;
}

function mergeAlternately1(word1: string, word2: string): string {
  const lengthOfWord1 = word1.length;
  const lengthOfWord2 = word2.length;

  const maxLength =
    lengthOfWord1 > lengthOfWord2 ? lengthOfWord1 : lengthOfWord2;

  let i = 0;
  let mergedString = "";
  while (i < maxLength) {
    if (word1[i]) {
      mergedString += word1[i];
    }
    if (word2[i]) {
      mergedString += word2[i];
    }

    i++;
  }

  return mergedString;
}

function mergeAlternately(word1: string, word2: string): string {
  const words1 = word1.split("");
  const words2 = word2.split("");

  const lengthOfWords1 = word1.length;
  const lengthOfWords2 = word2.length;

  const maxLength =
    lengthOfWords1 > lengthOfWords2 ? lengthOfWords1 : lengthOfWords2;

  const mergedWords: string[] = [];

  let i = 0;
  while (i < maxLength) {
    if (words1[i]) {
      mergedWords.push(words1[i]);
    }
    if (words2[i]) {
      mergedWords.push(words2[i]);
    }

    i++;
  }

  return mergedWords.join("");
}
