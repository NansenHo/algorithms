# LeetCode 6 - Medium - Zigzag Conversion

The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: `"PAHNAPLSIIGYIR"`

Write the code that will take a string and make this conversion given a number of rows:

> string convert(string s, int numRows);

Z 字形变换：

字符首先垂直向下排列在第一列，到达指定的行数后，改为斜向上排列，直到达到第一行，然后再次向下排列，如此循环直到所有字符都被排列完毕。

这个 Z 是倒下的 Z，不是站着的 Z。
