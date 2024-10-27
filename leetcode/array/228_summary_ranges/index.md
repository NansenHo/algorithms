# LeetCode 228 - Easy - Summary Ranges

You are given a sorted unique integer array `nums`.

A range `[a,b]` is the set of all integers from `a` to `b` (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of `nums` is covered by exactly one of the ranges, and there is no integer `x` such that `x` is in one of the ranges but not in `nums`.

Each range `[a,b]` in the list should be output as:

`"a->b"` if `a != b`
`"a"` if `a == b`

Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

Example 2:
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"

给定一个有序的整数数组 nums，其中元素按升序排列，可能包含一些连续的区间。你的任务是将这些连续的整数区间合并成一个范围表示。

例如，如果数组 nums = [0, 1, 2, 4, 5, 7]，输出应该是 ["0->2", "4->5", "7"]。也就是说，将连续的数字合并成一个范围，如 "0->2" 表示 0 到 2 是连续的，而单个不连续的数字，如 7，则单独输出 "7"。

返回所有范围的列表，每个范围用字符串的格式表示，格式为 "start->end" 或 "single number"。
