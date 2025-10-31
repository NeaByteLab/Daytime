---
title: Date Manipulation
description: Add, subtract, and modify dates with flexible time units
---

Add, subtract, and modify dates with flexible time units.

## Adding Time

Use `add()` to add time to a date:

```typescript
const date = daytime('2025-11-15')

// Add days
date.add(1, 'day')
date.add(7, 'day')

// Add months
date.add(1, 'month')
date.add(3, 'month')

// Add years
date.add(1, 'year')

// Add hours, minutes, seconds
date.add(2, 'hour')
date.add(30, 'minute')
date.add(45, 'second')

// Add milliseconds
date.add(500, 'millisecond')
```

## Subtracting Time

Use `subtract()` to subtract time from a date:

```typescript
const date = daytime('2025-11-15')

// Subtract days
date.subtract(1, 'day')
date.subtract(7, 'day')

// Subtract months
date.subtract(1, 'month')
date.subtract(3, 'month')

// Subtract other units
date.subtract(2, 'hour')
date.subtract(30, 'minute')
date.subtract(45, 'second')
```

## Available Time Units

| Unit | Description | Example |
|------|-------------|---------|
| `millisecond` | Milliseconds | `add(500, 'millisecond')` |
| `second` | Seconds | `add(30, 'second')` |
| `minute` | Minutes | `add(15, 'minute')` |
| `hour` | Hours | `add(2, 'hour')` |
| `day` | Days | `add(7, 'day')` |
| `week` | Weeks | `add(2, 'week')` |
| `month` | Months | `add(1, 'month')` |
| `year` | Years | `add(1, 'year')` |

## Start of Periods

Use `startOf()` to get the beginning of a time period. Time components are set to their minimum values:

```typescript
const date = daytime('2025-11-15T14:30:45Z')

date.startOf('millisecond')
// Round to millisecond

date.startOf('second')
// 2025-11-15 14:30:45.000

date.startOf('minute')
// 2025-11-15 14:30:00

date.startOf('hour')
// 2025-11-15 14:00:00

date.startOf('day')
// 2025-11-15 00:00:00

date.startOf('week')
// Start of week (Sunday)

date.startOf('month')
// 2025-11-01 00:00:00

date.startOf('quarter')
// Start of quarter

date.startOf('year')
// 2025-01-01 00:00:00
```

## End of Periods

Use `endOf()` to get the end of a time period. Time components are set to their maximum values:

```typescript
const date = daytime('2025-11-15T14:30:45Z')

date.endOf('millisecond')
// End of millisecond

date.endOf('second')
// 2025-11-15 14:30:45.999

date.endOf('minute')
// 2025-11-15 14:30:59

date.endOf('hour')
// 2025-11-15 14:59:59

date.endOf('day')
// 2025-11-15 23:59:59

date.endOf('week')
// End of week (Saturday)

date.endOf('month')
// 2025-11-30 23:59:59

date.endOf('quarter')
// End of quarter

date.endOf('year')
// 2025-12-31 23:59:59
```

## Setting Values

Use `set()` to change specific date components. Returns a new Daytime instance:

### Set Individual Unit

```typescript
const date = daytime('2025-11-15')

// Set year
date.set('year', 2026)

// Set month (1-12)
date.set('month', 12)

// Set day (1-31)
date.set('day', 25)

// Set hour (0-23)
date.set('hour', 15)

// Set minute (0-59)
date.set('minute', 30)

// Set second (0-59)
date.set('second', 45)

// Set millisecond (0-999)
date.set('millisecond', 789)
```

### Set Multiple Units

```typescript
const date = daytime('2025-01-01')

// Set multiple units at once
date.set({
  year: 2026,
  month: 12,
  day: 25,
  hour: 15,
  minute: 30,
  second: 45,
  millisecond: 789
})
```

## Calculating Differences

### diff()

Calculate the difference between two dates:

```typescript
const date1 = daytime('2025-11-15T14:30:45Z')
const date2 = daytime('2025-11-20T18:00:00Z')

// Difference in days
date2.diff(date1, 'day')
// 5.1453125

// Difference in hours
date2.diff(date1, 'hour')
// 123.4875

// Difference in minutes
date2.diff(date1, 'minute')
// 7409.25

// Difference in weeks
date2.diff(date1, 'week')
// 0.735

// Difference in months
date2.diff(date1, 'month')
// 0.169
```

## Cloning Dates

Use `clone()` to create an independent copy:

```typescript
const original = daytime('2025-11-15')
const cloned = original.clone()

// Modify clone without affecting original
cloned.add(1, 'day')

original.format('YYYY-MM-DD')
// "2025-11-15"

cloned.format('YYYY-MM-DD')
// "2025-11-16"
```

## Chaining Manipulation

All manipulation methods return a new Daytime instance:

```typescript
const result = daytime('2025-11-15')
  .add(3, 'month')
  .subtract(5, 'day')
  .startOf('week')
  .add(2, 'day')
  .set('hour', 12)
  .set('minute', 0)
  .format('YYYY-MM-DD HH:mm')

console.log(result)
// "2026-02-12 12:00"
```

## Month and Year Boundaries

Daytime handles edge cases automatically:

```typescript
// Adding months handles month-end correctly
daytime('2025-01-31').add(1, 'month')
// "2025-02-28" (not Feb 31)

daytime('2025-03-31').subtract(1, 'month')
// "2025-02-28"

// Leap years
daytime('2024-02-29').add(1, 'year')
// "2025-02-28" (handles leap year)
```
