# 文字列比較

X、Y という同じ長さの文字列は以下 2 つのうち 1 つに当てはまると、等しい。

- X と Y は一致する。
- X を同じ長さの X1 と X2 に分割する、Y を同じ長さの Y1 と Y2 に分割する。その時以下のい
  ずれかに当てはまる。
  - X1 と Y1 は長さが等しい、且つ X2 と Y2 は長さが等しい
  - X1 と Y2 は長さが等しい、且つ X2 と Y1 は長さが等しい

問. 2 つの文字列が等しいかどうか判別できる、`boolean` を返す関数を作成してください。

※ X と Y は 1 から 10 万文字で構成されます。全て小文字のアルファベットです。
※ X と Y は同じ長さです。


例1
Input
X - xxxyyy
Y - yyyxxx
Output
true

例2
Input
X - xxyy
Y - xyxy
Output
false

例3
Input
X - xxyz
Y - xyxx
Output
false

補足
yx = y + x
xy = x + y
yxとxyは等しい