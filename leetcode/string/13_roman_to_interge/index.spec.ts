import { describe, it, expect } from "vitest";

describe("LeetCode 13 - Easy - Roman to Integer", () => {
  it.each([
    { roman: "III", integer: 3 },
    { roman: "IV", integer: 4 },
    { roman: "LVIII", integer: 58 },
    { roman: "MCMXCIV", integer: 1994 },
  ])("$roman => $integer", ({ roman, integer }) => {
    expect(integer).toBe(romanToInt(roman));
    expect(integer).toBe(romanToInt1(roman));
  });
});

function romanToInt1(s: string): number {
  let result = 0;
  const romanToIntMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  for (let i = 0; i < s.length; i++) {
    const curInt = romanToIntMap.get(s[i])!;
    const nextInt = romanToIntMap.get(s[i + 1])!;

    if (curInt < nextInt) {
      result += nextInt - curInt;
      i++;
    } else {
      result += curInt;
    }
  }

  return result;
}

function romanToInt(s: string): number {
  let result = 0;
  const romanToIntMap = new Map([
    ["I", 1],
    ["II", 2],
    ["III", 3],
    ["IV", 4],
    ["V", 5],
    ["VI", 6],
    ["VII", 7],
    ["VIII", 8],
    ["IX", 9],
    ["X", 10],
    ["XX", 20],
    ["XXX", 30],
    ["XL", 40],
    ["L", 50],
    ["LX", 60],
    ["LXX", 70],
    ["LXXX", 80],
    ["XC", 90],
    ["C", 100],
    ["CD", 400],
    ["D", 500],
    ["DC", 600],
    ["CM", 900],
    ["M", 1000],
    ["MM", 2000],
    ["MMM", 3000],
  ]);
  const romans = s.split("");

  for (let i = 0; i < romans.length; i++) {
    let curRoman = romans[i];

    while (romanToIntMap.has(curRoman + romans[i + 1])) {
      curRoman += romans[i + 1];
      i++;
    }

    result += romanToIntMap.get(curRoman) ?? 0;
  }

  return result;
}
