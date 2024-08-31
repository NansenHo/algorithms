import { describe, it, expect } from "vitest";

describe("LeetCode 20 - Valid Parentheses", () => {
  it.each([
    { parentheses: "{}()", expected: true },
    { parentheses: "{})", expected: false },
    { parentheses: "[{()}]", expected: true },
    { parentheses: "[({)}]", expected: false },
    { parentheses: "[{)}]", expected: false },
    { parentheses: "}})", expected: false },
    { parentheses: "[({(", expected: false },
  ])("parentheses: $parentheses  => $expected", ({ parentheses, expected }) => {
    const result = isValid(parentheses);
    expect(result).toBe(expected);
  });
});

function isValid(parentheses: string): boolean {
  if (parentheses.length % 2 !== 0) return false;

  interface Map {
    [key: string]: string;
  }

  const stack: string[] = [];
  const map: Map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const p of parentheses) {
    if (p in map) {
      stack.push(p);
    } else {
      const key = stack.pop();
      if (key && p !== map[key]) {
        return false;
      }
    }
  }

  return !stack.length;
}
