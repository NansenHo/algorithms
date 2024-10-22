import { describe, it, expect } from "vitest";

describe("LeetCode 12 - Medium - Integer to Roman", () => {
  it.each([
    { integer: 3, roman: "III" },
    { integer: 58, roman: "LVIII" },
    { integer: 1994, roman: "MCMXCIV" },
    { integer: 3749, roman: "MMMDCCXLIX" },
  ])("$roman => $integer", ({ roman, integer }) => {
    expect(intToRoman(integer)).toBe(roman);
  });
});

// 贪心算法
function intToRoman(num: number): string {
  const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  // prettier-ignore
  const romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  let result = "";

  for (let i = 0; i < romanValues.length; i++) {
    while (num >= romanValues[i]) {
      num -= romanValues[i];
      result += romanSymbols[i];
    }
  }

  return result;
}
