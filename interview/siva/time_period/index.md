# 期間比較

## 重なり合う時間帯をまとめたデータを返す関数を作成してください

找出所有重叠的时间段，并**将这些重叠的时间段合并为一个连续的时间段**。

```typescript
// Test Case 1
records = [
  { start_hour: 2, end_hour: 3 },
  { start_hour: 1, end_hour: 2 },
  { start_hour: 5, end_hour: 6 },
  { start_hour: 3, end_hour: 4 },
];

r = unique_records(records);

// 期待 r 等于 [
//   { start_hour: 1, end_hour: 4 },
//   { start_hour: 5, end_hour: 6 },
// ];
```

```typescript
// Test Case 2
records = [
  { start_hour: 17, end_hour: 22 },
  { start_hour: 18, end_hour: 18 },
  { start_hour: 19, end_hour: 20 },
];

r = unique_records(records);

// 期待 r 等于 [
//   { start_hour: 17, end_hour: 22 },
// ];
```

```typescript
// Test Case 3
records = [
  { start_hour: 3, end_hour: 6 },
  { start_hour: 21, end_hour: 22 },
  { start_hour: 15, end_hour: 18 },
  { start_hour: 10, end_hour: 13 },
  { start_hour: 15, end_hour: 16 },
  { start_hour: 8, end_hour: 12 },
  { start_hour: 16, end_hour: 17 },
  { start_hour: 10, end_hour: 13 },
  { start_hour: 23, end_hour: 4 },
];

r = unique_records(records);

// 期待 r 等于 [
//   { start_hour: 23, end_hour: 6 },
//   { start_hour: 8, end_hour: 13 },
//   { start_hour: 15, end_hour: 18 },
//   { start_hour: 21, end_hour: 22 },
// ];
```

