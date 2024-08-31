# LeetCode 560 - Medium - Subarray Sum Equals K

## 题目要求

求出在 `nums` 里的所有元素的和为 k 的子数组的数量。

Constraints

- 1 <= nums.length <= 2 \* 104
- -1000 <= nums[i] <= 1000
- -107 <= k <= 107

## 思路

> prefixSum2 - prefixSum1 = k
> ⬇️
> prefixSum2 - k = prefixSum1

由上面的算式可以知道，我们应该建立一个 hashmap，以 prefixSum 为 key，并以其出现次数为 value。

然后每次循环，都检查当前的 prefixSum - k，是否在 hashmap 中存在，如果存在，说明满足 prefixSum2 - prefixSum1 = k。

这时取出 prefixSum - k 出现的次数，加到 count 上即可。
