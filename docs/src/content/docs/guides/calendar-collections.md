---
title: Calendar Collections
description: Get arrays of dates for months, weeks, and years
---

Get arrays of dates for months, weeks, and years.

## Month Collections

### getDaysInMonth()

Get an array of all days in the month:

```typescript
const month = daytime('2025-11-15')
const days = month.getDaysInMonth()

console.log(days.length)
// 30

console.log(days[0].format('YYYY-MM-DD'))
// "2025-11-01"

console.log(days[days.length - 1].format('YYYY-MM-DD'))
// "2025-11-30"
```

### daysInMonth()

Get the number of days in the month:

```typescript
const date = daytime('2025-11-15')
date.daysInMonth()
// 30

const feb = daytime('2025-02-15')
feb.daysInMonth()
// 28 (or 29 in leap year)
```

### weeksInMonth()

Get the number of weeks in the month:

```typescript
const date = daytime('2025-11-15')
date.weeksInMonth()
// 6
```

### getWeeksInMonth()

Get an array of all weeks in the month:

```typescript
const month = daytime('2025-11-15')
const weeks = month.getWeeksInMonth()
console.log(weeks.length)
// 6

// Each week is an array of days
weeks.forEach((week, i) => {
  const first = week[0]
  const last = week[week.length - 1]
  console.log(`Week ${i + 1}: ${first.format('MMM D')} - ${last.format('MMM D')}`)
})
```

## Year Collections

### getMonthsInYear()

Get an array of all months in the year:

```typescript
const year = daytime('2025-11-15')
const months = year.getMonthsInYear()
console.log(months.length)
// 12

console.log(months[0].format('MMMM'))
// "January"

console.log(months[11].format('MMMM'))
// "December"
```

### daysInYear()

Get the number of days in the year (365 or 366 for leap years):

```typescript
const date = daytime('2025-01-01')
date.daysInYear()
// 365

const leapYear = daytime('2024-01-01')
leapYear.daysInYear()
// 366
```

### weeksInYear()

Get the number of weeks in the year:

```typescript
const date = daytime('2025-01-01')
date.weeksInYear()
// 53 (at least 52)
```

## Examples

### Filter Business Days in Month

```typescript
const month = daytime('2025-11-15')
const days = month.getDaysInMonth()
const businessDays = days.filter(d => d.isBusinessDay())

console.log(`Total: ${days.length}`)
// Total: 30

console.log(`Business days: ${businessDays.length}`)
// Business days: 20

console.log(`Weekends: ${days.length - businessDays.length}`)
// Weekends: 10
```

### Get Calendar View

```typescript
function getCalendarView(date: Daytime) {
  const weeks = date.getWeeksInMonth()
  return weeks.map(week =>
    week.map(day => ({
      date: day.format('YYYY-MM-DD'),
      day: day.day(),
      dayOfWeek: day.dayOfWeek(),
      isBusinessDay: day.isBusinessDay(),
      isWeekend: day.isWeekend()
    }))
  )
}

const calendar = getCalendarView(daytime('2025-11-15'))
// Returns a 2D array representing the calendar
```

### Monthly Report Dates

```typescript
function getReportDates(year: number, month: number) {
  const monthDate = daytime(`${year}-${month}-01`)
  const days = monthDate.getDaysInMonth()
  return {
    monthStart: days[0],
    monthEnd: days[days.length - 1],
    businessDays: days.filter(d => d.isBusinessDay()),
    weekends: days.filter(d => d.isWeekend())
  }
}

const report = getReportDates(2025, 11)
console.log(`Start: ${report.monthStart.format('YYYY-MM-DD')}`)
// Start: 2025-11-01

console.log(`End: ${report.monthEnd.format('YYYY-MM-DD')}`)
// End: 2025-11-30

console.log(`Business days: ${report.businessDays.length}`)
// Business days: 20
```

### Quarter Overview

```typescript
function getQuarterMonths(date: Daytime) {
  const year = date.year()
  const quarter = date.quarter()
  const startMonth = (quarter - 1) * 3 + 1
  const months = []
  for (let i = 0; i < 3; i++) {
    months.push(daytime(`${year}-${startMonth + i}-01`))
  }
  return months
}

const q4Months = getQuarterMonths(daytime('2025-11-15'))
q4Months.forEach(month => {
  console.log(month.format('MMMM YYYY'))
})
// October 2025
// November 2025
// December 2025
```

### Year Overview

```typescript
function getYearOverview(date: Daytime) {
  const months = date.getMonthsInYear()
  return {
    year: date.year(),
    totalDays: date.daysInYear(),
    totalWeeks: date.weeksInYear(),
    isLeapYear: date.isLeapYear(),
    months: months.map(m => ({
      name: m.format('MMMM'),
      days: m.daysInMonth(),
      businessDays: m.businessDaysInMonth()
    }))
  }
}

const overview = getYearOverview(daytime('2025-01-15'))
console.log(overview)
// {
//   year: 2025,
//   totalDays: 365,
//   totalWeeks: 53,
//   isLeapYear: false,
//   months: [...]
// }
```

