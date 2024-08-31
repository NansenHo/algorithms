import { describe, it, expect } from "vitest";

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p == null && q == null) {
    return true;
  }
  if (p == null || q == null) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }
  return isSameTree(p?.left, q?.left) && isSameTree(p?.right, q?.right);
}

describe("LeetCode 100 - Same Tree", () => {
  const p1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  const q1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

  const p2 = new TreeNode(1, new TreeNode(2));
  const q2 = new TreeNode(1, null, new TreeNode(3));

  const p3 = new TreeNode(1, new TreeNode(2), new TreeNode(1));
  const q3 = new TreeNode(1, new TreeNode(1), new TreeNode(2));

  const p4 = null;
  const q4 = null;

  const p5 = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(2), new TreeNode(3)),
    new TreeNode(3)
  );
  const q5 = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(2), new TreeNode(3)),
    new TreeNode(3)
  );

  it.each([
    { p: p1, q: q1, expected: true },
    { p: p2, q: q2, expected: false },
    { p: p3, q: q3, expected: false },
    { p: p4, q: q4, expected: true },
    { p: p5, q: q5, expected: true },
  ])("p: $p & q: $q => $expected", ({ p, q, expected }) => {
    expect(isSameTree(p, q)).toBe(expected);
  });
});
