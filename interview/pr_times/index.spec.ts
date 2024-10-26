import { describe, it, expect } from "vitest";

describe("Interview - PR TIMES - array diff", () => {
  it.each([
    {
      olds: ["a", "b", "c", "d", "f"],
      news: ["a", "c", "e"],
      expectedDeleted: ["b", "d", "f"],
      expectedCreated: ["e"],
    },
  ])(
    "created: $expectedCreated, deleted: $expectedDeleted",
    ({ olds, news, expectedCreated, expectedDeleted }) => {
      const { created, deleted } = stringArrayDiff(olds, news);

      expect(created).toEqual(expectedCreated);
      expect(deleted).toEqual(expectedDeleted);
    }
  );
});

function stringArrayDiff(olds: string[], news: string[]) {
  const oldsSet = new Set(olds);
  const newsSet = new Set(news);

  const deleted = [...oldsSet].filter((s) => !newsSet.has(s));
  const created = [...newsSet].filter((s) => !oldsSet.has(s));

  return {
    deleted,
    created,
  };
}
