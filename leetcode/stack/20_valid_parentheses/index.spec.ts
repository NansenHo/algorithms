import { describe, it, expect } from "vitest";

describe("LeetCode 20 - Easy - Valid Parentheses", () => {
  it.each([
    { parentheses: "{}()", expected: true },
    { parentheses: "{})", expected: false },
    { parentheses: "[{()}]", expected: true },
    { parentheses: "[({)}]", expected: false },
    { parentheses: "[{)}]", expected: false },
    { parentheses: "}})", expected: false },
    { parentheses: "[({(", expected: false },
    { parentheses: "))", expected: false },
  ])("parentheses: $parentheses  => $expected", ({ parentheses, expected }) => {
    const result = isValid(parentheses);
    expect(result).toBe(expected);
  });
});

function isValid(parentheses: string): boolean {
  if (parentheses.length % 2 !== 0) return false;

  const stack: string[] = [];
  const bracketMap = new Map<string, string>([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);

  for (const char of parentheses) {
    if (bracketMap.has(char)) {
      stack.push(char);
    } else {
      const lastOpenBracket = stack.pop();

      if (!lastOpenBracket || char !== bracketMap.get(lastOpenBracket))
        return false;
    }
  }

  return !stack.length;
}
