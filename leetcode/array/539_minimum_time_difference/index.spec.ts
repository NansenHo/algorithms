import { describe, it, expect } from "vitest";

describe("LeetCode 539 - Medium - Minimum time difference", () => {
  it.each([
    { timePoints: ["23:59", "00:00"], output: 1 },
    { timePoints: ["00:00", "23:59", "00:00"], output: 0 },
    { timePoints: ["00:00", "01:00"], output: 60 },
    { timePoints: ["02:39", "10:26", "21:43"], output: 296 },
  ])(
    "minimum time difference between $timePoints is $output",
    ({ timePoints, output }) => {
      expect(findMinDifference(timePoints)).toBe(output);
    }
  );
});

const minutesInADay = 24 * 60;

function findMinDifference(timePoints: string[]): number {
  let result = 0;

  const timestamps = timePoints.map((t) => {
    const [hour, minutes] = t.split(":");
    return Number(hour) * 60 + Number(minutes);
  });
  const sortedTimestamps = timestamps.sort((a, b) => a - b);

  for (let i = 1; i < sortedTimestamps.length; i++) {
    const diff = minDiff(sortedTimestamps[i], sortedTimestamps[i - 1]);

    result = i === 1 ? diff : Math.min(result, diff);
  }

  const diff = minDiff(
    sortedTimestamps[sortedTimestamps.length - 1],
    sortedTimestamps[0]
  );

  return Math.min(result, diff);
}

function minDiff(a: number, b: number) {
  const d = a - b;
  return Math.min(minutesInADay - d, d);
}
