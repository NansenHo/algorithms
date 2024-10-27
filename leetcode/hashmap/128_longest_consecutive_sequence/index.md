# LeetCode 128 - Medium - Longest Consecutive Sequence

## 题干

Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in `O(n)` time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

## 解法的时间复杂度为什么是 $O(n)$

while 循环仅在起点时才开始，避免重复检查每个序列中的所有数字。

即使在最坏情况下，每个数字最多只会被 while 循环访问一次。

每个数字的存在性检查和集合操作（Set.has 和 Set.add）都是 O(1) 的时间复杂度。

所以，每个数字最多被访问两次（一次在 for 循环中，一次在 while 循环中）。

最后时间复杂度是 $O(2n)$，最终是 $O(n)$。
