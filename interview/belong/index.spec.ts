import { describe, it, expect } from "vitest";

describe("Belong - Interview", () => {
  it.each([{ arr: [1, 1, 2, 2, 3, 4, 4, 5, 5], numberNotPaired: 3 }])(
    "$numberNotPaired is unpaired in $arr",
    ({ arr, numberNotPaired }) => {
      expect(findNumberNotPaired(arr)).toBe(numberNotPaired);
    }
  );
});

function findNumberNotPaired(arr: number[]): number {
  let numberNotPaired = arr[0];

  let i = 1;
  while (i <= arr.length) {
    if (arr[i] !== arr[i - 1]) {
      numberNotPaired = arr[i - 1];
      break;
    }
    i += 2;
  }

  return numberNotPaired;
}
