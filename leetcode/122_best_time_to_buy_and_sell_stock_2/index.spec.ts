import { describe, it, expect } from "vitest";

describe("LeetCode 122 - Medium - Best Time to Buy and Sell Stock 2", () => {
  it.each([
    { prices: [7, 1, 5, 3, 6, 4], expectedMaxProfit: 7 },
    { prices: [1, 2, 3, 4, 5], expectedMaxProfit: 4 },
    { prices: [7, 6, 4, 3, 1], expectedMaxProfit: 0 },
  ])(
    "the max profit of $prices is $expectedMaxProfit",
    ({ prices, expectedMaxProfit }) => {
      expect(maxProfit(prices)).toBe(expectedMaxProfit);
    }
  );
});

function maxProfit(prices: number[]): number {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }

  return maxProfit;
}
