import { describe, it, expect } from "vitest";

const users: number[][] = [
  [208, 200, 3, 99988],
  [255, 150, 50, 65472],
  [103, 748, 39, 48571],
  [159, 403, 32, 89928],
  [254, 300, 67, 78492],
  [249, 298, 47, 45637],
  [253, 382, 89, 37282],
  [250, 350, 78, 76782],
  [251, 371, 69, 67821],
  [256, 312, 89, 54382],
];

const scoreOfItem = [1.5, 1.2, 2, 0.4];

function ranking(users: number[][], k: number): string {
  const usersTotalScore: number[] = calculateTotalScore(users, scoreOfItem);

  usersTotalScore.sort((a, b) => b - a);

  return usersTotalScore.slice(0, k).join("\n");
}

function calculateTotalScore(users: number[][], scoreOfItem: number[]) {
  return users.map((user) => {
    if (scoreOfItem.length !== user.length) throw new Error("Error");

    let totalScore = 0;
    let l = user.length;
    while (l--) {
      totalScore += user[l] * scoreOfItem[l];
    }

    return Number(totalScore.toFixed(1));
  });
}

describe("trenders", () => {
  it("", () => {
    const expectedScores = calculateTotalScore(users, scoreOfItem)
      .sort((a, b) => b - a)
      .slice(0, 3)
      .join("\n");

    expect(ranking(users, 3)).toBe(expectedScores);
  });
});
