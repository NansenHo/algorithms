import { describe, it, expect } from "vitest";

describe("LeetCode 49 - Medium - Group Anagrams", () => {
  it.each([
    {
      strs: ["eat", "tea", "tan", "ate", "nat", "bat"],
      output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
    },
    { strs: [""], output: [[""]] },
    { strs: ["a"], output: [["a"]] },
    {
      strs: ["abc", "bca", "bac", "bbb", "bb", "b"],
      output: [["b"], ["bbb"], ["bb"], ["abc", "bca", "bac"]],
    },
    {
      strs: ["loop", "polo", "olop"],
      output: [["loop", "polo", "olop"]],
    },
    {
      strs: ["zzz", "zzzz", "z"],
      output: [["z"], ["zzz"], ["zzzz"]],
    },
    {
      strs: ["up", "pu", "uup", "uupp"],
      output: [["up", "pu"], ["uup"], ["uupp"]],
    },
    {
      strs: ["listen", "silent", "enlist"],
      output: [["listen", "silent", "enlist"]],
    },
    {
      strs: ["bob", "boo", "obo"],
      output: [["boo", "obo"], ["bob"]],
    },
    {
      strs: ["spot", "pots", "tops", "opts", "stop", "post"],
      output: [["spot", "pots", "tops", "opts", "stop", "post"]],
    },
  ])("", ({ strs, output }) => {
    const groups = groupAnagrams(strs);

    const sortedGroups = groups.map((subArray) => subArray.sort());
    const sortedOutput = output.map((subArray) => subArray.sort());

    sortedGroups.sort();
    sortedOutput.sort();

    expect(sortedGroups).toEqual(sortedOutput);
  });
});

// 这道题我想到了把每个单词排序后，其实哪些单词是 anagrams 就很一目了然
// 但没想清楚这个思路结合 Hash Map 可以怎么来做
function groupAnagrams(strs: string[]): string[][] {
  const sortedStrToAnagrams = new Map<string, string[]>();

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const sortedStr = str.split("").sort().join("");

    sortedStrToAnagrams.set(
      sortedStr,
      sortedStrToAnagrams.has(sortedStr)
        ? [...sortedStrToAnagrams.get(sortedStr)!, str]
        : [str]
    );
  }

  return [...sortedStrToAnagrams.values()];
}
