import { describe, it, expect } from "vitest";

describe("LeetCode 452 - Medium - Minimum Number of Arrows to Burst Balloons", () => {
  // prettier-ignore
  it.each([
      { points: [[1,2],[2,3],[3,4],[4,5]], output: 2 },
      { points: [[10,16], [2,8], [1,6], [7,12]], output: 2 },
      { points: [[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]], output: 2}
  ])('should return $output arrows needed to burst all balloons at positions $points', ({points, output}) => { 
      expect(findMinArrowShots(points)).toBe(output);
   })
});

function findMinArrowShots(points: number[][]): number {
  // 按照气球的起始位置排序
  const sortedPoints = points.sort((a, b) => a[1] - b[1]);

  if (points.length === 0) return 0;

  let arrowPos = sortedPoints[0][1]; // 记录箭的位置
  let arrows = 1;

  for (let i = 1; i < sortedPoints.length; i++) {
    // 如果当前气球的起始位置大于箭的位置
    // 说明需要新的箭
    if (sortedPoints[i][0] > arrowPos) {
      arrows++;
      arrowPos = sortedPoints[i][1];
    }
  }

  return arrows;
}
