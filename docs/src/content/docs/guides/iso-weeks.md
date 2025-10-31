---
title: ISO Weeks
description: Work with ISO week numbering
---

Work with ISO week numbering following the ISO 8601 standard (weeks start on Monday).

## ISO Week Methods

### isoWeek()

Get the ISO week number (1-53):

```typescript
const date = daytime('2025-11-15')
date.isoWeek()
// 46
```

### isoWeekday()

Get the ISO weekday number (1-7, Monday is 1):

```typescript
const date = daytime('2025-11-15')
// Saturday

date.isoWeekday()
// 6

const monday = daytime('2025-11-17')
monday.isoWeekday()
// 1
```

### isoWeekYear()

Get the ISO week year:

```typescript
const date = daytime('2025-11-15')
date.isoWeekYear()
// 2025
```

### isoWeeksInYear()

Get the number of ISO weeks in the year (52 or 53):

```typescript
const date = daytime('2025-01-01')
date.isoWeeksInYear()
// 52 or 53 (depends on the year)
```

## Regular vs ISO Week

Regular week numbering may differ from ISO week numbering. ISO weeks always start on Monday:

```typescript
const date = daytime('2025-11-15')

// Regular week
date.week()
// 46

// ISO week
date.isoWeek()
// 46

// ISO weekday (Monday = 1)
date.isoWeekday()
// 6 (Saturday)

// Regular day of week (Sunday = 0)
date.dayOfWeek()
// 6 (Saturday)
```

## Examples

### Get ISO Week Info

```typescript
function getISOWeekInfo(date: Daytime) {
  return {
    isoWeek: date.isoWeek(),
    isoWeekday: date.isoWeekday(),
    isoWeekYear: date.isoWeekYear(),
    isoWeeksInYear: date.isoWeeksInYear()
  }
}

const info = getISOWeekInfo(daytime('2025-11-15'))
console.log(info)
// {
//   isoWeek: 46,
//   isoWeekday: 6,
//   isoWeekYear: 2025,
//   isoWeeksInYear: 53
// }
```

### Format with ISO Week

```typescript
const date = daytime('2025-11-15')

// ISO week year and week
const formatted = `${date.isoWeekYear()}-W${String(date.isoWeek()).padStart(2, '0')}-${date.isoWeekday()}`
console.log(formatted)
// "2025-W46-6"
```

### Check ISO Week Boundary

```typescript
function isISOWeekStart(date: Daytime): boolean {
  return date.isoWeekday() === 1
}

function isISOWeekEnd(date: Daytime): boolean {
  return date.isoWeekday() === 7
}

const monday = daytime('2025-11-17')
console.log(isISOWeekStart(monday))
// true

const sunday = daytime('2025-11-16')
console.log(isISOWeekEnd(sunday))
// true
```

