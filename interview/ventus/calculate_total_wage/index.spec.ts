import { describe, it, expect } from "vitest";

describe("Interview - Ventus - Calculate Total Wage", () => {
  it.each([
    {
      logs: ["IN, 2024/01/26 09:00:00", "OUT, 2024/01/26 17:00:00"],
      totalWage: 8000,
    },
    {
      logs: [
        "IN, 2024/01/26 09:00:00",
        "TEMP_OUT, 2024/01/26 12:00:00",
        "RETURNED, 2024/01/26 13:00:00",
        "OUT, 2024/01/26 17:00:00",
      ],
      totalWage: 7000,
    },
    {
      logs: [
        "IN, 2024/01/26 09:00:00",
        "TEMP_OUT, 2024/01/26 12:00:00",
        "RETURNED, 2024/01/26 12:30:00",
        "OUT, 2024/01/26 17:00:00",
      ],
      totalWage: 7500,
    },
    {
      logs: [
        "IN, 2024/01/26 09:00:00",
        "TEMP_OUT, 2024/01/26 12:00:00",
        "RETURNED, 2024/01/26 12:40:00",
        "OUT, 2024/01/26 17:00:00",
      ],
      totalWage: 7333,
    },
  ])("the total wage is $totalWage", ({ logs, totalWage }) => {
    expect(calculateTotalWage(logs)).toBe(totalWage);
  });
});

function calculateTotalWage(logs: string[]): number {
  let totalWorkedHours = 0;
  const hourlyWage = 1000;

  let inTiming: Date | null = null,
    tempOutTing: Date | null = null;

  for (let i = 0; i < logs.length; i++) {
    const [action, timeLog] = logs[i].split(",");

    if (action === "IN") {
      inTiming = new Date(timeLog);
    } else if (action === "TEMP_OUT") {
      tempOutTing = new Date(timeLog);
    } else if (action === "OUT" && !!inTiming) {
      const outTiming = new Date(timeLog);
      totalWorkedHours +=
        (outTiming.getTime() - inTiming.getTime()) / 60000 / 60;
    } else if (action === "RETURNED" && !!tempOutTing) {
      const returnedTiming = new Date(timeLog);
      totalWorkedHours -=
        (returnedTiming.getTime() - tempOutTing.getTime()) / 60000 / 60;
    }
  }

  const totalWage = Math.floor(totalWorkedHours * hourlyWage);

  return totalWage;
}
