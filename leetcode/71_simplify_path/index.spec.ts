import { describe, it, expect } from "vitest";

function simplifyPath(path: string): string {
  const splittedPath = path.split("/");
  const stack: string[] = [];

  for (const p of splittedPath) {
    if (p === "" || p === ".") {
    } else if (p === "..") {
      stack.pop();
    } else {
      stack.push(p);
    }
  }

  return "/" + stack.join("/");
}

describe("71 Simplify Path", () => {
  it.each([
    { path: "/a/c/..//./d/", expected: "/a/d" },
    { path: "/../", expected: "/" },
    { path: "/home//foo/", expected: "/home/foo" },
    { path: "/home/", expected: "/home" },
  ])("$path => $expected", ({ path, expected }) => {
    expect(simplifyPath(path)).toBe(expected);
  });
});
