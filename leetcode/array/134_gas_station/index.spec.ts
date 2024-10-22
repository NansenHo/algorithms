import { describe, it, expect } from "vitest";

describe("LeetCode 134 - Medium - Gas Station", () => {
  it.each([
    { gas: [1, 2, 3, 4, 5], cost: [3, 4, 5, 1, 2], output: 3 },
    { gas: [2, 3, 4], cost: [3, 4, 3], output: -1 },
    { gas: [5], cost: [4], output: 0 },
    { gas: [2], cost: [3], output: -1 },
    { gas: [3, 3, 4], cost: [3, 3, 3], output: 0 },
    { gas: [4, 5, 2, 6, 5], cost: [3, 4, 5, 1, 2], output: 3 },
    { gas: [5, 1, 2, 3, 4], cost: [4, 4, 1, 5, 1], output: 4 },
    { gas: [0, 0, 0], cost: [1, 1, 1], output: -1 },
    { gas: [10, 2, 3, 4, 5], cost: [1, 2, 3, 4, 5], output: 0 },
    { gas: [6, 3, 7, 4, 10], cost: [5, 6, 3, 4, 9], output: 2 },
    { gas: [1, 2, 3, 4], cost: [1, 2, 3, 4], output: 0 },
    { gas: [1, 9, 2, 8, 3], cost: [8, 1, 7, 3, 2], output: 1 },
  ])("gas station $gas, cost $cost -> $output", ({ gas, cost, output }) => {
    expect(canCompleteCircuit(gas, cost)).toBe(output);
  });
});

function canCompleteCircuit(gas: number[], cost: number[]): number {
  let totalGas = 0;
  let currentGas = 0;
  let startGasStation = 0;

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i] - cost[i];
    currentGas += gas[i] - cost[i];

    if (currentGas < 0) {
      startGasStation = i + 1;
      currentGas = 0;
    }
  }

  return totalGas >= 0 ? startGasStation : -1;
}
