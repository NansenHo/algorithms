# 12. Integer to Roman (Medium)

Seven different symbols represent Roman numerals with the following values:

<!-- prettier-ignore -->
| Symbol | Value |
| --- | --- |
| I |	1 |
| V |	5 |
| X |	10 |
| L |	50 |
| C |	100 |
| D |	500 |
| M |	1000 |

Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

- If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
- If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
- Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.

Given an integer, convert it to a Roman numeral.

这道题要用贪心算法来解：

1. 使用两个数组分别存储罗马数字和对应的整数值。
2. 从大到小遍历这些数值，尽量减去当前的数值，直到不能减为止，并同时添加相应的罗马数字。
3. 最后得到的就是对应的罗马数字字符串。
