import { describe, it, expect } from "vitest";

function isTimeIncluded(timing: number, start: number, end: number): boolean {
  if (start === end) return true;

  const isCrossingMidnight = start > end;
  if (isCrossingMidnight) {
    return timing < end || timing >= start;
  }

  return timing >= start && timing < end;
}

describe("", () => {
  it.each([
    { timing: 6, start: 7, end: 22, isIncluded: false },
    { timing: 2, start: 0, end: 4, isIncluded: true },
    { timing: 0, start: 0, end: 4, isIncluded: true },
    { timing: 4, start: 0, end: 4, isIncluded: false },
    { timing: 4, start: 22, end: 5, isIncluded: true },
    { timing: 22, start: 22, end: 5, isIncluded: true },
    { timing: 5, start: 22, end: 5, isIncluded: false },
    { timing: 21, start: 22, end: 5, isIncluded: false },
    { timing: 1, start: 22, end: 5, isIncluded: true },
    { timing: 1, start: 22, end: 22, isIncluded: true },
  ])(
    "$timing is included in the range $start to $end",
    ({ timing, start, end, isIncluded }) => {
      expect(isTimeIncluded(timing, start, end)).toBe(isIncluded);
    }
  );
});
