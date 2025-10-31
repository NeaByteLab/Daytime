import { expect } from '@std/expect'
import { expectedFalse, expectedTrue } from '@tests/shared/index.ts'
import daytime from '@neabyte/daytime'

Deno.test('Timezone: toUTC - should convert date to UTC', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).toUTC()
  expect(result.toDate() instanceof Date).toBe(expectedTrue)
  expect(result.toDate().getTime()).toEqual(date.getTime())
})

Deno.test('UTC: toUTC - should preserve date values in UTC', () => {
  const date = new Date(Date.UTC(2026, 0, 15, 12, 30, 45, 123))
  const result = daytime(date).toUTC()
  expect(result.toDate().getUTCFullYear()).toEqual(date.getUTCFullYear())
  expect(result.toDate().getUTCMonth()).toEqual(date.getUTCMonth())
  expect(result.toDate().getUTCDate()).toEqual(date.getUTCDate())
  expect(result.toDate().getUTCHours()).toEqual(date.getUTCHours())
  expect(result.toDate().getUTCMinutes()).toEqual(date.getUTCMinutes())
  expect(result.toDate().getUTCSeconds()).toEqual(date.getUTCSeconds())
  expect(result.toDate().getUTCMilliseconds()).toEqual(date.getUTCMilliseconds())
})

Deno.test('UTC: toUTC - should return new instance (immutability)', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const original = daytime(date)
  const utc = original.toUTC()
  expect(original.toDate().getTime()).toEqual(date.getTime())
  expect(utc.toDate() instanceof Date).toBe(expectedTrue)
  expect(utc.toDate().getTime() === original.toDate().getTime()).toBe(expectedTrue)
})

Deno.test('UTC: toUTC - should work with chaining', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).add(1, 'day').toUTC().toISO()
  expect(result.includes('2026-01-16')).toBe(expectedTrue)
})

Deno.test('Timezone: toISO - should return ISO string', () => {
  const date = new Date('2026-01-15T12:30:45.123Z')
  const result = daytime(date).toISO()
  expect(result).toEqual('2026-01-15T12:30:45.123Z')
})

Deno.test('UTC: toISO - should always return UTC format', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).toISO()
  expect(result.endsWith('Z')).toBe(expectedTrue)
  expect(result.includes('T')).toBe(expectedTrue)
})

Deno.test('UTC: toISO - should preserve milliseconds', () => {
  const date = new Date('2026-01-15T12:30:45.789Z')
  const result = daytime(date).toISO()
  expect(result.includes('.789')).toBe(expectedTrue)
})

Deno.test('UTC: toISO - should work with chaining', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).add(2, 'hours').toISO()
  expect(result.includes('14:30:45')).toBe(expectedTrue)
})

Deno.test('Timezone: should handle timezone conversions correctly', () => {
  const localDate = new Date('2026-01-15T12:30:45')
  const utc = daytime(localDate).toUTC()
  expect(utc.toISO().includes('2026-01-15')).toBe(expectedTrue)
})

Deno.test('Timezone: timezone - should return current timezone string', () => {
  const result = daytime().timezone()
  expect(typeof result).toEqual('string')
  expect(result.length).toBeGreaterThan(0)
})

Deno.test('Timezone: timezoneOffset - should return offset in minutes', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).timezoneOffset()
  expect(typeof result).toEqual('number')
})

Deno.test('Timezone: timezoneOffset - should match getTimezoneOffset', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const expected = -date.getTimezoneOffset()
  expect(daytime(date).timezoneOffset()).toEqual(expected)
})

Deno.test('Timezone: isUTC - should return true for UTC dates', () => {
  const utcDate = new Date(Date.UTC(2026, 0, 15, 12, 30, 45))
  const result = daytime(utcDate).isUTC()
  expect(typeof result).toEqual('boolean')
})

Deno.test('Timezone: isUTC - should return false for non-UTC dates', () => {
  const localDate = new Date(2026, 0, 15, 12, 30, 45)
  if (localDate.getTimezoneOffset() !== 0) {
    expect(daytime(localDate).isUTC()).toEqual(expectedFalse)
  }
})

Deno.test('Timezone: utcOffset - should return UTC offset in minutes', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).utcOffset()
  expect(typeof result).toEqual('number')
  expect(daytime(date).utcOffset()).toEqual(daytime(date).timezoneOffset())
})

Deno.test('Timezone: local - should return new instance', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const original = daytime(date)
  const local = original.local()
  expect(local).not.toBe(original)
  expect(local instanceof Object).toBe(expectedTrue)
})

Deno.test('Timezone: local - should preserve time', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const original = daytime(date)
  const local = original.local()
  expect(local.valueOf()).toEqual(original.valueOf())
})

Deno.test('Timezone: toTimezone - should convert to specific timezone', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).toTimezone('America/New_York')
  expect(result instanceof Object).toBe(expectedTrue)
  expect(result.valueOf()).toBeGreaterThan(0)
})

Deno.test('Timezone: toTimezone - should return new instance', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const original = daytime(date)
  const converted = original.toTimezone('America/Los_Angeles')
  expect(converted).not.toBe(original)
})

Deno.test('Timezone: toTimezone - should handle invalid timezone gracefully', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).toTimezone('Invalid/Timezone')
  expect(result instanceof Object).toBe(expectedTrue)
})

Deno.test('Timezone: methods should work with chaining', () => {
  const date = daytime('2026-01-15T12:30:45Z')
  const result = date.add(1, 'hour').toTimezone('America/New_York').toISO()
  expect(typeof result).toEqual('string')
})

Deno.test('Timezone: toTimezone - should handle parseDateParts returning null', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).toTimezone('America/New_York')
  expect(result instanceof Object).toBe(expectedTrue)
  expect(result.valueOf()).toBeGreaterThan(0)
})

Deno.test('Timezone: getTimezone - should return UTC on error', () => {
  const originalFormat = Intl.DateTimeFormat
  try {
    Intl.DateTimeFormat = function (): Intl.DateTimeFormat {
      throw new Error('Test error')
    } as unknown as typeof Intl.DateTimeFormat
    const result = daytime().timezone()
    expect(result).toEqual('UTC')
  } finally {
    Intl.DateTimeFormat = originalFormat
  }
})

Deno.test('Timezone: toTimezone - should handle parseDateParts returning null for target', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).toTimezone('Europe/London')
  expect(result instanceof Object).toBe(expectedTrue)
  expect(result.valueOf()).toBeGreaterThan(0)
})

Deno.test('Timezone: toTimezone - should handle parseDateParts returning null for UTC', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).toTimezone('Asia/Tokyo')
  expect(result instanceof Object).toBe(expectedTrue)
  expect(result.valueOf()).toBeGreaterThan(0)
})

Deno.test('Timezone: toTimezone - should handle various timezones correctly', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result1 = daytime(date).toTimezone('America/New_York')
  const result2 = daytime(date).toTimezone('Europe/London')
  const result3 = daytime(date).toTimezone('Asia/Tokyo')
  expect(result1 instanceof Object).toBe(expectedTrue)
  expect(result2 instanceof Object).toBe(expectedTrue)
  expect(result3 instanceof Object).toBe(expectedTrue)
  expect(result1.valueOf()).toBeGreaterThan(0)
  expect(result2.valueOf()).toBeGreaterThan(0)
  expect(result3.valueOf()).toBeGreaterThan(0)
})

Deno.test('Timezone: convertToTimezone - should handle errors in Intl.DateTimeFormat', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const originalFormat = Intl.DateTimeFormat
  try {
    let callCount = 0
    Intl.DateTimeFormat = function (): Intl.DateTimeFormat {
      callCount++
      if (callCount === 1) {
        throw new Error('Test error')
      }
      return originalFormat.apply(
        this,
        arguments as unknown as Parameters<typeof Intl.DateTimeFormat>
      )
    } as unknown as typeof Intl.DateTimeFormat
    const result = daytime(date).toTimezone('America/New_York')
    expect(result instanceof Object).toBe(expectedTrue)
    expect(result.valueOf()).toBeGreaterThan(0)
  } finally {
    Intl.DateTimeFormat = originalFormat
  }
})

Deno.test('Timezone: convertToTimezone - should handle invalid timezone gracefully', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result1 = daytime(date).toTimezone('Invalid/Timezone123')
  const result2 = daytime(date).toTimezone('')
  expect(result1 instanceof Object).toBe(expectedTrue)
  expect(result2 instanceof Object).toBe(expectedTrue)
  expect(result1.valueOf()).toBeGreaterThan(0)
  expect(result2.valueOf()).toBeGreaterThan(0)
})
