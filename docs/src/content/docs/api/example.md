---
title: API Reference
description: API documentation for Daytime
---

TypeScript type definitions for Daytime.

## Main Function

```typescript
function daytime(date?: DateInput, localeCode?: LocaleCode): Daytime

// Static methods
daytime.setDefaultLocale(code: LocaleCode): void
daytime.getDefaultLocale(): string
daytime.getAvailableLocales(): string[]
```

## Types

### DateInput

Union type for date input values:

```typescript
type DateInput = Date | string | number | { toDate(): Date }
```

### TimeUnit

Valid time unit strings:

```typescript
type TimeUnit =
  | 'millisecond' | 'milliseconds' | 'ms'
  | 'second' | 'seconds' | 's'
  | 'minute' | 'minutes' | 'm'
  | 'hour' | 'hours' | 'h'
  | 'day' | 'days' | 'd'
  | 'week' | 'weeks' | 'w'
  | 'isoWeek' | 'isoWeeks'
  | 'month' | 'months' | 'M'
  | 'quarter' | 'quarters' | 'Q'
  | 'year' | 'years' | 'y'
```

### LocaleCode

Locale code string (BCP 47 format):

```typescript
type LocaleCode = string
```

### Inclusivity

Inclusivity mode for date range comparisons:

```typescript
type Inclusivity = '(]' | '()' | '[)' | '[]'
```

## Interfaces

### IDaytime

Main interface defining all Daytime methods:

```typescript
interface IDaytime {
  // Manipulation
  add(value: number, unit: TimeUnit): IDaytime
  subtract(value: number, unit: TimeUnit): IDaytime
  startOf(unit: TimeUnit): IDaytime
  endOf(unit: TimeUnit): IDaytime
  set(unit: TimeUnit, value: number): IDaytime
  set(options: SetOptions): IDaytime
  clone(): IDaytime

  // Component Getters
  year(): number
  month(): number
  day(): number
  hour(): number
  minute(): number
  second(): number
  millisecond(): number
  dayOfWeek(): number
  dayOfYear(): number
  quarter(): number
  week(): number
  weekOfMonth(): number
  isoWeek(): number
  isoWeekday(): number
  isoWeekYear(): number
  get(unit: TimeUnit): number

  // Query Methods
  isBefore(other: DateInput, unit?: TimeUnit): boolean
  isAfter(other: DateInput, unit?: TimeUnit): boolean
  isSame(other: DateInput, unit?: TimeUnit): boolean
  isSameOrBefore(other: DateInput, unit?: TimeUnit): boolean
  isSameOrAfter(other: DateInput, unit?: TimeUnit): boolean
  isBetween(start: DateInput, end: DateInput, unit?: TimeUnit, inclusivity?: Inclusivity): boolean
  isSameDay(other: DateInput): boolean
  isSameMonth(other: DateInput): boolean
  isSameYear(other: DateInput): boolean
  isSameWeek(other: DateInput): boolean
  isSameQuarter(other: DateInput): boolean
  isToday(): boolean
  isYesterday(): boolean
  isTomorrow(): boolean
  isPast(): boolean
  isFuture(): boolean
  isThisWeek(): boolean
  isThisMonth(): boolean
  isThisYear(): boolean
  isThisQuarter(): boolean
  isBusinessDay(): boolean
  isWeekend(): boolean
  isLeapYear(): boolean
  isDST(): boolean
  isUTC(): boolean
  isValid(): boolean

  // Formatting
  format(pattern: string): string

  // Conversions
  toDate(): Date
  toISO(): string
  toJSON(): string
  toUnix(): number
  toString(): string
  valueOf(): number
  toArray(): [number, number, number, number, number, number, number]
  toObject(): DateComponents

  // Locale
  locale(): string
  locale(code: LocaleCode): IDaytime

  // Timezone
  timezone(): string
  timezoneOffset(): number
  utcOffset(): number
  toUTC(): IDaytime
  local(): IDaytime
  toTimezone(tz: string): IDaytime

  // Relative Time
  fromNow(): string

  // Differences
  diff(other: DateInput, unit: TimeUnit): number

  // Business Days
  nextBusinessDay(): IDaytime
  prevBusinessDay(): IDaytime
  previousBusinessDay(): IDaytime
  nearestWeekday(): IDaytime

  // Weekdays
  nextWeekday(weekday: number): IDaytime
  prevWeekday(weekday: number): IDaytime
  nthWeekday(n: number, weekday: number): IDaytime
  lastWeekday(weekday: number): IDaytime

  // Calendar Collections
  getDaysInMonth(): IDaytime[]
  getMonthsInYear(): IDaytime[]
  getWeeksInMonth(): IDaytime[][]

  // Counts
  daysInMonth(): number
  daysInYear(): number
  weeksInMonth(): number
  weeksInYear(): number
  businessDaysInMonth(): number
  businessDaysInYear(): number
  isoWeeksInYear(): number
}
```

### DateComponents

Object containing date component values:

```typescript
interface DateComponents {
  year: number
  month: number        // 1-12 (1-indexed)
  day: number          // 1-31
  hour: number         // 0-23
  minute: number       // 0-59
  second: number       // 0-59
  millisecond: number  // 0-999
}
```

### SetOptions

Options object for setting multiple date components:

```typescript
interface SetOptions {
  year?: number
  month?: number       // 1-12
  day?: number
  quarter?: number     // 1-4
  week?: number
  hour?: number        // 0-23
  minute?: number      // 0-59
  second?: number      // 0-59
  millisecond?: number // 0-999
}
```

### DateParts

Object containing parsed date parts (0-indexed months):

```typescript
interface DateParts {
  year: number
  month: number        // 0-11 (0-indexed)
  day: number
  hour: number
  minute: number
  second: number
}
```

### LocaleData

Locale data structure for internationalization:

```typescript
interface LocaleData {
  code: string
  dayNames: [string, string, string, string, string, string, string]
  dayNamesShort: [string, string, string, string, string, string, string]
  monthNames: [string, string, string, string, string, string, string, string, string, string, string, string]
  monthNamesShort: [string, string, string, string, string, string, string, string, string, string, string, string]
  relative: {
    future: string
    now: string
    past: string
    units: RelativeTimeUnits
  }
}
```

### RelativeTimeUnits

Relative time unit translations:

```typescript
interface RelativeTimeUnits {
  plural: {
    year: string
    month: string
    week: string
    day: string
    hour: string
    minute: string
    second: string
  }
  singular: {
    year: string
    month: string
    week: string
    day: string
    hour: string
    minute: string
    second: string
  }
}
```

## Usage

```typescript
import daytime, { type IDaytime, type TimeUnit, type DateInput } from '@neabyte/daytime'

// Type annotations
const date: IDaytime = daytime('2025-11-15')
const unit: TimeUnit = 'day'
const input: DateInput = new Date()

// With generic helper
function formatDate(input: DateInput): string {
  return daytime(input).format('YYYY-MM-DD')
}
```

## Class

```typescript
class Daytime implements IDaytime {
  constructor(input?: DateInput, localeCode?: LocaleCode)
  // ... all methods from IDaytime interface
}
```
