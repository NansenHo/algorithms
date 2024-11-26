import { describe, it, expect } from "vitest";

describe("LeetCode 155 - Medium - Min Stack", () => {
  it("should initialize correctly", () => {
    const stack = new MinStack();
    expect(stack.stack).toEqual([]);
    expect(stack.minStack).toEqual([]);
  });

  it("should push elements and maintain the correct min value", () => {
    const stack = new MinStack();
    stack.push(5);
    expect(stack.getMin()).toBe(5);

    stack.push(3);
    expect(stack.getMin()).toBe(3);

    stack.push(7);
    expect(stack.getMin()).toBe(3);

    stack.push(3);
    expect(stack.getMin()).toBe(3);
  });

  it("should pop elements and maintain the correct min value", () => {
    const stack = new MinStack();
    stack.push(5);
    stack.push(3);
    stack.push(7);
    stack.push(3);

    stack.pop();
    expect(stack.getMin()).toBe(3);

    stack.pop();
    expect(stack.getMin()).toBe(3);

    stack.pop();
    expect(stack.getMin()).toBe(5);
  });

  it("should return the top element", () => {
    const stack = new MinStack();
    stack.push(5);
    stack.push(3);
    expect(stack.top()).toBe(3);

    stack.pop();
    expect(stack.top()).toBe(5);
  });
});

class MinStack {
  stack: number[];
  minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    this.stack.push(val);

    if (
      this.minStack.length === 0 ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }
  }

  pop(): void {
    const returnElement = this.stack.pop();

    if (returnElement === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
