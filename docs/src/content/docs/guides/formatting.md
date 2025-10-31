---
title: Formatting
description: Format dates with tokens and patterns
---

Format dates with tokens and patterns.

## Basic Tokens

```typescript
const date = daytime('2025-11-15T14:30:45.789Z')

// Year
date.format('YYYY')
// "2025" (4-digit year)

date.format('YY')
// "25" (2-digit year)

// Month
date.format('MMMM')
// "November" (full month name)

date.format('MMM')
// "Nov" (short month name)

date.format('MM')
// "11" (2-digit month)

date.format('M')
// "11" (month number)

// Day
date.format('DD')
// "15" (2-digit day)

date.format('D')
// "15" (day number)

date.format('Do')
// "15th" (ordinal day)

// Hour
date.format('HH')
// "14" (24-hour, 2-digit)

date.format('H')
// "14" (24-hour)

date.format('hh')
// "02" (12-hour, 2-digit)

date.format('h')
// "2" (12-hour)

// Minute & Second
date.format('mm')
// "30" (2-digit minute)

date.format('m')
// "30" (minute)

date.format('ss')
// "45" (2-digit second)

date.format('s')
// "45" (second)

// Millisecond
date.format('SSS')
// "789" (3-digit milliseconds)

date.format('SS')
// "78" (2-digit milliseconds)

date.format('S')
// "7" (millisecond)
```

## Format Tokens

Additional format tokens for specific use cases.

### Unix Timestamps

Get Unix timestamps in seconds or milliseconds:

```typescript
const date = daytime('2025-11-15T14:30:45.789Z')
date.format('X')
// "1763217045" (Unix seconds)

date.format('x')
// "1763217045789" (Unix milliseconds)
```

### Timezone Offsets

Format timezone offsets with or without colon separator:
```typescript
const date = daytime('2025-11-15T14:30:45Z')
date.format('Z')
// "+07:00" (timezone with colon)

date.format('ZZ')
// "+0700" (timezone without colon)
```

### Ordinal Days

Format day numbers as ordinals (1st, 2nd, 3rd, etc.):
```typescript
const date1 = daytime('2025-01-01')
date1.format('Do')
// "1st"

const date2 = daytime('2025-01-02')
date2.format('Do')
// "2nd"

const date3 = daytime('2025-01-03')
date3.format('Do')
// "3rd"

const date10 = daytime('2025-01-10')
date10.format('Do')
// "10th" (handles special cases)

const date11 = daytime('2025-01-11')
date11.format('Do')
// "11th" (handles special cases)

const date21 = daytime('2025-01-21')
date21.format('Do')
// "21st"
```

## Day and Month Names

```typescript
const date = daytime('2025-11-15T14:30:45Z')

// Day names
date.format('dddd')
// "Saturday" (full day name)

date.format('ddd')
// "Sat" (short day name)

date.format('dd')
// "06" (2-digit day of week)

date.format('d')
// "6" (day of week, 0-6)

// Month names (locale-aware)
date.locale('en').format('MMMM')
// "November"

date.locale('id').format('MMMM')
// "November"

date.locale('ja').format('MMMM')
// "11月"
```

## AM/PM

```typescript
const date = daytime('2025-11-15T14:30:45Z')

date.format('A')
// "PM" (uppercase)

date.format('a')
// "pm" (lowercase)

date.format('HH:mm A')
// "14:30 PM"

date.format('hh:mm a')
// "02:30 pm"
```

## Combining Tokens

```typescript
const date = daytime('2025-11-15T14:30:45.789Z')

// Full date with time
date.format('YYYY-MM-DD HH:mm:ss')
// "2025-11-15 14:30:45"

// With ordinal and timezone
date.format('YYYY-MM-DD Do HH:mm:ss Z')
// "2025-11-15 15th 14:30:45 +07:00"

// Unix timestamp format
date.format('Unix: X (milliseconds: x)')
// "Unix: 1763217045 (milliseconds: 1763217045789)"

// Custom formats
date.format('dddd, MMMM Do YYYY [at] HH:mm:ss')
// "Saturday, November 15th 2025 at 14:30:45"

// Use brackets for literal text
date.format('YYYY[年]MM[月]DD[日]')
// "2025年11月15日"
```

## Common Patterns

```typescript
// ISO 8601
date.format('YYYY-MM-DDTHH:mm:ss.SSSZ')
// "2025-11-15T14:30:45.789+07:00"

// Readable
date.format('dddd, MMMM Do YYYY')
// "Saturday, November 15th 2025"

// Compact
date.format('YYYY-MM-DD HH:mm')
// "2025-11-15 14:30"

// Unix
date.format('X')
// "1763217045"

// Timezone aware
date.format('YYYY-MM-DD HH:mm:ss ZZ')
// "2025-11-15 14:30:45 +0700"
```

## Locale-Aware Formatting

Formatting respects the current locale:

```typescript
const date = daytime('2025-11-15T14:30:45Z')

date.locale('en').format('dddd, MMMM Do YYYY')
// "Saturday, November 15th 2025"

date.locale('id').format('dddd, MMMM Do YYYY')
// "Sabtu, November 15th 2025"

date.locale('ja').format('dddd, MMMM Do YYYY')
// "土曜日, 11月 15th 2025"

date.locale('fr').format('dddd, MMMM Do YYYY')
// "Samedi, Novembre 15th 2025"
```

## All Available Tokens

| Token | Example | Description |
|-------|---------|-------------|
| `YYYY` | 2025 | 4-digit year |
| `YY` | 25 | 2-digit year |
| `MMMM` | November | Full month name |
| `MMM` | Nov | Short month name |
| `MM` | 11 | 2-digit month |
| `M` | 11 | Month number |
| `DD` | 15 | 2-digit day |
| `D` | 15 | Day number |
| `Do` | 15th | Ordinal day |
| `dddd` | Saturday | Full day name |
| `ddd` | Sat | Short day name |
| `dd` | 06 | 2-digit day of week |
| `d` | 6 | Day of week (0-6) |
| `HH` | 14 | 24-hour, 2-digit |
| `H` | 14 | 24-hour |
| `hh` | 02 | 12-hour, 2-digit |
| `h` | 2 | 12-hour |
| `mm` | 30 | 2-digit minute |
| `m` | 30 | Minute |
| `ss` | 45 | 2-digit second |
| `s` | 45 | Second |
| `SSS` | 789 | 3-digit milliseconds |
| `SS` | 78 | 2-digit milliseconds |
| `S` | 7 | Millisecond |
| `A` | PM | Uppercase AM/PM |
| `a` | pm | Lowercase am/pm |
| `X` | 1763217045 | Unix seconds |
| `x` | 1763217045789 | Unix milliseconds |
| `Z` | +07:00 | Timezone with colon |
| `ZZ` | +0700 | Timezone without colon |

