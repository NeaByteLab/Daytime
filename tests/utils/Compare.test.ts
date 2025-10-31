import { expect } from '@std/expect'
import { expectedFalse, expectedTrue } from '@tests/shared/index.ts'
import daytime from '@neabyte/daytime'

Deno.test('Compare: isBefore - should return true when date is before other', () => {
  const date1 = new Date('2026-01-15T10:00:00Z')
  const date2 = new Date('2026-01-15T12:00:00Z')
  expect(daytime(date1).isBefore(date2)).toBe(expectedTrue)
  expect(daytime(date2).isBefore(date1)).toBe(expectedFalse)
})

Deno.test('Compare: isBefore - should work with unit granularity (day)', () => {
  const date1 = new Date('2026-01-15T10:00:00Z')
  const date2 = new Date('2026-01-15T12:00:00Z')
  const date3 = new Date('2026-01-16T10:00:00Z')
  expect(daytime(date1).isBefore(date2, 'day')).toBe(expectedFalse)
  expect(daytime(date1).isBefore(date3, 'day')).toBe(expectedTrue)
})

Deno.test('Compare: isAfter - should return true when date is after other', () => {
  const date1 = new Date('2026-01-15T12:00:00Z')
  const date2 = new Date('2026-01-15T10:00:00Z')
  expect(daytime(date1).isAfter(date2)).toBe(expectedTrue)
  expect(daytime(date2).isAfter(date1)).toBe(expectedFalse)
})

Deno.test('Compare: isAfter - should work with unit granularity (month)', () => {
  const date1 = new Date('2026-01-15T10:00:00Z')
  const date2 = new Date('2026-02-10T12:00:00Z')
  expect(daytime(date2).isAfter(date1, 'month')).toBe(expectedTrue)
  expect(daytime(date1).isAfter(date2, 'month')).toBe(expectedFalse)
})

Deno.test('Compare: isSame - should return true for identical dates', () => {
  const date1 = new Date('2026-01-15T12:00:00Z')
  const date2 = new Date('2026-01-15T12:00:00Z')
  expect(daytime(date1).isSame(date2)).toBe(expectedTrue)
})

Deno.test('Compare: isSame - should return false for different dates', () => {
  const date1 = new Date('2026-01-15T12:00:00Z')
  const date2 = new Date('2026-01-15T12:00:01Z')
  expect(daytime(date1).isSame(date2)).toBe(expectedFalse)
})

Deno.test('Compare: isSame - should work with unit granularity (day)', () => {
  const date1 = new Date('2026-01-15T10:00:00Z')
  const date2 = new Date('2026-01-15T12:00:00Z')
  expect(daytime(date1).isSame(date2, 'day')).toBe(expectedTrue)
  expect(daytime(date1).isSame(date2, 'hour')).toBe(expectedFalse)
})

Deno.test('Compare: isSame - should work with different units', () => {
  const date1 = new Date('2026-01-15T10:30:00Z')
  const date2 = new Date('2026-01-15T10:45:00Z')
  expect(daytime(date1).isSame(date2, 'hour')).toBe(expectedTrue)
  expect(daytime(date1).isSame(date2, 'minute')).toBe(expectedFalse)
  expect(daytime(date1).isSame(date2, 'year')).toBe(expectedTrue)
  expect(daytime(date1).isSame(date2, 'month')).toBe(expectedTrue)
})

Deno.test('Compare: isSameOrBefore - should return true when same', () => {
  const date1 = new Date('2026-01-15T12:00:00Z')
  const date2 = new Date('2026-01-15T12:00:00Z')
  expect(daytime(date1).isSameOrBefore(date2)).toBe(expectedTrue)
})

Deno.test('Compare: isSameOrBefore - should return true when before', () => {
  const date1 = new Date('2026-01-15T10:00:00Z')
  const date2 = new Date('2026-01-15T12:00:00Z')
  expect(daytime(date1).isSameOrBefore(date2)).toBe(expectedTrue)
  expect(daytime(date2).isSameOrBefore(date1)).toBe(expectedFalse)
})

Deno.test('Compare: isSameOrAfter - should return true when same', () => {
  const date1 = new Date('2026-01-15T12:00:00Z')
  const date2 = new Date('2026-01-15T12:00:00Z')
  expect(daytime(date1).isSameOrAfter(date2)).toBe(expectedTrue)
})

Deno.test('Compare: isSameOrAfter - should return true when after', () => {
  const date1 = new Date('2026-01-15T12:00:00Z')
  const date2 = new Date('2026-01-15T10:00:00Z')
  expect(daytime(date1).isSameOrAfter(date2)).toBe(expectedTrue)
  expect(daytime(date2).isSameOrAfter(date1)).toBe(expectedFalse)
})

Deno.test('Compare: isBetween - should return true when date is between range (inclusive)', () => {
  const date = new Date('2026-01-15T12:00:00Z')
  const start = new Date('2026-01-15T10:00:00Z')
  const end = new Date('2026-01-15T14:00:00Z')
  expect(daytime(date).isBetween(start, end)).toBe(expectedTrue)
  expect(daytime(start).isBetween(start, end)).toBe(expectedTrue)
  expect(daytime(end).isBetween(start, end)).toBe(expectedTrue)
})

Deno.test('Compare: isBetween - should return false when date is outside range', () => {
  const date1 = new Date('2026-01-15T09:00:00Z')
  const date2 = new Date('2026-01-15T15:00:00Z')
  const start = new Date('2026-01-15T10:00:00Z')
  const end = new Date('2026-01-15T14:00:00Z')
  expect(daytime(date1).isBetween(start, end)).toBe(expectedFalse)
  expect(daytime(date2).isBetween(start, end)).toBe(expectedFalse)
})

Deno.test('Compare: isBetween - should work with inclusivity options', () => {
  const start = new Date('2026-01-15T10:00:00Z')
  const end = new Date('2026-01-15T14:00:00Z')
  expect(daytime(start).isBetween(start, end, undefined, '[]')).toBe(expectedTrue)
  expect(daytime(start).isBetween(start, end, undefined, '()')).toBe(expectedFalse)
  expect(daytime(start).isBetween(start, end, undefined, '[)')).toBe(expectedTrue)
  expect(daytime(start).isBetween(start, end, undefined, '(]')).toBe(expectedFalse)
  expect(daytime(end).isBetween(start, end, undefined, '[]')).toBe(expectedTrue)
  expect(daytime(end).isBetween(start, end, undefined, '()')).toBe(expectedFalse)
  expect(daytime(end).isBetween(start, end, undefined, '[)')).toBe(expectedFalse)
  expect(daytime(end).isBetween(start, end, undefined, '(]')).toBe(expectedTrue)
})

Deno.test('Compare: isBetween - should work with unit granularity', () => {
  const start = new Date('2026-01-14T10:00:00Z')
  const end = new Date('2026-01-16T14:00:00Z')
  const date = new Date('2026-01-15T12:00:00Z')
  expect(daytime(date).isBetween(start, end, 'day')).toBe(expectedTrue)
  expect(daytime(start).isBetween(start, end, 'hour')).toBe(expectedTrue)
})

Deno.test('Compare: should work with different input types', () => {
  const date1 = new Date('2026-01-15T12:00:00Z')
  const date2 = '2026-01-15T14:00:00Z'
  const date3 = date1.getTime()
  expect(daytime(date1).isBefore(date2)).toBe(expectedTrue)
  expect(daytime(date1).isBefore(date3)).toBe(expectedFalse)
  expect(daytime(date1).isAfter(date2)).toBe(expectedFalse)
  expect(daytime(date1).isAfter(date3)).toBe(expectedFalse)
})

Deno.test('Compare: should work with year unit', () => {
  const date1 = new Date('2026-01-15T12:00:00Z')
  const date2 = new Date('2026-12-25T12:00:00Z')
  const date3 = new Date('2027-01-15T12:00:00Z')
  expect(daytime(date1).isSame(date2, 'year')).toBe(expectedTrue)
  expect(daytime(date1).isSame(date3, 'year')).toBe(expectedFalse)
  expect(daytime(date1).isBefore(date3, 'year')).toBe(expectedTrue)
})

Deno.test('Compare: should work with month unit', () => {
  const date1 = new Date('2026-01-15T12:00:00Z')
  const date2 = new Date('2026-01-20T12:00:00Z')
  const date3 = new Date('2026-02-15T12:00:00Z')
  expect(daytime(date1).isSame(date2, 'month')).toBe(expectedTrue)
  expect(daytime(date1).isSame(date3, 'month')).toBe(expectedFalse)
  expect(daytime(date1).isBefore(date3, 'month')).toBe(expectedTrue)
})

Deno.test('Compare: should work with week unit', () => {
  const date1 = new Date('2026-01-15T12:00:00Z')
  const date2 = new Date('2026-01-17T12:00:00Z')
  const date3 = new Date('2026-01-22T12:00:00Z')
  expect(daytime(date1).isSame(date2, 'week')).toBe(expectedTrue)
  expect(daytime(date1).isSame(date3, 'week')).toBe(expectedFalse)
})
