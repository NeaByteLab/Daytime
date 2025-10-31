import { assertEquals } from '@std/assert'
import * as Helpers from '@helpers/index.ts'

Deno.test('Component: parseDateParts - should parse valid date parts', () => {
  const parts: Intl.DateTimeFormatPart[] = [
    { type: 'year', value: '2026' },
    { type: 'month', value: '01' },
    { type: 'day', value: '15' },
    { type: 'hour', value: '12' },
    { type: 'minute', value: '30' },
    { type: 'second', value: '45' }
  ]
  const result = Helpers.parseDateParts(parts)
  assertEquals(result, {
    year: 2026,
    month: 0,
    day: 15,
    hour: 12,
    minute: 30,
    second: 45
  })
})

Deno.test('Component: parseDateParts - should return null when year is missing', () => {
  const parts: Intl.DateTimeFormatPart[] = [
    { type: 'month', value: '01' },
    { type: 'day', value: '15' },
    { type: 'hour', value: '12' },
    { type: 'minute', value: '30' },
    { type: 'second', value: '45' }
  ]
  const result = Helpers.parseDateParts(parts)
  assertEquals(result, null)
})

Deno.test('Component: parseDateParts - should return null when month is missing', () => {
  const parts: Intl.DateTimeFormatPart[] = [
    { type: 'year', value: '2026' },
    { type: 'day', value: '15' },
    { type: 'hour', value: '12' },
    { type: 'minute', value: '30' },
    { type: 'second', value: '45' }
  ]
  const result = Helpers.parseDateParts(parts)
  assertEquals(result, null)
})

Deno.test('Component: parseDateParts - should return null when hour is missing', () => {
  const parts: Intl.DateTimeFormatPart[] = [
    { type: 'year', value: '2026' },
    { type: 'month', value: '01' },
    { type: 'day', value: '15' },
    { type: 'minute', value: '30' },
    { type: 'second', value: '45' }
  ]
  const result = Helpers.parseDateParts(parts)
  assertEquals(result, null)
})

Deno.test('Component: extractUTCDateComponents - should extract UTC components', () => {
  const date = new Date('2026-01-15T12:30:45.123Z')
  const result = Helpers.extractUTCDateComponents(date)
  assertEquals(result.year, 2026)
  assertEquals(result.month, 1)
  assertEquals(result.day, 15)
  assertEquals(result.hour, 12)
  assertEquals(result.minute, 30)
  assertEquals(result.second, 45)
  assertEquals(result.millisecond, 123)
})

Deno.test('Component: createUTCDate - should create UTC date', () => {
  const result = Helpers.createUTCDate(2026, 0, 15, 12, 30, 45, 123)
  assertEquals(result.getUTCFullYear(), 2026)
  assertEquals(result.getUTCMonth(), 0)
  assertEquals(result.getUTCDate(), 15)
  assertEquals(result.getUTCHours(), 12)
  assertEquals(result.getUTCMinutes(), 30)
  assertEquals(result.getUTCSeconds(), 45)
  assertEquals(result.getUTCMilliseconds(), 123)
})

Deno.test('Component: cloneDate - should create independent copy', () => {
  const original = new Date('2026-01-15T12:30:45Z')
  const cloned = Helpers.cloneDate(original)
  assertEquals(cloned.getTime(), original.getTime())
  cloned.setFullYear(2025)
  assertEquals(original.getFullYear(), 2026)
  assertEquals(cloned.getFullYear(), 2025)
})
