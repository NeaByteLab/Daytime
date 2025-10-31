---
title: Timezone
description: Work with timezones and UTC conversions
---

Work with timezones, get timezone information, and convert between timezones.

## Getting Timezone Information

### timezone()

Get the current system timezone:

```typescript
const date = daytime('2025-11-15T14:30:45Z')
date.timezone()
// "Asia/Jakarta" (or your system timezone)
```

### timezoneOffset()

Get the timezone offset in minutes:

```typescript
const date = daytime('2025-11-15T14:30:45Z')
date.timezoneOffset()
// 420 (minutes, UTC+7)
```

### utcOffset()

Get the UTC offset in minutes (alias for timezoneOffset):

```typescript
const date = daytime('2025-11-15T14:30:45Z')
date.utcOffset()
// 420 (minutes)
```

## Timezone Checks

### isUTC()

Check if date is in UTC timezone:

```typescript
daytime().isUTC()
// false (unless system is UTC)
```

### isDST()

Check if date is in daylight saving time:

```typescript
daytime('2025-07-15').isDST()
// depends on timezone

daytime('2025-01-15').isDST()
// depends on timezone
```

## Timezone Conversions

### toUTC()

Convert to UTC timezone. Creates a date with UTC components:

```typescript
const date = daytime('2025-11-15T14:30:45')
// Local time 14:30

const utcDate = date.toUTC()
// Creates date with UTC-equivalent components

console.log(date.format('YYYY-MM-DD HH:mm:ss Z'))
// "2025-11-15 14:30:45 +07:00"

console.log(utcDate.format('YYYY-MM-DD HH:mm:ss Z'))
// "2025-11-15 14:30:45 +07:00"
// Note: format('Z') always shows system timezone offset
```

### local()

Convert to local timezone:

```typescript
const date = daytime('2025-11-15T14:30:45Z')
const localDate = date.local()

console.log(localDate.format('YYYY-MM-DD HH:mm:ss Z'))
// "2025-11-15 21:30:45 +07:00"
// UTC 14:30 converted to local time (UTC+7) = 21:30
```

### toTimezone()

Convert to a specific timezone using IANA timezone names:

```typescript
const date = daytime('2025-11-15T14:30:45')
// Local time 14:30

// Convert to America/New_York
const nyDate = date.toTimezone('America/New_York')
console.log(nyDate.hour())
// 9 (EST time equivalent)

console.log(nyDate.format('YYYY-MM-DD HH:mm:ss Z'))
// "2025-11-15 09:30:45 +07:00"
// Note: format('Z') shows system timezone, but hour() shows converted time

// Convert to Asia/Tokyo
const tokyoDate = date.toTimezone('Asia/Tokyo')
console.log(tokyoDate.hour())
// 23 (JST time equivalent)
```

## Formatting with Timezone

Use format tokens to display timezone information:

```typescript
const date = daytime('2025-11-15T14:30:45Z')

// Timezone with colon
date.format('Z')
// "+07:00"

// Timezone without colon
date.format('ZZ')
// "+0700"

// Full date with timezone
date.format('YYYY-MM-DD HH:mm:ss Z')
// "2025-11-15 21:30:45 +07:00"
```

## Examples

### Get Timezone Info

```typescript
function getTimezoneInfo(date: Daytime) {
  return {
    timezone: date.timezone(),
    offset: date.timezoneOffset(),
    offsetHours: Math.floor(date.timezoneOffset() / 60),
    isUTC: date.isUTC(),
    isDST: date.isDST(),
    formatted: date.format('Z')
  }
}

const info = getTimezoneInfo(daytime())
console.log(info)
// {
//   timezone: "Asia/Jakarta",
//   offset: 420,
//   offsetHours: 7,
//   isUTC: false,
//   isDST: false,
//   formatted: "+07:00"
// }
```

### Convert to Multiple Timezones

```typescript
function convertToTimezones(date: Daytime, timezones: string[]) {
  return timezones.map(tz => ({
    timezone: tz,
    date: date.toTimezone(tz),
    formatted: date.toTimezone(tz).format('YYYY-MM-DD HH:mm:ss Z')
  }))
}

const date = daytime('2025-11-15T14:30:45')
const converted = convertToTimezones(date, [
  'UTC',
  'America/New_York',
  'Asia/Tokyo',
  'Europe/London'
])
converted.forEach(item => {
  console.log(`${item.timezone}: hour=${item.date.hour()}, ${item.formatted}`)
  // Shows converted hour values and formatted strings
  // Note: format('Z') always shows system timezone
})
```

### Check DST Period

```typescript
function isDSTPeriod(date: Daytime): boolean {
  return date.isDST()
}

const summer = daytime('2025-07-15')
console.log('Summer DST:', isDSTPeriod(summer))
// Summer DST: true

const winter = daytime('2025-01-15')
console.log('Winter DST:', isDSTPeriod(winter))
// Winter DST: false
```

