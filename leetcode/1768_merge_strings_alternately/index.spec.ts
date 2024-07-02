import { describe, it, expect } from "vitest";

/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d

Constraints:

- 1 <= word1.length, word2.length <= 100
- word1 and word2 consist of lowercase English letters.
*/

function mergeAlternately(word1: string, word2: string): string {
  // the first attempt
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
