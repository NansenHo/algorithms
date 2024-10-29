import { describe, it, expect } from "vitest";

describe("LeetCode 71 - Easy - Simplify Path", () => {
  it.each([
    { path: "/a/c/..//./d/", expected: "/a/d" },
    { path: "/../", expected: "/" },
    { path: "/home//foo/", expected: "/home/foo" },
    { path: "/home/", expected: "/home" },
  ])("$path => $expected", ({ path, expected }) => {
    expect(simplifyPath(path)).toBe(expected);
  });
});

function simplifyPath(path: string): string {
  const splittedPath = path.split("/");
  const stack: string[] = [];

  for (const path of splittedPath) {
    if (path === "" || path === ".") {
    } else if (path === "..") {
      stack.pop();
    } else {
      stack.push(path);
    }
  }

  return "/" + stack.join("/");
}
