import { describe, it, expect } from "vitest";

describe("SIVA - Medium - 重なり合う時間帯をまとめたデータを返す関数を作成してください", () => {
  it.each([
    {
      records: [
        { start_hour: 2, end_hour: 3 },
        { start_hour: 1, end_hour: 2 },
        { start_hour: 5, end_hour: 6 },
        { start_hour: 3, end_hour: 4 },
      ],
      result: [
        { start_hour: 1, end_hour: 4 },
        { start_hour: 5, end_hour: 6 },
      ],
    },
    {
      records: [
        { start_hour: 17, end_hour: 22 },
        { start_hour: 18, end_hour: 18 },
        { start_hour: 19, end_hour: 20 },
      ],
      result: [{ start_hour: 17, end_hour: 22 }],
    },
    {
      records: [
        { start_hour: 3, end_hour: 6 },
        { start_hour: 21, end_hour: 22 },
        { start_hour: 15, end_hour: 18 },
        { start_hour: 10, end_hour: 13 },
        { start_hour: 15, end_hour: 16 },
        { start_hour: 8, end_hour: 12 },
        { start_hour: 16, end_hour: 17 },
        { start_hour: 10, end_hour: 13 },
        { start_hour: 23, end_hour: 4 },
      ],
      result: [
        { start_hour: 23, end_hour: 6 },
        { start_hour: 8, end_hour: 13 },
        { start_hour: 15, end_hour: 18 },
        { start_hour: 21, end_hour: 22 },
      ],
    },
    {
      records: [
        { start_hour: 3, end_hour: 8 },
        { start_hour: 2, end_hour: 3 },
        { start_hour: 20, end_hour: 1 },
        { start_hour: 1, end_hour: 2 },
      ],
      result: [{ start_hour: 20, end_hour: 8 }],
    },
  ])(
    "$records that merged overlapping times => $result",
    ({ records, result }) => {
      expect(mergeOverlappingTimes(records)).toEqual(result);
    }
  );
});

interface Record {
  start_hour: number;
  end_hour: number;
}

function mergeOverlappingTimes(records: Record[]): Record[] {
  const result: Record[] = [];

  const adjustedRecords = records.map((record) => {
    const { start_hour, end_hour } = record;
    return end_hour - start_hour < 0
      ? {
          start_hour,
          end_hour: end_hour + 24,
        }
      : record;
  });

  adjustedRecords.sort((a, b) => a.start_hour - b.start_hour);

  for (let i = 0; i < adjustedRecords.length; i++) {
    const currentRecord = adjustedRecords[i];

    if (result.length === 0) {
      result.push(currentRecord);
    } else {
      const last = result[result.length - 1];
      const first = result[0];

      if (last.end_hour >= currentRecord.start_hour) {
        last.end_hour = Math.max(last.end_hour, currentRecord.end_hour);
      } else if (currentRecord.end_hour - 24 >= first.start_hour) {
        first.start_hour = Math.max(first.start_hour, currentRecord.start_hour);
      } else {
        result.push(currentRecord);
      }
    }
  }

  return result.map((record) => {
    const { start_hour, end_hour } = record;
    return end_hour > 24
      ? {
          start_hour,
          end_hour: end_hour - 24,
        }
      : record;
  });
}
