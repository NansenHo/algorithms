# LeetCode 974 - Medium - Subarray Sums Divisible by K

## 题目要求

给你一个整数数组 nums，和一个整数 K，

需要返回 nums 中所有元素的和能整除 K 的非空子数组的数量。

## 解题思路

> (prefixSum2 - prefixSum1) % k = 0
> ⬇️
> prefixSum2 % k - prefixSum1 % k = 0
> ⬇️
> prefixSum2 % k = prefixSum1 % k

根据上面的算式，可以知道，

我们需要构建一个 hashmap，以 prefixSum 除以 k 的余数，其出现的次数为 value。

然后在每一层循环中，检查是否有余数和当前余数相等，如果有的话，count 加上其出现的次数。

### 余数为负数时的处理

当余数是负数时，应将其转换为非负数。

可以通过 `(remainder + k) % k` 来实现。
