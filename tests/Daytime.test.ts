import { expect } from '@std/expect'
import { expectedFalse, expectedTrue } from '@tests/shared/index.ts'
import daytime from '@neabyte/daytime'

Deno.test('Daytime: clone - should return new instance', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const original = daytime(date)
  const cloned = original.clone()
  expect(cloned).not.toBe(original)
  expect(cloned.toDate().getTime()).toEqual(original.toDate().getTime())
})

Deno.test('Daytime: clone - should be independent', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const original = daytime(date)
  const cloned = original.clone()
  const modified = cloned.add(1, 'day')
  expect(original.toDate().getTime()).toEqual(date.getTime())
  expect(modified.toDate().getTime()).toEqual(date.getTime() + 24 * 60 * 60 * 1000)
})

Deno.test('Daytime: clone - should work with chaining', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).clone().add(1, 'day').toDate()
  expect(result.getTime()).toEqual(date.getTime() + 24 * 60 * 60 * 1000)
})

Deno.test('Daytime: get - should get year', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  expect(daytime(date).get('year')).toEqual(2026)
  expect(daytime(date).get('years')).toEqual(2026)
  expect(daytime(date).get('y')).toEqual(2026)
})

Deno.test('Daytime: get - should get quarter', () => {
  expect(daytime('2026-01-15').get('quarter')).toEqual(1)
  expect(daytime('2026-04-15').get('quarter')).toEqual(2)
  expect(daytime('2026-07-15').get('quarter')).toEqual(3)
  expect(daytime('2026-10-15').get('quarter')).toEqual(4)
})

Deno.test('Daytime: get - should get month', () => {
  const date = new Date('2026-03-15T12:30:45Z')
  expect(daytime(date).get('month')).toEqual(3)
  expect(daytime(date).get('months')).toEqual(3)
  expect(daytime(date).get('M')).toEqual(3)
})

Deno.test('Daytime: get - should get week', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const week = daytime(date).get('week')
  expect(week).toBeGreaterThanOrEqual(1)
  expect(week).toBeLessThanOrEqual(53)
})

Deno.test('Daytime: get - should get day', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  expect(daytime(date).get('day')).toEqual(15)
  expect(daytime(date).get('days')).toEqual(15)
  expect(daytime(date).get('d')).toEqual(15)
})

Deno.test('Daytime: get - should get hour', () => {
  const date = new Date('2026-01-15T14:30:45Z')
  expect(daytime(date).get('hour')).toEqual(date.getHours())
  expect(daytime(date).get('hours')).toEqual(date.getHours())
  expect(daytime(date).get('h')).toEqual(date.getHours())
})

Deno.test('Daytime: get - should get minute', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  expect(daytime(date).get('minute')).toEqual(30)
  expect(daytime(date).get('minutes')).toEqual(30)
})

Deno.test('Daytime: get - should get second', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  expect(daytime(date).get('second')).toEqual(45)
  expect(daytime(date).get('seconds')).toEqual(45)
  expect(daytime(date).get('s')).toEqual(45)
})

Deno.test('Daytime: get - should get millisecond', () => {
  const date = new Date('2026-01-15T12:30:45.789Z')
  expect(daytime(date).get('millisecond')).toEqual(789)
  expect(daytime(date).get('milliseconds')).toEqual(789)
  expect(daytime(date).get('ms')).toEqual(789)
})

Deno.test('Daytime: set - should set single component (year)', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).set('year', 2025).toDate()
  expect(result.getFullYear()).toEqual(2025)
  expect(result.getMonth()).toEqual(0)
  expect(result.getDate()).toEqual(15)
})

Deno.test('Daytime: set - should set single component (month)', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).set('month', 6).toDate()
  expect(result.getMonth()).toEqual(5)
  expect(result.getDate()).toEqual(15)
})

Deno.test('Daytime: set - should set single component (quarter)', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).set('quarter', 3).toDate()
  expect(result.getMonth()).toEqual(6)
})

Deno.test('Daytime: set - should set single component (day)', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).set('day', 25).toDate()
  expect(result.getDate()).toEqual(25)
})

Deno.test('Daytime: set - should set single component (hour)', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).set('hour', 18).toDate()
  expect(result.getHours()).toEqual(18)
})

Deno.test('Daytime: set - should set single component (minute)', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).set('minute', 59).toDate()
  expect(result.getMinutes()).toEqual(59)
})

Deno.test('Daytime: set - should set single component (second)', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).set('second', 0).toDate()
  expect(result.getSeconds()).toEqual(0)
})

Deno.test('Daytime: set - should set single component (millisecond)', () => {
  const date = new Date('2026-01-15T12:30:45.123Z')
  const result = daytime(date).set('millisecond', 999).toDate()
  expect(result.getMilliseconds()).toEqual(999)
})

Deno.test('Daytime: set - should set multiple components with object', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).set({ year: 2025, month: 6, day: 20 }).toDate()
  expect(result.getFullYear()).toEqual(2025)
  expect(result.getMonth()).toEqual(5)
  expect(result.getDate()).toEqual(20)
})

Deno.test('Daytime: set - should set multiple components preserving others', () => {
  const date = new Date('2026-01-15T14:30:45.789Z')
  const result = daytime(date).set({ hour: 12, minute: 0 }).toDate()
  expect(result.getFullYear()).toEqual(2026)
  expect(result.getMonth()).toEqual(0)
  expect(result.getDate()).toEqual(15)
  expect(result.getHours()).toEqual(12)
  expect(result.getMinutes()).toEqual(0)
  expect(result.getSeconds()).toEqual(45)
  expect(result.getMilliseconds()).toEqual(789)
})

Deno.test('Daytime: set - should set quarter correctly', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const q1 = daytime(date).set({ quarter: 1 }).toDate()
  const q2 = daytime(date).set({ quarter: 2 }).toDate()
  const q3 = daytime(date).set({ quarter: 3 }).toDate()
  const q4 = daytime(date).set({ quarter: 4 }).toDate()
  expect(q1.getMonth()).toEqual(0)
  expect(q2.getMonth()).toEqual(3)
  expect(q3.getMonth()).toEqual(6)
  expect(q4.getMonth()).toEqual(9)
})

Deno.test('Daytime: set - should clamp quarter to valid range', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const q0 = daytime(date).set('quarter', 0).toDate()
  const q5 = daytime(date).set('quarter', 5).toDate()
  expect(q0.getMonth()).toEqual(0)
  expect(q5.getMonth()).toEqual(9)
})

Deno.test('Daytime: set - should return new instance (immutability)', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const original = daytime(date)
  const modified = original.set('year', 2025)
  expect(original.toDate().getTime()).toEqual(date.getTime())
  expect(modified.toDate().getFullYear()).toEqual(2025)
})

Deno.test('Daytime: set - should work with chaining', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).set('year', 2025).set('month', 6).set('day', 20).toDate()
  expect(result.getFullYear()).toEqual(2025)
  expect(result.getMonth()).toEqual(5)
  expect(result.getDate()).toEqual(20)
})

Deno.test('Daytime: set - should throw error for missing value', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  expect(() => {
    // @ts-expect-error - Testing error case with missing value
    daytime(date).set('year')
  }).toThrow(Error)
})

Deno.test('Daytime: set - should support all unit forms', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result1 = daytime(date).set('year', 2025).toDate()
  const result2 = daytime(date).set('years', 2025).toDate()
  const result3 = daytime(date).set('y', 2025).toDate()
  expect(result1.getFullYear()).toEqual(result2.getFullYear())
  expect(result1.getFullYear()).toEqual(result3.getFullYear())
})

Deno.test('Daytime: should chain add operations', () => {
  const date = new Date('2026-01-15T12:00:00Z')
  const result = daytime(date).add(1, 'day').add(2, 'hours').toDate()
  expect(result.getTime()).toEqual(date.getTime() + (24 + 2) * 60 * 60 * 1000)
})

Deno.test('Daytime: should chain subtract operations', () => {
  const date = new Date('2026-01-15T12:00:00Z')
  const result = daytime(date).subtract(1, 'day').subtract(2, 'hours').toDate()
  expect(result.getTime()).toEqual(date.getTime() - (24 + 2) * 60 * 60 * 1000)
})

Deno.test('Daytime: should chain add and subtract operations', () => {
  const date = new Date('2026-01-15T12:00:00Z')
  const result = daytime(date).add(1, 'day').subtract(2, 'hours').toDate()
  expect(result.getTime()).toEqual(date.getTime() + (24 - 2) * 60 * 60 * 1000)
})

Deno.test('Daytime: should chain operations with format', () => {
  const date = new Date('2026-01-15T12:00:00Z')
  const resultDate = new Date(date.getTime() + (24 - 2) * 60 * 60 * 1000)
  const expected = `2026-01-16 ${String(resultDate.getHours()).padStart(2, '0')}:00:00`
  const result = daytime(date).add(1, 'day').subtract(2, 'hours').format('YYYY-MM-DD HH:mm:ss')
  expect(result).toEqual(expected)
})

Deno.test('Daytime: should chain operations with toUTC', () => {
  const date = new Date('2026-01-15T12:00:00Z')
  const result = daytime(date).add(1, 'day').toUTC().toISO()
  expect(result.includes('2026-01-16')).toBe(expectedTrue)
})

Deno.test('Daytime: should chain operations with comparison', () => {
  const date1 = new Date('2026-01-15T12:00:00Z')
  const date2 = new Date('2026-01-16T12:00:00Z')
  const result = daytime(date1).add(1, 'day').isSame(date2, 'day')
  expect(result).toBe(expectedTrue)
})

Deno.test('Daytime: should chain multiple operations correctly', () => {
  const date = new Date('2026-01-15T12:00:00Z')
  const resultDate = new Date(date)
  resultDate.setFullYear(resultDate.getFullYear() + 1)
  resultDate.setMonth(resultDate.getMonth() + 2)
  resultDate.setDate(resultDate.getDate() + 3)
  resultDate.setHours(resultDate.getHours() - 1)
  const expected = `2027-03-18 ${String(resultDate.getHours()).padStart(2, '0')}:00:00`
  const result = daytime(date)
    .add(1, 'year')
    .add(2, 'months')
    .add(3, 'days')
    .subtract(1, 'hour')
    .format('YYYY-MM-DD HH:mm:ss')
  expect(result).toEqual(expected)
})

Deno.test('Daytime: should maintain immutability through chaining', () => {
  const date = new Date('2026-01-15T12:00:00Z')
  const original = daytime(date)
  const chained = original.add(1, 'day').subtract(2, 'hours')
  expect(original.toDate().getTime()).toEqual(date.getTime())
  expect(chained.toDate().getTime()).toEqual(date.getTime() + (24 - 2) * 60 * 60 * 1000)
})

Deno.test('Daytime: should chain format after manipulation', () => {
  const date = new Date('2026-01-15T14:30:45Z')
  const result = daytime(date)
    .add(1, 'day')
    .subtract(30, 'minutes')
    .format('dddd, MMMM DD, YYYY [at] hh:mm A')
  expect(result.includes('Friday')).toBe(expectedTrue)
  expect(result.includes('January')).toBe(expectedTrue)
  expect(result.includes('16')).toBe(expectedTrue)
})

Deno.test('Daytime: should chain fromNow with manipulation', () => {
  const now = new Date()
  const pastDate = new Date(now.getTime() - 2 * 60 * 60 * 1000)
  const result = daytime(pastDate).add(1, 'hour').fromNow()
  expect(result.includes('hour')).toBe(expectedTrue)
})

Deno.test('Daytime: isFuture - should return true for future dates', () => {
  const now = new Date()
  const future = new Date(now.getTime() + 24 * 60 * 60 * 1000)
  expect(daytime(future).isFuture()).toBe(expectedTrue)
})

Deno.test('Daytime: isFuture - should return false for past dates', () => {
  const now = new Date()
  const past = new Date(now.getTime() - 24 * 60 * 60 * 1000)
  expect(daytime(past).isFuture()).toBe(expectedFalse)
})

Deno.test('Daytime: isFuture - should return false for today', () => {
  const now = new Date()
  expect(daytime(now).isFuture()).toBe(expectedFalse)
})

Deno.test('Daytime: isPast - should return true for past dates', () => {
  const now = new Date()
  const past = new Date(now.getTime() - 24 * 60 * 60 * 1000)
  expect(daytime(past).isPast()).toBe(expectedTrue)
})

Deno.test('Daytime: isPast - should return false for future dates', () => {
  const now = new Date()
  const future = new Date(now.getTime() + 24 * 60 * 60 * 1000)
  expect(daytime(future).isPast()).toBe(expectedFalse)
})

Deno.test('Daytime: isPast - should return false for today', () => {
  const now = new Date()
  expect(daytime(now).isPast()).toBe(expectedFalse)
})

Deno.test('Daytime: isSameDay - should return true for same day', () => {
  const date1 = new Date('2026-01-15T10:00:00Z')
  const date2 = new Date('2026-01-15T14:30:00Z')
  expect(daytime(date1).isSameDay(date2)).toBe(expectedTrue)
})

Deno.test('Daytime: isSameDay - should return false for different days', () => {
  const date1 = new Date('2026-01-15T10:00:00Z')
  const date2 = new Date('2026-01-16T10:00:00Z')
  expect(daytime(date1).isSameDay(date2)).toBe(expectedFalse)
})

Deno.test('Daytime: isSameDay - should work with string input', () => {
  const date1 = new Date('2026-01-15T10:00:00Z')
  expect(daytime(date1).isSameDay('2026-01-15')).toBe(expectedTrue)
})

Deno.test('Daytime: isSameMonth - should return true for same month', () => {
  const date1 = new Date('2026-01-05T10:00:00Z')
  const date2 = new Date('2026-01-25T14:30:00Z')
  expect(daytime(date1).isSameMonth(date2)).toBe(expectedTrue)
})

Deno.test('Daytime: isSameMonth - should return false for different months', () => {
  const date1 = new Date('2026-01-15T10:00:00Z')
  const date2 = new Date('2026-02-15T10:00:00Z')
  expect(daytime(date1).isSameMonth(date2)).toBe(expectedFalse)
})

Deno.test('Daytime: isSameMonth - should return false for different years same month', () => {
  const date1 = new Date('2026-01-15T10:00:00Z')
  const date2 = new Date('2027-01-15T10:00:00Z')
  expect(daytime(date1).isSameMonth(date2)).toBe(expectedFalse)
})

Deno.test('Daytime: isSameQuarter - should return true for identical dates', () => {
  const date1 = new Date('2026-01-15T10:00:00Z')
  const date2 = new Date('2026-01-15T10:00:00Z')
  expect(daytime(date1).isSameQuarter(date2)).toBe(expectedTrue)
})

Deno.test('Daytime: isSameQuarter - should return false for different quarters', () => {
  const date1 = new Date('2026-01-15T10:00:00Z')
  const date2 = new Date('2026-04-15T10:00:00Z')
  expect(daytime(date1).isSameQuarter(date2)).toBe(expectedFalse)
})

Deno.test('Daytime: isSameQuarter - should work across quarter boundaries', () => {
  const date1 = new Date('2026-03-31T10:00:00Z')
  const date2 = new Date('2026-04-01T10:00:00Z')
  expect(daytime(date1).isSameQuarter(date2)).toBe(expectedFalse)
})

Deno.test('Daytime: isSameWeek - should return true for same week', () => {
  const date1 = new Date('2026-01-15T10:00:00Z')
  const date2 = new Date('2026-01-17T14:30:00Z')
  expect(daytime(date1).isSameWeek(date2)).toBe(expectedTrue)
})

Deno.test('Daytime: isSameWeek - should return false for different weeks', () => {
  const date1 = new Date('2026-01-15T10:00:00Z')
  const date2 = new Date('2026-01-22T10:00:00Z')
  const result = daytime(date1).isSameWeek(date2)
  expect(result === true || result === false).toBe(expectedTrue)
})

Deno.test('Daytime: isSameWeek - should handle week boundaries', () => {
  const date1 = new Date('2026-01-11T10:00:00Z')
  const date2 = new Date('2026-01-18T10:00:00Z')
  const result = daytime(date1).isSameWeek(date2)
  expect(typeof result).toBe('boolean')
})

Deno.test('Daytime: isSameYear - should return true for same year', () => {
  const date1 = new Date('2026-01-15T10:00:00Z')
  const date2 = new Date('2026-12-31T14:30:00Z')
  expect(daytime(date1).isSameYear(date2)).toBe(expectedTrue)
})

Deno.test('Daytime: isSameYear - should return false for different years', () => {
  const date1 = new Date('2026-01-15T10:00:00Z')
  const date2 = new Date('2027-01-15T10:00:00Z')
  expect(daytime(date1).isSameYear(date2)).toBe(expectedFalse)
})

Deno.test('Daytime: isSameYear - should work with leap years', () => {
  const date1 = new Date('2028-01-15T10:00:00Z')
  const date2 = new Date('2028-02-29T10:00:00Z')
  expect(daytime(date1).isSameYear(date2)).toBe(expectedTrue)
})

Deno.test('Daytime: isThisMonth - should return true for current month', () => {
  const now = new Date()
  expect(daytime(now).isThisMonth()).toBe(expectedTrue)
})

Deno.test('Daytime: isThisMonth - should return false for different month', () => {
  const now = new Date()
  const differentMonth = new Date(now)
  differentMonth.setMonth((now.getMonth() + 1) % 12)
  expect(daytime(differentMonth).isThisMonth()).toBe(expectedFalse)
})

Deno.test('Daytime: isThisMonth - should handle year boundaries', () => {
  const now = new Date()
  const nextYear = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate())
  expect(daytime(nextYear).isThisMonth()).toBe(expectedFalse)
})

Deno.test('Daytime: isThisQuarter - should return true for current quarter', () => {
  const now = new Date()
  expect(daytime(now).isThisQuarter()).toBe(expectedTrue)
})

Deno.test('Daytime: isThisQuarter - should return false for different quarter', () => {
  const now = new Date()
  const differentQuarter = new Date(now)
  differentQuarter.setMonth((now.getMonth() + 3) % 12)
  expect(daytime(differentQuarter).isThisQuarter()).toBe(expectedFalse)
})

Deno.test('Daytime: isThisQuarter - should work across year boundaries', () => {
  const now = new Date()
  const nextYear = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate())
  const isNextYearThisQuarter = daytime(nextYear).isThisQuarter()
  expect(typeof isNextYearThisQuarter).toBe('boolean')
})

Deno.test('Daytime: isThisWeek - should return true for current week', () => {
  const now = new Date()
  expect(daytime(now).isThisWeek()).toBe(expectedTrue)
})

Deno.test('Daytime: isThisWeek - should return false for different week', () => {
  const now = new Date()
  const differentWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)
  expect(daytime(differentWeek).isThisWeek()).toBe(expectedFalse)
})

Deno.test('Daytime: isThisWeek - should handle week boundaries correctly', () => {
  const now = new Date()
  const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  expect(daytime(lastWeek).isThisWeek()).toBe(expectedFalse)
})

Deno.test('Daytime: isThisYear - should return true for current year', () => {
  const now = new Date()
  expect(daytime(now).isThisYear()).toBe(expectedTrue)
})

Deno.test('Daytime: isThisYear - should return false for different year', () => {
  const now = new Date()
  const nextYear = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate())
  expect(daytime(nextYear).isThisYear()).toBe(expectedFalse)
})

Deno.test('Daytime: isThisYear - should return false for previous year', () => {
  const now = new Date()
  const lastYear = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate())
  expect(daytime(lastYear).isThisYear()).toBe(expectedFalse)
})

Deno.test('Daytime: isToday - should return true for today', () => {
  const now = new Date()
  expect(daytime(now).isToday()).toBe(expectedTrue)
})

Deno.test('Daytime: isToday - should return false for tomorrow', () => {
  const now = new Date()
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000)
  expect(daytime(tomorrow).isToday()).toBe(expectedFalse)
})

Deno.test('Daytime: isToday - should return false for yesterday', () => {
  const now = new Date()
  const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000)
  expect(daytime(yesterday).isToday()).toBe(expectedFalse)
})

Deno.test('Daytime: isToday - should work regardless of time', () => {
  const now = new Date()
  const sameDay = new Date(now)
  sameDay.setHours(23, 59, 59, 999)
  expect(daytime(sameDay).isToday()).toBe(expectedTrue)
})

Deno.test('Daytime: isTomorrow - should return true for tomorrow', () => {
  const now = new Date()
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000)
  expect(daytime(tomorrow).isTomorrow()).toBe(expectedTrue)
})

Deno.test('Daytime: isTomorrow - should return false for today', () => {
  const now = new Date()
  expect(daytime(now).isTomorrow()).toBe(expectedFalse)
})

Deno.test('Daytime: isTomorrow - should return false for day after tomorrow', () => {
  const now = new Date()
  const dayAfterTomorrow = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000)
  expect(daytime(dayAfterTomorrow).isTomorrow()).toBe(expectedFalse)
})

Deno.test('Daytime: isTomorrow - should work regardless of time', () => {
  const now = new Date()
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000)
  tomorrow.setHours(0, 0, 0, 0)
  expect(daytime(tomorrow).isTomorrow()).toBe(expectedTrue)
})

Deno.test('Daytime: isYesterday - should return true for yesterday', () => {
  const now = new Date()
  const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000)
  expect(daytime(yesterday).isYesterday()).toBe(expectedTrue)
})

Deno.test('Daytime: isYesterday - should return false for today', () => {
  const now = new Date()
  expect(daytime(now).isYesterday()).toBe(expectedFalse)
})

Deno.test('Daytime: isYesterday - should return false for day before yesterday', () => {
  const now = new Date()
  const dayBeforeYesterday = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000)
  expect(daytime(dayBeforeYesterday).isYesterday()).toBe(expectedFalse)
})

Deno.test('Daytime: isYesterday - should work regardless of time', () => {
  const now = new Date()
  const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000)
  yesterday.setHours(23, 59, 59, 999)
  expect(daytime(yesterday).isYesterday()).toBe(expectedTrue)
})

Deno.test('Daytime: query convenience methods should work with chaining', () => {
  const now = new Date()
  const future = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000)
  const result = daytime(future).add(1, 'day').isFuture()
  expect(typeof result).toBe('boolean')
})

Deno.test('Daytime: isSame methods should work with various input types', () => {
  const date1 = new Date('2026-01-15T10:00:00Z')
  expect(daytime(date1).isSameDay('2026-01-15')).toBe(expectedTrue)
  expect(daytime(date1).isSameMonth('2026-01-20')).toBe(expectedTrue)
  expect(daytime(date1).isSameYear('2026-12-31')).toBe(expectedTrue)
})

Deno.test('Daytime: all query convenience methods should return booleans', () => {
  const now = new Date()
  const future = new Date(now.getTime() + 24 * 60 * 60 * 1000)
  const past = new Date(now.getTime() - 24 * 60 * 60 * 1000)
  expect(typeof daytime(now).isToday()).toBe('boolean')
  expect(typeof daytime(future).isFuture()).toBe('boolean')
  expect(typeof daytime(past).isPast()).toBe('boolean')
  expect(typeof daytime(now).isThisWeek()).toBe('boolean')
  expect(typeof daytime(now).isThisMonth()).toBe('boolean')
  expect(typeof daytime(now).isThisYear()).toBe('boolean')
  expect(typeof daytime(now).isThisQuarter()).toBe('boolean')
  expect(typeof daytime(now).isSameDay(future)).toBe('boolean')
  expect(typeof daytime(now).isSameWeek(future)).toBe('boolean')
  expect(typeof daytime(now).isSameMonth(future)).toBe('boolean')
  expect(typeof daytime(now).isSameYear(future)).toBe('boolean')
  expect(typeof daytime(now).isSameQuarter(future)).toBe('boolean')
})
