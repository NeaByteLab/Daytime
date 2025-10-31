---
title: Method Chaining
description: Chain methods together for date operations
---

Chain methods together for date operations.

## Basic Chaining

All methods return a new Daytime instance. This allows chaining multiple operations together:

```typescript
const result = daytime('2025-11-15')
  .add(3, 'month')
  .subtract(5, 'day')
  .startOf('week')
  .format('YYYY-MM-DD')

console.log(result)
// "2026-02-08"
```

## Common Patterns

### Manipulation Chain

```typescript
const date = daytime('2025-11-15')
  .add(2, 'month')
  .subtract(10, 'day')
  .add(1, 'week')
  .add(3, 'hour')
  .add(30, 'minute')

console.log(date.format('YYYY-MM-DD HH:mm'))
// "2026-01-16 03:30"
```

### Start/End with Manipulation

```typescript
const startOfNextMonth = daytime('2025-11-15')
  .add(1, 'month')
  .startOf('month')

console.log(startOfNextMonth.format('YYYY-MM-DD'))
// "2025-12-01"

const endOfPrevWeek = daytime('2025-11-15')
  .subtract(1, 'week')
  .endOf('week')

console.log(endOfPrevWeek.format('YYYY-MM-DD'))
// "2025-11-09"
```

### Query with Manipulation

```typescript
const isValid = daytime('2025-11-15')
  .add(1, 'day')
  .isFuture()

console.log(isValid)
// false (if not future)

// Or combine multiple queries
const date = daytime('2025-11-15')
const isBusinessAndFuture = date
  .clone()
  .add(5, 'day')
  .isBusinessDay() && date.clone().add(5, 'day').isFuture()

console.log(isBusinessAndFuture)
// true or false (depending on date)
```

## Business Day Calculation

```typescript
const deadline = daytime('2025-11-15')
  // Saturday
  .nextBusinessDay()
  // Monday
  .add(1, 'week')
  // Next Monday
  .add(2, 'day')
  // Wednesday
  .startOf('day')
  // 00:00:00
  .set('hour', 17)
  // 17:00:00
  .set('minute', 0)
  // 17:00:00
  .format('YYYY-MM-DD HH:mm dddd')

console.log(deadline)
// "2025-11-26 17:00 Wednesday"
```

### Quarter Navigation

```typescript
const q2Start = daytime('2025-11-15')
  .startOf('quarter')
  // Q4 start
  .add(1, 'quarter')
  // Q1 next year
  .add(1, 'quarter')
  // Q2 next year
  .startOf('quarter')
  // Q2 start
  .startOf('month')
  // First month of Q2
  .format('YYYY-MM-DD')

console.log(q2Start)
// "2026-04-01"
```

### Multi-Locale Formatting Chain

```typescript
const date = daytime('2025-11-15T14:30:45Z')
  .add(2, 'day')
  .subtract(1, 'hour')

// Format in multiple locales
const formats = {
  en: date.locale('en').format('dddd, MMMM Do YYYY'),
  id: date.locale('id').format('dddd, MMMM Do YYYY'),
  ja: date.locale('ja').format('dddd, MMMM Do YYYY')
}

console.log(formats)
// {
//   en: "Monday, November 17th 2025",
//   id: "Senin, November 17th 2025",
//   ja: "月曜日, 11月 17th 2025"
// }
```

### Date Range with Filtering

```typescript
const month = daytime('2025-11-15')
const businessDays = month
  .getDaysInMonth()
  .filter(d => d.isBusinessDay())
  .map(d => d.format('YYYY-MM-DD dddd'))

console.log(businessDays)
// ["2025-11-03 Monday", "2025-11-04 Tuesday", ...]
```

## Tips

### 1. Clone for Multiple Paths

Branch calculations by cloning:

```typescript
const base = daytime('2025-11-15')

const path1 = base.clone()
  .add(1, 'month')
  .startOf('month')

const path2 = base.clone()
  .add(1, 'month')
  .endOf('month')

console.log(path1.format('YYYY-MM-DD'))
// "2025-12-01"

console.log(path2.format('YYYY-MM-DD'))
// "2025-12-31"
```

### 2. Extract Intermediate Values

Break long chains into variables:

```typescript
const nextQuarterStart = daytime('2025-11-15')
  .startOf('quarter')
  .add(1, 'quarter')
  .startOf('quarter')

const result = nextQuarterStart
  .add(15, 'day')
  .nextBusinessDay()
  .format('YYYY-MM-DD dddd')

console.log(result)
// "2026-01-17 Friday"
```

### 3. Chain Validation

```typescript
function isValidEventDate(date: Daytime): boolean {
  return date
    .clone()
    .isValid()
    && date.clone().isFuture()
    && date.clone().isBusinessDay()
}

const eventDate = daytime('2026-01-15')
console.log(isValidEventDate(eventDate))
// true (if future and business day)
```

### 4. Conditional Chaining

```typescript
function getNextBusinessOrToday(date: Daytime): Daytime {
  return date.isBusinessDay()
    ? date.clone()
    : date.clone().nextBusinessDay()
}

const saturday = daytime('2025-11-15')
const workDay = getNextBusinessOrToday(saturday)
console.log(workDay.format('YYYY-MM-DD dddd'))
// "2025-11-17 Monday"
```

## Performance

Chaining is optimized for performance:

```typescript
// All these operations run in ~0.008ms
const result = daytime('2025-11-15')
  .add(3, 'month')
  .subtract(10, 'day')
  .startOf('week')
  .add(3, 'day')
  .nextBusinessDay()
  .format('YYYY-MM-DD')

console.log(result)
// "2026-02-08"
```

## Examples

### Calculate Project Deadline

```typescript
function calculateDeadline(startDate: Daytime, workDays: number): Daytime {
  let current = startDate.clone()
  // Start on a business day
  if (!current.isBusinessDay()) {
    current = current.nextBusinessDay()
  }
  // Add business days
  for (let i = 1; i < workDays; i++) {
    current = current.nextBusinessDay()
  }
  // Set to end of work day
  return current
    .set('hour', 17)
    .set('minute', 0)
    .set('second', 0)
}

const start = daytime('2025-11-15')
// Saturday
const deadline = calculateDeadline(start, 10)
console.log(deadline.format('YYYY-MM-DD HH:mm dddd'))
// "2025-11-28 17:00 Friday"
```

### Generate Monthly Report Dates

```typescript
function getReportDates(year: number, month: number): {
  monthStart: string
  monthEnd: string
  reportDate: string
} {
  const monthDate = daytime(`${year}-${month}-01`)
  return {
    monthStart: monthDate.startOf('month').format('YYYY-MM-DD'),
    monthEnd: monthDate.endOf('month').format('YYYY-MM-DD'),
    reportDate: monthDate
      .endOf('month')
      .prevBusinessDay()
      .format('YYYY-MM-DD dddd')
  }
}

const reports = getReportDates(2025, 11)
console.log(reports)
// {
//   monthStart: "2025-11-01",
//   monthEnd: "2025-11-30",
//   reportDate: "2025-11-28 Friday"
// }
```

### Time Zone Conversion Chain

```typescript
function convertWithFormatting(
  date: Daytime,
  targetLocale: string
): string {
  return date
    .clone()
    .locale(targetLocale)
    .format('dddd, MMMM Do YYYY [at] HH:mm:ss [UTC] Z')
}

const date = daytime('2025-11-15T14:30:45Z')
console.log(convertWithFormatting(date, 'id'))
// "Sabtu, November 15th 2025 at 21:30:45 UTC +07:00"
```
