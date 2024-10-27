# LeetCode 219 - Easy - Contains Duplicate II

Given an integer array `nums` and an integer `k`, return `true` if there are two distinct indices `1` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.

给定一个整数数组 nums 和一个整数 k，你的任务是找到数组中是否存在两个相同的元素，且这两个元素的索引之间的距离最多为 k。换句话说，判断数组中是否存在重复的数，并且这些重复数的索引之间的差不超过 k。如果满足条件，返回 true，否则返回 false。

Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false

- dis-tin-ct /dɪˈstɪŋkt/
  - 显著的，明显的，确实的
  - 差别明显的，显著不同的
