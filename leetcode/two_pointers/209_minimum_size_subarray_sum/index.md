# LeetCode 209 - Medium - Minimum Size Subarray Sum

## 题目要求

给你一个正整数数组 `nums` 和一个正整数 `target`。

要求找到一个子数组，满足下列条件：

- 所有元素的和大于或等于 `target`
- 长度最小

并返回这个数组的长度。

范围：

- 1 <= target <= 10^9
- 1 <= nums.length <= 10^5
- 1 <= nums[i] <= 10^4

## 解题思路

### 滑动窗口

取两个指针，表示子数组的起始位置和结束位置。


