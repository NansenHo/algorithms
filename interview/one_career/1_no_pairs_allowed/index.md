# No Pairs Allowed

## 题目

给定一个单词列表 words。

对于每个单词，如果有相邻的两个字符相同，则需要修改其中一个字符。

你的任务是计算最小的修改次数，使得最终的字符串中不再有相邻的相同字符。

```typescript
const words = ["add", "boook", "break"];
```

对于上述输入：

    1.	'add'：需要修改一个 'd'（共 1 次修改）。
    2.	'boook'：需要修改中间的 'o'（共 1 次修改）。
    3.	'break'：不需要修改（共 0 次修改）。

输出结果应为 [1, 1, 0]，表示每个单词所需的最小修改次数。

约束条件

    •	1 ≤ n ≤ 100
    •	2 ≤ 单词长度 ≤ 10⁵
    •	单词中的字符范围在 a-z 之间。
