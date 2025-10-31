---
title: Weekdays
description: Navigate to specific weekdays
---

Navigate to specific weekdays (Sunday through Saturday) in a month or year.

## Weekday Numbers

Daytime uses standard JavaScript weekday numbering:
- `0` - Sunday
- `1` - Monday
- `2` - Tuesday
- `3` - Wednesday
- `4` - Thursday
- `5` - Friday
- `6` - Saturday

## Finding Weekdays

### nextWeekday()

Get the next occurrence of a specific weekday:

```typescript
const date = daytime('2025-11-15')
// Saturday

// Find next Monday
date.nextWeekday(1)
// "2025-11-17 Monday"

// Find next Wednesday
date.nextWeekday(3)
// "2025-11-19 Wednesday"

// If already on that weekday, returns the next occurrence
const monday = daytime('2025-11-17')
monday.nextWeekday(1)
// "2025-11-24 Monday" (next Monday)
```

### prevWeekday()

Get the previous occurrence of a specific weekday:

```typescript
const date = daytime('2025-11-15')
// Saturday

// Find previous Monday
date.prevWeekday(1)
// "2025-11-10 Monday"

// Find previous Friday
date.prevWeekday(5)
// "2025-11-14 Friday"

// If already on that weekday, returns the previous occurrence
const monday = daytime('2025-11-17')
monday.prevWeekday(1)
// "2025-11-10 Monday" (previous Monday)
```

### nthWeekday()

Get the nth occurrence of a weekday in the month:

```typescript
const month = daytime('2025-11-15').startOf('month')
// November 1, 2025

// Get 1st Monday of the month
month.nthWeekday(1, 1)
// "2025-11-03 Monday"

// Get 2nd Monday of the month
month.nthWeekday(2, 1)
// "2025-11-10 Monday"

// Get 1st Friday of the month
month.nthWeekday(1, 5)
// "2025-11-07 Friday"

// Get 3rd Wednesday of the month
month.nthWeekday(3, 3)
// "2025-11-19 Wednesday"
```

### lastWeekday()

Get the last occurrence of a weekday in the month:

```typescript
const month = daytime('2025-11-15').startOf('month')
// November 1, 2025

// Get last Monday of the month
month.lastWeekday(1)
// "2025-11-24 Monday"

// Get last Friday of the month
month.lastWeekday(5)
// "2025-11-28 Friday"

// Get last Sunday of the month
month.lastWeekday(0)
// "2025-11-30 Sunday"
```

### nearestWeekday()

Get the nearest weekday (Friday if Saturday, Monday if Sunday):

```typescript
// If on Saturday, returns Friday
const saturday = daytime('2025-11-15')
saturday.nearestWeekday()
// "2025-11-14 Friday"

// If on Sunday, returns Monday
const sunday = daytime('2025-11-16')
sunday.nearestWeekday()
// "2025-11-17 Monday"

// If already a weekday, returns the same date
const monday = daytime('2025-11-17')
monday.nearestWeekday()
// "2025-11-17 Monday" (same date)
```

## Examples

### Find Next Meeting Day

```typescript
function getNextMeetingDay(date: Daytime, weekday: number): Daytime {
  return date.nextWeekday(weekday)
}

const today = daytime('2025-11-15')
// Saturday

const nextMonday = getNextMeetingDay(today, 1)
console.log(nextMonday.format('YYYY-MM-DD dddd'))
// "2025-11-17 Monday"

const nextFriday = getNextMeetingDay(today, 5)
console.log(nextFriday.format('YYYY-MM-DD dddd'))
// "2025-11-21 Friday"
```

### Get All Mondays in Month

```typescript
function getAllWeekdaysInMonth(date: Daytime, weekday: number): Daytime[] {
  const month = date.clone().startOf('month')
  const days: Daytime[] = []
  let current = month.nthWeekday(1, weekday)
  const monthEnd = month.clone().endOf('month')
  while (current.isSameOrBefore(monthEnd)) {
    days.push(current.clone())
    current = current.nextWeekday(weekday)
  }
  return days
}

const allMondays = getAllWeekdaysInMonth(daytime('2025-11-15'), 1)
allMondays.forEach(day => {
  console.log(day.format('YYYY-MM-DD dddd'))
})
// "2025-11-03 Monday"
// "2025-11-10 Monday"
// "2025-11-17 Monday"
// "2025-11-24 Monday"
```

### Payday Calculator (Last Friday)

```typescript
function getPayday(date: Daytime): Daytime {
  const month = date.clone().startOf('month')
  return month.lastWeekday(5) // Last Friday
}

const payday = getPayday(daytime('2025-11-15'))
console.log(payday.format('YYYY-MM-DD dddd'))
// "2025-11-28 Friday"
```

### Find First Monday After Date

```typescript
function getFirstMondayAfter(date: Daytime): Daytime {
  if (date.dayOfWeek() === 1) {
    return date.nextWeekday(1)
  }
  return date.nextWeekday(1)
}

const date = daytime('2025-11-15')
const firstMonday = getFirstMondayAfter(date)
console.log(firstMonday.format('YYYY-MM-DD dddd'))
// "2025-11-17 Monday"
```

### Get Weekday by Position

```typescript
function getWeekdayByPosition(year: number, month: number, n: number, weekday: number): Daytime {
  const monthDate = daytime(`${year}-${month}-01`)
  return monthDate.nthWeekday(n, weekday)
}

// Get 3rd Wednesday of November 2025
const wednesday = getWeekdayByPosition(2025, 11, 3, 3)
console.log(wednesday.format('YYYY-MM-DD dddd'))
// "2025-11-19 Wednesday"
```

### Weekend to Weekday

```typescript
function ensureWeekday(date: Daytime): Daytime {
  if (date.isWeekend()) {
    return date.nearestWeekday()
  }
  return date.clone()
}

const weekend = daytime('2025-11-15')
// Saturday

const weekday = ensureWeekday(weekend)
console.log(weekday.format('YYYY-MM-DD dddd'))
// "2025-11-14 Friday"
```

