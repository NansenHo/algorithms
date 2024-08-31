import { describe, it, expect } from "vitest";

describe("LeetCode 121 - Easy - Best Time to Buy and Sell Stock", () => {
  it.each([
    { prices: [7, 1, 5, 3, 6, 4], expectedMaxProfit: 5 },
    { prices: [7, 6, 4, 3, 1], expectedMaxProfit: 0 },
  ])(
    "the best time for $prices is $expectedMaxProfit",
    ({ prices, expectedMaxProfit }) => {
      expect(maxProfit(prices)).toBe(expectedMaxProfit);
    }
  );
});

function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (minPrice > prices[i]) {
      minPrice = prices[i];
    } else {
      const profit = prices[i] - minPrice;

      maxProfit = Math.max(profit, maxProfit);
    }
  }

  return maxProfit;
}
