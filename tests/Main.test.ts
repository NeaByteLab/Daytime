import { expect } from '@std/expect'
import { expectedTrue } from '@tests/shared/index.ts'
import type * as Types from '@neabyte/daytime'
import daytime from '@neabyte/daytime'

Deno.test('Index: should export TimeUnit type', () => {
  const unit: Types.TimeUnit = 'day'
  expect(unit).toEqual('day')
})

Deno.test('Index: should export DateInput type', () => {
  const date: Types.DateInput = new Date()
  expect(date instanceof Date).toBe(expectedTrue)
  const dateString: Types.DateInput = '2026-01-15'
  expect(typeof dateString).toEqual('string')
  const timestamp: Types.DateInput = 1705324800000
  expect(typeof timestamp).toEqual('number')
})

Deno.test('Index: should export Inclusivity type', () => {
  const inclusivity: Types.Inclusivity = '[]'
  expect(inclusivity).toEqual('[]')
})

Deno.test('Index: should export IDaytime interface', () => {
  const instance: Types.IDaytime = daytime()
  expect(typeof instance.add).toEqual('function')
  expect(typeof instance.subtract).toEqual('function')
  expect(typeof instance.format).toEqual('function')
  expect(typeof instance.toUTC).toEqual('function')
  expect(typeof instance.toISO).toEqual('function')
  expect(typeof instance.fromNow).toEqual('function')
  expect(typeof instance.toDate).toEqual('function')
  expect(typeof instance.valueOf).toEqual('function')
  expect(typeof instance.isBefore).toEqual('function')
  expect(typeof instance.isAfter).toEqual('function')
  expect(typeof instance.isSame).toEqual('function')
  expect(typeof instance.isSameOrBefore).toEqual('function')
  expect(typeof instance.isSameOrAfter).toEqual('function')
  expect(typeof instance.isBetween).toEqual('function')
  expect(typeof instance.isFuture).toEqual('function')
  expect(typeof instance.isPast).toEqual('function')
  expect(typeof instance.isSameDay).toEqual('function')
  expect(typeof instance.isSameMonth).toEqual('function')
  expect(typeof instance.isSameQuarter).toEqual('function')
  expect(typeof instance.isSameWeek).toEqual('function')
  expect(typeof instance.isSameYear).toEqual('function')
  expect(typeof instance.isThisMonth).toEqual('function')
  expect(typeof instance.isThisQuarter).toEqual('function')
  expect(typeof instance.isThisWeek).toEqual('function')
  expect(typeof instance.isThisYear).toEqual('function')
  expect(typeof instance.isToday).toEqual('function')
  expect(typeof instance.isTomorrow).toEqual('function')
  expect(typeof instance.isYesterday).toEqual('function')
})

Deno.test('Index: should allow importing all types', () => {
  const date: Types.DateInput = '2026-01-15'
  const unit: Types.TimeUnit = 'days'
  const instance = daytime(date)
  const result = instance.add(1, unit).isBefore(date, unit)
  expect(typeof result).toEqual('boolean')
})

Deno.test('Index: should export Inclusivity type for isBetween', () => {
  const date: Types.DateInput = '2026-01-15'
  const inc: Types.Inclusivity = '[)'
  const instance = daytime(date)
  const result = instance.isBetween('2026-01-14', '2026-01-16', undefined, inc)
  expect(typeof result).toEqual('boolean')
})

Deno.test('Utility: toDate - should return Date object', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).toDate()
  expect(result instanceof Date).toBe(expectedTrue)
})

Deno.test('Utility: toDate - should return correct timestamp', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).toDate()
  expect(result.getTime()).toEqual(date.getTime())
})

Deno.test('Utility: toDate - should return new Date instance (immutability)', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const instance = daytime(date)
  const result1 = instance.toDate()
  const result2 = instance.toDate()
  expect(result1).not.toBe(result2)
  expect(result1.getTime()).toEqual(result2.getTime())
})

Deno.test('Utility: toDate - should return independent Date object', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const instance = daytime(date)
  const result = instance.toDate()
  result.setTime(0)
  expect(instance.toDate().getTime()).toEqual(date.getTime())
})

Deno.test('Utility: toDate - should work after manipulation', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const modified = daytime(date).add(1, 'day').toDate()
  expect(modified.getTime()).toEqual(date.getTime() + 24 * 60 * 60 * 1000)
})

Deno.test('Utility: valueOf - should return timestamp number', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).valueOf()
  expect(typeof result).toEqual('number')
  expect(result).toEqual(date.getTime())
})

Deno.test('Utility: valueOf - should support numeric comparison', () => {
  const date1 = new Date('2026-01-15T10:00:00Z')
  const date2 = new Date('2026-01-15T12:00:00Z')
  const d1 = daytime(date1)
  const d2 = daytime(date2)
  expect(d1.valueOf()).toBeLessThan(d2.valueOf())
  expect(d2.valueOf()).toBeGreaterThan(d1.valueOf())
})

Deno.test('Utility: valueOf - should support equality comparison', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const d1 = daytime(date)
  const d2 = daytime(date)
  expect(d1.valueOf()).toEqual(d2.valueOf())
})

Deno.test('Utility: valueOf - should support sorting', () => {
  const dates = [
    new Date('2026-01-17T12:00:00Z'),
    new Date('2026-01-15T12:00:00Z'),
    new Date('2026-01-16T12:00:00Z')
  ]
  const sorted = dates.map(d => daytime(d)).sort((a, b) => a.valueOf() - b.valueOf())
  expect(sorted[0]?.valueOf()).toEqual(dates[1]?.getTime())
  expect(sorted[1]?.valueOf()).toEqual(dates[2]?.getTime())
  expect(sorted[2]?.valueOf()).toEqual(dates[0]?.getTime())
})

Deno.test('Utility: valueOf - should work with arithmetic operations', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const instance = daytime(date)
  const timestamp = instance.valueOf()
  const oneDayLater = timestamp + 24 * 60 * 60 * 1000
  expect(oneDayLater).toEqual(date.getTime() + 24 * 60 * 60 * 1000)
})

Deno.test('Utility: valueOf - should update after manipulation', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const original = daytime(date)
  const modified = original.add(2, 'hours')
  expect(modified.valueOf()).toEqual(original.valueOf() + 2 * 60 * 60 * 1000)
})

Deno.test('Utility: valueOf - should work with implicit conversion', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const instance = daytime(date)
  const result = Number(instance)
  expect(result).toEqual(date.getTime())
  expect(result).toEqual(instance.valueOf())
})

Deno.test('Query: convenience methods should be available from main export', () => {
  const now = new Date()
  const future = new Date(now.getTime() + 24 * 60 * 60 * 1000)
  const past = new Date(now.getTime() - 24 * 60 * 60 * 1000)
  expect(typeof daytime(now).isToday()).toEqual('boolean')
  expect(typeof daytime(future).isFuture()).toEqual('boolean')
  expect(typeof daytime(past).isPast()).toEqual('boolean')
  expect(typeof daytime(now).isThisWeek()).toEqual('boolean')
  expect(typeof daytime(now).isThisMonth()).toEqual('boolean')
  expect(typeof daytime(now).isThisYear()).toEqual('boolean')
  expect(typeof daytime(now).isThisQuarter()).toEqual('boolean')
})

Deno.test('Query: isSame convenience methods should work with main export', () => {
  const date1 = new Date('2026-01-15T10:00:00Z')
  const date2 = new Date('2026-01-15T14:00:00Z')
  expect(daytime(date1).isSameDay(date2)).toBe(expectedTrue)
  expect(daytime(date1).isSameMonth(date2)).toBe(expectedTrue)
  expect(daytime(date1).isSameYear(date2)).toBe(expectedTrue)
  expect(typeof daytime(date1).isSameWeek(date2)).toEqual('boolean')
  expect(typeof daytime(date1).isSameQuarter(date2)).toEqual('boolean')
})
