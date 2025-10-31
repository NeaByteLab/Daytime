---
title: Component Getters
description: Get date and time components from Daytime instances
---

Get individual components of a date and time values.

## Basic Components

### year()

Get the year:

```typescript
const date = daytime('2025-11-15T14:30:45')
date.year()
// 2025
```

### month()

Get the month (1-12):

```typescript
const date = daytime('2025-11-15T14:30:45')
date.month()
// 11
```

### day()

Get the day of month (1-31):

```typescript
const date = daytime('2025-11-15T14:30:45')
date.day()
// 15
```

### hour()

Get the hour (0-23) in local timezone:

```typescript
const date = daytime('2025-11-15T14:30:45')
date.hour()
// 14
```

### minute()

Get the minute (0-59):

```typescript
const date = daytime('2025-11-15T14:30:45')
date.minute()
// 30
```

### second()

Get the second (0-59):

```typescript
const date = daytime('2025-11-15T14:30:45')
date.second()
// 45
```

### millisecond()

Get the millisecond (0-999):

```typescript
const date = daytime('2025-11-15T14:30:45.789')
date.millisecond()
// 789
```

## Derived Components

These methods return calculated values based on the date:

### dayOfWeek()

Get the day of week (0-6, Sunday is 0):

```typescript
const date = daytime('2025-11-15')
// Saturday

date.dayOfWeek()
// 6
```

### dayOfYear()

Get the day of year (1-366):

```typescript
const date = daytime('2025-01-15')
date.dayOfYear()
// 15

const date2 = daytime('2025-12-31')
date2.dayOfYear()
// 365
```

### quarter()

Get the quarter (1-4):

```typescript
const date = daytime('2025-11-15')
// Q4

date.quarter()
// 4

const date2 = daytime('2025-04-15')
// Q2

date2.quarter()
// 2
```

### week()

Get the week number:

```typescript
const date = daytime('2025-11-15')
date.week()
// 46
```

### weekOfMonth()

Get the week number within the month:

```typescript
const date = daytime('2025-11-15')
date.weekOfMonth()
// 3
```

## Generic Getter

### get()

Get any component by unit:

```typescript
const date = daytime('2025-11-15T14:30:45')

date.get('year')
// 2025

date.get('month')
// 11

date.get('day')
// 15

date.get('hour')
// 14

date.get('minute')
// 30

date.get('second')
// 45

date.get('millisecond')
// 0

date.get('quarter')
// 4

date.get('week')
// 46
```

## Examples

### Extract All Components

```typescript
const date = daytime('2025-11-15T14:30:45.789')
const components = {
  year: date.year(),
  month: date.month(),
  day: date.day(),
  hour: date.hour(),
  minute: date.minute(),
  second: date.second(),
  millisecond: date.millisecond(),
  dayOfWeek: date.dayOfWeek(),
  dayOfYear: date.dayOfYear(),
  quarter: date.quarter(),
  week: date.week()
}

console.log(components)
// {
//   year: 2025,
//   month: 11,
//   day: 15,
//   hour: 14,
//   minute: 30,
//   second: 45,
//   millisecond: 789,
//   dayOfWeek: 6,
//   dayOfYear: 319,
//   quarter: 4,
//   week: 46
// }
```

### Check Quarter

```typescript
function getQuarterInfo(date: Daytime) {
  return {
    quarter: date.quarter(),
    week: date.week(),
    weekOfMonth: date.weekOfMonth()
  }
}

const info = getQuarterInfo(daytime('2025-11-15'))
// { quarter: 4, week: 46, weekOfMonth: 3 }
```

