# LeetCode 15 - Medium - 3 Sum

对于这种无序的数组，我们首先要考虑 将其排序 是否会降低复杂度。

然后用 left, right 两个指针为 i 搜查任何一个可能的组合。

注意 left, right, i 都要避免重复：

- i 要防止与上一个 i 重复
- left 和 right 在组合成功后要防止和下一个值重复
- right 要防止和 i 重复
