---
title: Conversions
description: Convert Daytime instances to different formats and types
---

Convert dates to Date objects, ISO strings, Unix timestamps, arrays, and objects.

## To Native Types

### toDate()

Convert to a native Date object:

```typescript
const date = daytime('2025-11-15T14:30:45Z')
const nativeDate = date.toDate()

console.log(nativeDate instanceof Date)
// true

console.log(nativeDate.getTime())
// 1763217045000
```

### toString()

Convert to string representation:

```typescript
const date = daytime('2025-11-15T14:30:45Z')
date.toString()
// "Sat Nov 15 2025 21:30:45 GMT+0700 (Western Indonesia Time)"
```

### valueOf()

Get the primitive value (timestamp in milliseconds):

```typescript
const date = daytime('2025-11-15T14:30:45Z')
date.valueOf()
// 1763217045000
```

## To Standard Formats

### toISO()

Convert to ISO 8601 string:

```typescript
const date = daytime('2025-11-15T14:30:45.789Z')
date.toISO()
// "2025-11-15T14:30:45.789Z"
```

### toJSON()

Convert to JSON string (ISO 8601 format):

```typescript
const date = daytime('2025-11-15T14:30:45.789Z')
date.toJSON()
// "2025-11-15T14:30:45.789Z"

// Works with JSON.stringify
JSON.stringify({ date: daytime('2025-11-15') })
// '{"date":"2025-11-15T00:00:00.000Z"}'
```

### toUnix()

Convert to Unix timestamp (seconds since epoch):

```typescript
const date = daytime('2025-11-15T14:30:45Z')
date.toUnix()
// 1763217045
```

## To Structured Data

### toArray()

Convert to array of components. Returns values in local timezone:

```typescript
const date = daytime('2025-11-15T14:30:45.789Z')
date.toArray()
// [2025, 11, 15, 21, 30, 45, 789]
// [year, month, day, hour, minute, second, millisecond]
// Note: hour is 21 (local time) not 14 (UTC time)
```

### toObject()

Convert to object with components. Returns values in local timezone:

```typescript
const date = daytime('2025-11-15T14:30:45.789Z')
date.toObject()
// {
//   year: 2025,
//   month: 11,
//   day: 15,
//   hour: 21,
//   minute: 30,
//   second: 45,
//   millisecond: 789
// }
// Note: hour is 21 (local time, not UTC)
```

## Examples

### Serialize for API

```typescript
function serializeForAPI(date: Daytime) {
  return {
    iso: date.toISO(),
    unix: date.toUnix(),
    components: date.toObject()
  }
}

const data = serializeForAPI(daytime('2025-11-15T14:30:45Z'))
// {
//   iso: "2025-11-15T14:30:45.000Z",
//   unix: 1763217045,
//   components: { year: 2025, month: 11, ... }
// }
```

### Store in Database

```typescript
function prepareForDatabase(date: Daytime) {
  return {
    timestamp: date.toUnix(),
    iso_string: date.toISO(),
    native_date: date.toDate()
  }
}
```

### Extract Components

```typescript
const [year, month, day] = daytime('2025-11-15').toArray().slice(0, 3)
console.log(year, month, day)
// 2025 11 15

const { hour, minute } = daytime('2025-11-15T14:30:45Z').toObject()
console.log(hour, minute)
// 21 30
```

### Compare with Native Date

```typescript
const daytimeDate = daytime('2025-11-15T14:30:45Z')
const nativeDate = daytimeDate.toDate()

// Use native Date methods
console.log(nativeDate.getUTCHours())
// 14

// Compare
console.log(daytimeDate.valueOf() === nativeDate.getTime())
// true
```

