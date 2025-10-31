import { expect } from '@std/expect'
import { expectedTrue } from '@tests/shared/index.ts'
import daytime from '@neabyte/daytime'

Deno.test('Relative: fromNow - should return "just now" for very recent dates', () => {
  const now = new Date()
  const date = new Date(now.getTime() - 500)
  expect(daytime(date).fromNow()).toEqual('just now')
})

Deno.test('Relative: fromNow - should format seconds ago correctly', () => {
  const now = new Date()
  const date1 = new Date(now.getTime() - 1000)
  const date2 = new Date(now.getTime() - 3000)
  const result1 = daytime(date1).fromNow()
  const result2 = daytime(date2).fromNow()
  expect(result1.includes('second')).toBe(expectedTrue)
  expect(result1.includes('1 second')).toBe(expectedTrue)
  expect(result2.includes('3 seconds')).toBe(expectedTrue)
})

Deno.test('Relative: fromNow - should format minutes ago correctly', () => {
  const now = new Date()
  const date1 = new Date(now.getTime() - 60 * 1000)
  const date2 = new Date(now.getTime() - 5 * 60 * 1000)
  const result1 = daytime(date1).fromNow()
  const result2 = daytime(date2).fromNow()
  expect(result1.includes('minute')).toBe(expectedTrue)
  expect(result1.includes('1 minute')).toBe(expectedTrue)
  expect(result2.includes('5 minutes')).toBe(expectedTrue)
})

Deno.test('Relative: fromNow - should format hours ago correctly', () => {
  const now = new Date()
  const date1 = new Date(now.getTime() - 60 * 60 * 1000)
  const date2 = new Date(now.getTime() - 3 * 60 * 60 * 1000)
  const result1 = daytime(date1).fromNow()
  const result2 = daytime(date2).fromNow()
  expect(result1.includes('hour')).toBe(expectedTrue)
  expect(result1.includes('1 hour')).toBe(expectedTrue)
  expect(result2.includes('3 hours')).toBe(expectedTrue)
})

Deno.test('Relative: fromNow - should format days ago correctly', () => {
  const now = new Date()
  const date1 = new Date(now.getTime() - 24 * 60 * 60 * 1000)
  const date2 = new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000)
  const result1 = daytime(date1).fromNow()
  const result2 = daytime(date2).fromNow()
  expect(result1.includes('day')).toBe(expectedTrue)
  expect(result1.includes('1 day')).toBe(expectedTrue)
  expect(result2.includes('5 days')).toBe(expectedTrue)
})

Deno.test('Relative: fromNow - should format weeks ago correctly', () => {
  const now = new Date()
  const date1 = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const date2 = new Date(now.getTime() - 3 * 7 * 24 * 60 * 60 * 1000)
  const result1 = daytime(date1).fromNow()
  const result2 = daytime(date2).fromNow()
  expect(result1.includes('week')).toBe(expectedTrue)
  expect(result1.includes('1 week')).toBe(expectedTrue)
  expect(result2.includes('3 weeks')).toBe(expectedTrue)
})

Deno.test('Relative: fromNow - should format months ago correctly', () => {
  const now = new Date()
  const date1 = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  const date2 = new Date(now.getTime() - 3 * 30 * 24 * 60 * 60 * 1000)
  const result1 = daytime(date1).fromNow()
  const result2 = daytime(date2).fromNow()
  expect(result1.includes('month')).toBe(expectedTrue)
  expect(result2.includes('months')).toBe(expectedTrue)
})

Deno.test('Relative: fromNow - should format years ago correctly', () => {
  const now = new Date()
  const date1 = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000)
  const date2 = new Date(now.getTime() - 2 * 365 * 24 * 60 * 60 * 1000)
  const result1 = daytime(date1).fromNow()
  const result2 = daytime(date2).fromNow()
  expect(result1.includes('year')).toBe(expectedTrue)
  expect(result2.includes('years')).toBe(expectedTrue)
})

Deno.test('Relative: fromNow - should format future dates correctly', () => {
  const now = new Date()
  const date1 = new Date(now.getTime() + 60 * 1000)
  const date2 = new Date(now.getTime() + 2 * 60 * 60 * 1000)
  const result1 = daytime(date1).fromNow()
  const result2 = daytime(date2).fromNow()
  expect(result1.includes('in')).toBe(expectedTrue)
  expect(result1.includes('second') || result1.includes('minute')).toBe(expectedTrue)
  expect(result2.includes('in')).toBe(expectedTrue)
  expect(result2.includes('hour')).toBe(expectedTrue)
})

Deno.test('Relative: fromNow - should use correct singular/plural forms', () => {
  const now = new Date()
  const date1 = new Date(now.getTime() - 1 * 60 * 1000)
  const date2 = new Date(now.getTime() - 2 * 60 * 1000)
  const result1 = daytime(date1).fromNow()
  const result2 = daytime(date2).fromNow()
  expect(result1.includes('1 minute')).toBe(expectedTrue)
  expect(result2.includes('2 minutes')).toBe(expectedTrue)
})
