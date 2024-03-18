import { describe, it, expect } from "vitest";

// 给数组找一个随机参考元素，然后将其他元素与之比较并排序。

// 比如，以我为参考，比我高站我右边，比我矮站我左边。
// 这样，我左边的人和我右边的人，不用再互相比个头了。
// 之后，再继续在左右两边各自的范围里，找一个人，以他为参考比身高
// 反复这样操作，直到所有人都排好

// 快速排序算法由于每次都拆分成两半，
// 最终实际上是一个树形的结构：
//           arr
//    left        right
// left right   left right
// ... ...

// 其复杂度最终是 O(N*logN)
// O(logN) 的复杂度远远低于 O(N)
// 所以快排比冒泡排序性能高很多
// 在实际开发中，快排也应用得多很多

// 由于每次递归里都存了一份 left 和 right
// 但 left 和 right 只是 arr 的一半
// 所以其空间复杂度也是 O(N*logN)

function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  } // 递归的中止条件

  const pivotIndex = Math.floor(arr.length / 2);
  const flag = arr.splice(pivotIndex, 1)[0];
  // 要把这个 flag 从原数组中拿走
  // 因为我们在后面会把 flag 在组装（concat）回去

  let left: number[] = [];
  let right: number[] = [];

  for (const ele of arr) {
    if (ele < flag) {
      left.push(ele);
    } else {
      right.push(ele);
    }
  }

  // 还要拼接 flag
  return quickSort(left).concat(flag, quickSort(right));
}

describe("quick sort", () => {
  it("", () => {
    let arr: number[] = [
      1, 200, 78, 809, 478, 234, 232, 21, 34, 543, 89, 295, 238, 684,
    ];

    expect(quickSort(arr)).toEqual([
      1, 21, 34, 78, 89, 200, 232, 234, 238, 295, 478, 543, 684, 809,
    ]);
  });
});
