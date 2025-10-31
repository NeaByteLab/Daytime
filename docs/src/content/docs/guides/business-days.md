---
title: Business Days
description: Work with business days, weekends, and work calendars
---

Calculate business days (Monday through Friday). Saturday and Sunday are treated as weekends.

## Checking Business Days

### isBusinessDay()

Check if a date is a business day:

```typescript
daytime('2025-11-17').isBusinessDay()
// true (Monday)

daytime('2025-11-18').isBusinessDay()
// true (Tuesday)

daytime('2025-11-15').isBusinessDay()
// false (Saturday)

daytime('2025-11-16').isBusinessDay()
// false (Sunday)
```

### isWeekend()

Check if a date is a weekend:

```typescript
daytime('2025-11-15').isWeekend()
// true (Saturday)

daytime('2025-11-16').isWeekend()
// true (Sunday)

daytime('2025-11-17').isWeekend()
// false (Monday)
```

## Navigating Business Days

### nextBusinessDay()

Get the next business day. If the current date is a weekend, returns the following Monday:

```typescript
const saturday = daytime('2025-11-15')
// Saturday

const nextBiz = saturday.nextBusinessDay()
console.log(nextBiz.format('YYYY-MM-DD dddd'))
// "2025-11-17 Monday"

const friday = daytime('2025-11-14')
// Friday

const monday = friday.nextBusinessDay()
console.log(monday.format('YYYY-MM-DD dddd'))
// "2025-11-17 Monday"
```

### prevBusinessDay()

Get the previous business day. If the current date is a weekend, returns the previous Friday:

```typescript
const monday = daytime('2025-11-17')
// Monday

const prevBiz = monday.prevBusinessDay()
console.log(prevBiz.format('YYYY-MM-DD dddd'))
// "2025-11-14 Friday"

const sunday = daytime('2025-11-16')
// Sunday

const friday = sunday.prevBusinessDay()
console.log(friday.format('YYYY-MM-DD dddd'))
// "2025-11-14 Friday"
```

### previousBusinessDay()

Alias for `prevBusinessDay()`:

```typescript
const date = daytime('2025-11-17')
date.previousBusinessDay()
// Same as prevBusinessDay()
```

## Business Day Counts

### businessDaysInMonth()

Count business days in a month:

```typescript
const date = daytime('2025-11-15')
date.businessDaysInMonth()
// 20 (November 2025)
```

### businessDaysInYear()

Count business days in a year:

```typescript
const date = daytime('2025-01-01')
date.businessDaysInYear()
// 261 (2025)
```

## Filtering Business Days

Filter a collection of dates:

```typescript
const month = daytime('2025-11-15')
const allDays = month.getDaysInMonth()

// Get only business days
const businessDays = allDays.filter(d => d.isBusinessDay())
console.log(businessDays.length)
// 20

// Get only weekends
const weekends = allDays.filter(d => d.isWeekend())
console.log(weekends.length)
// 10
```

## Examples

### Calculate Deadline

```typescript
function getDeadline(startDate: Daytime, businessDays: number): Daytime {
  let current = startDate.clone()
  let count = 0
  while (count < businessDays) {
    current = current.nextBusinessDay()
    count++
  }
  return current
}

const start = daytime('2025-11-15')
const deadline = getDeadline(start, 5)
console.log(deadline.format('YYYY-MM-DD dddd'))
// "2025-11-21 Friday"
```

### Count Working Days in Range

```typescript
function countBusinessDays(start: Daytime, end: Daytime): number {
  const days = []
  let current = start.clone()
  while (current.isSameOrBefore(end)) {
    if (current.isBusinessDay()) {
      days.push(current.clone())
    }
    current = current.add(1, 'day')
  }
  return days.length
}

const start = daytime('2025-11-01')
const end = daytime('2025-11-30')
const workingDays = countBusinessDays(start, end)
console.log(workingDays)
// 20
```

### Find Next Work Day

```typescript
function getNextWorkDay(date: Daytime): Daytime {
  if (date.isBusinessDay()) {
    return date.clone()
  }
  return date.nextBusinessDay()
}

const weekend = daytime('2025-11-15')
const workDay = getNextWorkDay(weekend)
console.log(workDay.format('YYYY-MM-DD dddd'))
// "2025-11-17 Monday"
```

### Business Day Range

```typescript
function getBusinessDayRange(start: Daytime, count: number): Daytime[] {
  const days: Daytime[] = []
  let current = start.clone()
  if (!current.isBusinessDay()) {
    current = current.nextBusinessDay()
  }
  for (let i = 0; i < count; i++) {
    days.push(current.clone())
    current = current.nextBusinessDay()
  }
  return days
}

const start = daytime('2025-11-15')
const workDays = getBusinessDayRange(start, 5)
workDays.forEach(day => {
  console.log(day.format('YYYY-MM-DD dddd'))
})
// 2025-11-17 Monday
// 2025-11-18 Tuesday
// 2025-11-19 Wednesday
// 2025-11-20 Thursday
// 2025-11-21 Friday
```

### Chaining with Business Days

```typescript
const result = daytime('2025-11-15')
  // Saturday
  .nextBusinessDay()
  // Monday
  .add(1, 'week')
  // Next Monday
  .prevBusinessDay()
  // Friday
  .add(2, 'day')
  // Sunday
  .nextBusinessDay()
  // Monday
  .format('YYYY-MM-DD dddd')

console.log(result)
// "2025-11-24 Monday"
```

### Month Business Calendar

```typescript
function getMonthBusinessCalendar(date: Daytime) {
  const month = date.clone().startOf('month')
  const days = month.getDaysInMonth()
  return {
    totalDays: days.length,
    businessDays: days.filter(d => d.isBusinessDay()),
    weekends: days.filter(d => d.isWeekend()),
    firstBusinessDay: days.find(d => d.isBusinessDay()),
    lastBusinessDay: [...days].reverse().find(d => d.isBusinessDay())
  }
}

const calendar = getMonthBusinessCalendar(daytime('2025-11-15'))
console.log(`Total: ${calendar.totalDays}`)
// Total: 30

console.log(`Business: ${calendar.businessDays.length}`)
// Business: 20

console.log(`Weekends: ${calendar.weekends.length}`)
// Weekends: 10

console.log(`First: ${calendar.firstBusinessDay?.format('YYYY-MM-DD')}`)
// First: 2025-11-03

console.log(`Last: ${calendar.lastBusinessDay?.format('YYYY-MM-DD')}`)
// Last: 2025-11-28
```

