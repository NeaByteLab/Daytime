---
title: Query Methods
description: Check and compare dates with query methods
---

Check date relationships, validate dates, and compare them.

## Basic Comparisons

### isBefore()

Check if a date is before another date:

```typescript
const date1 = daytime('2025-11-15')
const date2 = daytime('2025-11-20')

date1.isBefore(date2)
// true

date2.isBefore(date1)
// false

date1.isBefore(date1)
// false

// Compare with unit precision
date1.isBefore(date2, 'month')
// false (same month)

date1.isBefore(date2, 'day')
// true (different day)
```

### isAfter()

Check if a date is after another date:

```typescript
const date1 = daytime('2025-11-15')
const date2 = daytime('2025-11-20')

date1.isAfter(date2)
// false

date2.isAfter(date1)
// true

// With unit
date2.isAfter(date1, 'month')
// false (same month)

date2.isAfter(date1, 'day')
// true (different day)
```

### isSame()

Check if dates are the same:

```typescript
const date1 = daytime('2025-11-15T14:30:45Z')
const date2 = daytime('2025-11-15T14:30:45Z')

date1.isSame(date2)
// true

date1.isSame(date2, 'day')
// true

date1.isSame(date2, 'month')
// true

date1.isSame(date2, 'year')
// true

date1.isSame(date2, 'hour')
// true

date1.isSame(date2, 'minute')
// true

date1.isSame(date2, 'second')
// true
```

### isSameOrBefore()

Check if date is same or before:

```typescript
const date1 = daytime('2025-11-15')
const date2 = daytime('2025-11-15')
const date3 = daytime('2025-11-20')

date1.isSameOrBefore(date2)
// true

date1.isSameOrBefore(date3)
// true

date3.isSameOrBefore(date1)
// false
```

### isSameOrAfter()

Check if date is same or after:

```typescript
const date1 = daytime('2025-11-15')
const date2 = daytime('2025-11-15')
const date3 = daytime('2025-11-10')

date1.isSameOrAfter(date2)
// true

date1.isSameOrAfter(date3)
// true

date3.isSameOrAfter(date1)
// false
```

## Range Checks

### isBetween()

Check if date is between two dates (inclusive):

```typescript
const date = daytime('2025-11-15')
const start = daytime('2025-11-01')
const end = daytime('2025-11-30')

date.isBetween(start, end)
// true (date is between start and end)

date.isBetween(end, start)
// false (start must be before end)

// With unit precision - compares only the specified unit
date.isBetween(start, end, 'month')
// true (same month)

date.isBetween(start, end, 'day')
// true (same day range)
```

## Relative Checks

### isToday()

Check if date is today:

```typescript
daytime().isToday()
// true

daytime('2025-11-15').isToday()
// false (if not today)
```

### isYesterday()

Check if date is yesterday:

```typescript
daytime().subtract(1, 'day').isYesterday()
// true

daytime('2025-11-14').isYesterday()
// depends on current date
```

### isTomorrow()

Check if date is tomorrow:

```typescript
daytime().add(1, 'day').isTomorrow()
// true

daytime('2025-11-16').isTomorrow()
// depends on current date
```

### isPast()

Check if date is in the past:

```typescript
daytime().subtract(1, 'day').isPast()
// true

daytime().add(1, 'day').isPast()
// false

daytime('2024-01-01').isPast()
// true
```

### isFuture()

Check if date is in the future:

```typescript
daytime().add(1, 'day').isFuture()
// true

daytime().subtract(1, 'day').isFuture()
// false

daytime('2026-01-01').isFuture()
// true
```

## Same Period Checks

### isSameDay()

Check if dates are the same day:

```typescript
const date1 = daytime('2025-11-15T08:00:00')
const date2 = daytime('2025-11-15T20:00:00')

date1.isSameDay(date2)
// true (same day, different times)
```

### isSameMonth()

Check if dates are in the same month:

```typescript
const date1 = daytime('2025-11-15')
const date2 = daytime('2025-11-30')

date1.isSameMonth(date2)
// true
```

### isSameYear()

Check if dates are in the same year:

```typescript
const date1 = daytime('2025-01-15')
const date2 = daytime('2025-12-31')

date1.isSameYear(date2)
// true
```

### isSameWeek()

Check if dates are in the same week:

```typescript
const date1 = daytime('2025-11-15')
// Saturday

const date2 = daytime('2025-11-16')
// Sunday

date1.isSameWeek(date2)
// false (Saturday and Sunday may be in different weeks)

// Dates in the same week
const monday = daytime('2025-11-17')
const tuesday = daytime('2025-11-18')

monday.isSameWeek(tuesday)
// true (same week)
```

### isSameQuarter()

Check if dates are in the same quarter:

```typescript
const date1 = daytime('2025-01-15').startOf('quarter')
const date2 = daytime('2025-03-31').startOf('quarter')

date1.isSameQuarter(date2)
// true (both normalized to start of quarter 1)

// Alternative: compare quarter values directly
daytime('2025-01-15').quarter() === daytime('2025-03-31').quarter()
// true (both are quarter 1)
```

## This Period Checks

### isThisMonth()

Check if date is in current month:

```typescript
daytime().isThisMonth()
// true

daytime('2025-11-15').isThisMonth()
// depends on current month
```

### isThisYear()

Check if date is in current year:

```typescript
daytime().isThisYear()
// true

daytime('2025-01-01').isThisYear()
// depends on current year
```

### isThisQuarter()

Check if date is in current quarter:

```typescript
daytime().isThisQuarter()
// true
```

### isThisWeek()

Check if date is in current week:

```typescript
daytime().isThisWeek()
// true
```

## Weekend and Business Day Checks

### isWeekend()

Check if date is weekend (Saturday or Sunday):

```typescript
daytime('2025-11-15').isWeekend()
// true (Saturday)

daytime('2025-11-16').isWeekend()
// true (Sunday)

daytime('2025-11-17').isWeekend()
// false (Monday)
```

### isBusinessDay()

Check if date is a business day (Monday-Friday):

```typescript
daytime('2025-11-17').isBusinessDay()
// true (Monday)

daytime('2025-11-15').isBusinessDay()
// false (Saturday)

daytime('2025-11-16').isBusinessDay()
// false (Sunday)
```

## Other Checks

### isValid()

Check if date is valid:

```typescript
daytime('2025-11-15').isValid()
// true

daytime(new Date('invalid')).isValid()
// false

daytime(new Date('2025-13-45')).isValid()
// false
```

### isLeapYear()

Check if date is in a leap year:

```typescript
daytime('2024-01-01').isLeapYear()
// true

daytime('2025-01-01').isLeapYear()
// false
```

### isDST()

Check if date is in daylight saving time:

```typescript
daytime('2025-07-15').isDST()
// depends on timezone

daytime('2025-01-15').isDST()
// depends on timezone
```

### isUTC()

Check if date is in UTC timezone:

```typescript
daytime().isUTC()
// depends on current timezone
```

## Examples

### Validate Date Range

```typescript
function isValidRange(date: Daytime, start: Daytime, end: Daytime): boolean {
  return date.isValid() && date.isBetween(start, end)
}

// Check if date is between start and end
const date = daytime('2025-11-15')
const start = daytime('2025-11-01')
const end = daytime('2025-11-30')
isValidRange(date, start, end)
// true
```

### Check if Event is Upcoming

```typescript
function isUpcoming(eventDate: Daytime): boolean {
  return eventDate.isValid() && eventDate.isFuture()
}

const event = daytime('2026-01-01')
isUpcoming(event)
// true
```

### Filter Today's Events

```typescript
const events = [
  daytime('2025-11-15'),
  daytime('2025-11-16'),
  daytime().add(1, 'day')
]

const todayEvents = events.filter(event => event.isToday())
console.log(todayEvents.length)
// 1 (only events matching today's date)
```

