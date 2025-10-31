---
title: Relative Time
description: Get human-readable relative time strings
---

Get human-readable relative time, such as "2 hours ago" or "in 3 days".

## fromNow()

Get a human-readable relative time string. Compares the date to the current date/time:

```typescript
const date = daytime()

// Future dates
date.add(2, 'day').fromNow()
// "in 2 days"

date.add(3, 'hour').fromNow()
// "in 3 hours"

date.add(1, 'month').fromNow()
// "in 1 month"

date.add(5, 'minute').fromNow()
// "in 5 minutes"

// Past dates
date.subtract(2, 'hour').fromNow()
// "2 hours ago"

date.subtract(5, 'day').fromNow()
// "5 days ago"

date.subtract(2, 'week').fromNow()
// "2 weeks ago"

date.subtract(1, 'year').fromNow()
// "1 year ago"
```

## Examples

### Display Relative Time

```typescript
function formatRelativeTime(date: Daytime): string {
  return date.fromNow()
}

const event = daytime('2026-01-01')
console.log(`Event ${formatRelativeTime(event)}`)
// "Event in 1 month"

const past = daytime('2024-01-01')
console.log(`Event ${formatRelativeTime(past)}`)
// "Event 1 year ago"
```

### Time Ago/Until Display

```typescript
function getTimeDisplay(date: Daytime): string {
  if (date.isPast()) {
    return `${date.fromNow()} (${date.format('YYYY-MM-DD')})`
  } else if (date.isFuture()) {
    return `${date.fromNow()} (${date.format('YYYY-MM-DD')})`
  } else {
    return 'now'
  }
}

const past = daytime().subtract(5, 'day')
console.log(getTimeDisplay(past))
// "5 days ago (2025-10-27)"

const future = daytime().add(3, 'day')
console.log(getTimeDisplay(future))
// "in 3 days (2025-11-04)"
```

### Activity Timeline

```typescript
function formatActivityTime(date: Daytime): string {
  if (date.isToday()) {
    return `Today at ${date.format('HH:mm')}`
  } else if (date.isYesterday()) {
    return `Yesterday at ${date.format('HH:mm')}`
  } else if (date.isThisWeek()) {
    return `${date.format('dddd')} at ${date.format('HH:mm')}`
  } else {
    return date.fromNow()
  }
}

const activities = [
  daytime().subtract(1, 'hour'),
  daytime().subtract(1, 'day'),
  daytime().subtract(3, 'day'),
  daytime().subtract(2, 'week')
]

activities.forEach(activity => {
  console.log(formatActivityTime(activity))
})
// "Today at 23:12"
// "Yesterday at 00:12"
// "Monday at 00:12"
// "2 weeks ago"
```

### Locale-Aware Relative Time

```typescript
const date = daytime().subtract(2, 'hour')

// Relative time respects locale
date.locale('en').fromNow()
// "2 hours ago"

date.locale('id').fromNow()
// "2 jam yang lalu"

date.locale('ja').fromNow()
// "2時間前"
```

