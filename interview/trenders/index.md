# 説明

あるゲームのアイテムに応じたランキングを作ります。
アイテムの種類は N 個あり、アイテムは種類ごとに得点が異なります。
ユーザーのスコアは、各アイテム持ち数 × 各アイテムの得点の総和となります。
スコアが小数になった場合は、小数第一位を四捨五入して計算します。

# 問題

以下の入力値を元にトップ K のスコア(Ｋ＝３の場合トップ３)を 出力してください。
出力は、上位スコアから順番 K 番目までのスコアを改行(\n)して標準出力で出力してください。

# 入力値

一行目にアイテムの個数 N, ユーザーの人数, トップ K がカンマで区切られています。
二行目に N 個のアイテムの一つ分のスコアがカンマで区切られています。
三行目から各ユーザーのアイテム所持数がカンマで区切られています。

| ヘッダはありません |     |     |       |
| :----------------- | :-- | :-- | :---- |
| 4                  | 10  | 3   |       |
| 1.5                | 1.2 | 2   | 0.4   |
| 208                | 200 | 3   | 99988 |
| 255                | 150 | 50  | 65472 |
| 103                | 748 | 39  | 48571 |
| 159                | 403 | 32  | 89928 |
| 254                | 300 | 67  | 78492 |
| 249                | 298 | 47  | 45637 |
| 253                | 382 | 89  | 37282 |
| 250                | 350 | 78  | 76782 |
| 251                | 371 | 69  | 67821 |
| 256                | 312 | 89  | 54382 |
