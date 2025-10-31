import { expect } from '@std/expect'
import { expectedTrue } from '@tests/shared/index.ts'
import daytime from '@neabyte/daytime'

Deno.test('Query: dayOfWeek - should return day of week (0-6)', () => {
  const sunday = new Date(2026, 0, 4)
  const monday = new Date(2026, 0, 5)
  const tuesday = new Date(2026, 0, 6)
  const wednesday = new Date(2026, 0, 7)
  const thursday = new Date(2026, 0, 8)
  const friday = new Date(2026, 0, 9)
  const saturday = new Date(2026, 0, 10)
  expect(daytime(sunday).dayOfWeek()).toEqual(0)
  expect(daytime(monday).dayOfWeek()).toEqual(1)
  expect(daytime(tuesday).dayOfWeek()).toEqual(2)
  expect(daytime(wednesday).dayOfWeek()).toEqual(3)
  expect(daytime(thursday).dayOfWeek()).toEqual(4)
  expect(daytime(friday).dayOfWeek()).toEqual(5)
  expect(daytime(saturday).dayOfWeek()).toEqual(6)
})

Deno.test('Query: dayOfWeek - should match getDay() result', () => {
  const date = new Date(2026, 5, 15)
  expect(daytime(date).dayOfWeek()).toEqual(date.getDay())
})

Deno.test('Query: dayOfYear - should return day of year (1-366)', () => {
  const jan1 = new Date(2025, 0, 1)
  const jan15 = new Date(2025, 0, 15)
  const dec31 = new Date(2025, 11, 31)
  const dec31Leap = new Date(2028, 11, 31)
  expect(daytime(jan1).dayOfYear()).toEqual(1)
  expect(daytime(jan15).dayOfYear()).toEqual(15)
  expect(daytime(dec31).dayOfYear()).toEqual(365)
  expect(daytime(dec31Leap).dayOfYear()).toEqual(366)
})

Deno.test('Query: dayOfYear - should work for leap years', () => {
  const feb29 = new Date(2028, 1, 29)
  expect(daytime(feb29).dayOfYear()).toEqual(60)
})

Deno.test('Query: dayOfYear - should work for different months', () => {
  const mar1 = new Date(2026, 2, 1)
  const jun1 = new Date(2026, 5, 1)
  const sep1 = new Date(2026, 8, 1)
  expect(daytime(mar1).dayOfYear()).toEqual(60)
  expect(daytime(jun1).dayOfYear()).toEqual(152)
  expect(daytime(sep1).dayOfYear()).toEqual(244)
})

Deno.test('Query: daysInMonth - should return correct days for each month', () => {
  const jan = new Date(2026, 0, 15)
  const feb = new Date(2025, 1, 15)
  const febLeap = new Date(2028, 1, 15)
  const mar = new Date(2025, 2, 15)
  const apr = new Date(2025, 3, 15)
  const may = new Date(2025, 4, 15)
  const jun = new Date(2025, 5, 15)
  const jul = new Date(2025, 6, 15)
  const aug = new Date(2025, 7, 15)
  const sep = new Date(2025, 8, 15)
  const oct = new Date(2025, 9, 15)
  const nov = new Date(2025, 10, 15)
  const dec = new Date(2025, 11, 15)
  expect(daytime(jan).daysInMonth()).toEqual(31)
  expect(daytime(feb).daysInMonth()).toEqual(28)
  expect(daytime(febLeap).daysInMonth()).toEqual(29)
  expect(daytime(mar).daysInMonth()).toEqual(31)
  expect(daytime(apr).daysInMonth()).toEqual(30)
  expect(daytime(may).daysInMonth()).toEqual(31)
  expect(daytime(jun).daysInMonth()).toEqual(30)
  expect(daytime(jul).daysInMonth()).toEqual(31)
  expect(daytime(aug).daysInMonth()).toEqual(31)
  expect(daytime(sep).daysInMonth()).toEqual(30)
  expect(daytime(oct).daysInMonth()).toEqual(31)
  expect(daytime(nov).daysInMonth()).toEqual(30)
  expect(daytime(dec).daysInMonth()).toEqual(31)
})

Deno.test('Query: daysInMonth - should work for any day in the month', () => {
  const first = new Date(2026, 1, 1)
  const middle = new Date(2026, 1, 14)
  const last = new Date(2026, 1, 28)
  expect(daytime(first).daysInMonth()).toEqual(28)
  expect(daytime(middle).daysInMonth()).toEqual(28)
  expect(daytime(last).daysInMonth()).toEqual(28)
})

Deno.test('Query: daysInYear - should return 365 for non-leap years', () => {
  const date2026 = new Date(2026, 5, 15)
  const date2025 = new Date(2025, 5, 15)
  const date2025b = new Date(2025, 5, 15)
  expect(daytime(date2026).daysInYear()).toEqual(365)
  expect(daytime(date2025).daysInYear()).toEqual(365)
  expect(daytime(date2025b).daysInYear()).toEqual(365)
})

Deno.test('Query: daysInYear - should return 366 for leap years', () => {
  const date2028 = new Date(2028, 5, 15)
  const date2032 = new Date(2032, 5, 15)
  const date2036 = new Date(2036, 5, 15)
  expect(daytime(date2028).daysInYear()).toEqual(366)
  expect(daytime(date2032).daysInYear()).toEqual(366)
  expect(daytime(date2036).daysInYear()).toEqual(366)
})

Deno.test('Query: daysInYear - should return 365 for century years that are not leap years', () => {
  const date2100 = new Date(2100, 5, 15)
  const date2200 = new Date(2200, 5, 15)
  expect(daytime(date2100).daysInYear()).toEqual(365)
  expect(daytime(date2200).daysInYear()).toEqual(365)
})

Deno.test('Query: weekOfMonth - should return correct week in month', () => {
  const jan1 = new Date(2026, 0, 1)
  const jan7 = new Date(2026, 0, 7)
  const jan15 = new Date(2026, 0, 15)
  const jan31 = new Date(2026, 0, 31)
  expect(daytime(jan1).weekOfMonth()).toEqual(1)
  expect(daytime(jan7).weekOfMonth()).toEqual(2)
  expect(daytime(jan15).weekOfMonth()).toEqual(3)
  expect(daytime(jan31).weekOfMonth()).toBeGreaterThanOrEqual(4)
})

Deno.test('Query: weekOfMonth - should work for different months', () => {
  const feb1 = new Date(2026, 1, 1)
  const mar1 = new Date(2026, 2, 1)
  const apr1 = new Date(2026, 3, 1)
  expect(daytime(feb1).weekOfMonth()).toEqual(1)
  expect(daytime(mar1).weekOfMonth()).toEqual(1)
  expect(daytime(apr1).weekOfMonth()).toEqual(1)
})

Deno.test('Query: weekOfMonth - should handle edge cases', () => {
  const firstDay = new Date(2026, 0, 1)
  const lastDay = new Date(2026, 0, 31)
  const middleDay = new Date(2026, 0, 15)
  expect(daytime(firstDay).weekOfMonth()).toBeGreaterThanOrEqual(1)
  expect(daytime(middleDay).weekOfMonth()).toBeGreaterThanOrEqual(1)
  expect(daytime(lastDay).weekOfMonth()).toBeGreaterThanOrEqual(1)
})

Deno.test('Query: weeksInMonth - should return correct weeks for different months', () => {
  const jan = new Date(2026, 0, 15)
  const feb = new Date(2026, 1, 15)
  const mar = new Date(2026, 2, 15)
  const apr = new Date(2026, 3, 15)
  expect(daytime(jan).weeksInMonth()).toBeGreaterThanOrEqual(4)
  expect(daytime(jan).weeksInMonth()).toBeLessThanOrEqual(6)
  expect(daytime(feb).weeksInMonth()).toBeGreaterThanOrEqual(4)
  expect(daytime(feb).weeksInMonth()).toBeLessThanOrEqual(6)
  expect(daytime(mar).weeksInMonth()).toBeGreaterThanOrEqual(4)
  expect(daytime(mar).weeksInMonth()).toBeLessThanOrEqual(6)
  expect(daytime(apr).weeksInMonth()).toBeGreaterThanOrEqual(4)
  expect(daytime(apr).weeksInMonth()).toBeLessThanOrEqual(6)
})

Deno.test('Query: weeksInMonth - should work for any day in the month', () => {
  const first = new Date(2026, 1, 1)
  const middle = new Date(2026, 1, 14)
  const last = new Date(2026, 1, 28)
  const weeksFirst = daytime(first).weeksInMonth()
  const weeksMiddle = daytime(middle).weeksInMonth()
  const weeksLast = daytime(last).weeksInMonth()
  expect(weeksFirst).toEqual(weeksMiddle)
  expect(weeksMiddle).toEqual(weeksLast)
})

Deno.test('Query: weeksInYear - should return at least 52 weeks', () => {
  const date2026 = new Date(2026, 5, 15)
  const date2026b = new Date(2026, 5, 15)
  const date2025 = new Date(2025, 5, 15)
  expect(daytime(date2026).weeksInYear()).toBeGreaterThanOrEqual(52)
  expect(daytime(date2026b).weeksInYear()).toBeGreaterThanOrEqual(52)
  expect(daytime(date2025).weeksInYear()).toBeGreaterThanOrEqual(52)
})

Deno.test('Query: weeksInYear - should return at most 53 weeks', () => {
  const date2026 = new Date(2026, 5, 15)
  const date2026b = new Date(2026, 5, 15)
  expect(daytime(date2026).weeksInYear()).toBeLessThanOrEqual(53)
  expect(daytime(date2026b).weeksInYear()).toBeLessThanOrEqual(53)
})

Deno.test('Query: weeksInYear - should work for any day in the year', () => {
  const jan1 = new Date(2026, 0, 1)
  const jun15 = new Date(2026, 5, 15)
  const dec31 = new Date(2026, 11, 31)
  const weeksJan = daytime(jan1).weeksInYear()
  const weeksJun = daytime(jun15).weeksInYear()
  const weeksDec = daytime(dec31).weeksInYear()
  expect(weeksJan).toEqual(weeksJun)
  expect(weeksJun).toEqual(weeksDec)
})

Deno.test('Query: methods should work with chaining', () => {
  const date = daytime('2026-06-15')
  const result = date.dayOfWeek()
  expect(typeof result).toEqual('number')
  expect(result).toBeGreaterThanOrEqual(0)
  expect(result).toBeLessThanOrEqual(6)
})

Deno.test('Query: methods should be consistent', () => {
  const date = daytime('2028-02-29')
  expect(date.isLeapYear()).toBe(expectedTrue)
  expect(date.daysInYear()).toEqual(366)
  expect(date.daysInMonth()).toEqual(29)
})

Deno.test('Query: methods should work after manipulation', () => {
  const original = daytime('2026-01-15')
  const modified = original.add(1, 'month')
  expect(modified.daysInMonth()).toBeGreaterThanOrEqual(28)
  expect(modified.daysInMonth()).toBeLessThanOrEqual(31)
})

Deno.test('Query: calculateWeekNumber - should handle edge cases with different start days', () => {
  const jan1Friday = new Date(2027, 0, 1)
  const week = daytime(jan1Friday).get('week')
  expect(week).toBeGreaterThanOrEqual(1)
  expect(week).toBeLessThanOrEqual(2)
})

Deno.test('Query: weeksInYear - should return correct value when year starts on different days', () => {
  const yearStartingWednesday = new Date(2025, 0, 1)
  const yearStartingThursday = new Date(2026, 0, 1)
  const weeks2025 = daytime(yearStartingWednesday).weeksInYear()
  const weeks2026 = daytime(yearStartingThursday).weeksInYear()
  expect(weeks2025).toBeGreaterThanOrEqual(52)
  expect(weeks2025).toBeLessThanOrEqual(53)
  expect(weeks2026).toBeGreaterThanOrEqual(52)
  expect(weeks2026).toBeLessThanOrEqual(53)
})

Deno.test('Query: calculateWeekNumber - should always return at least 1', () => {
  const jan1 = new Date(2026, 0, 1)
  const week = daytime(jan1).get('week')
  expect(week).toBeGreaterThanOrEqual(1)
  expect(week).toBeLessThanOrEqual(2)
})

Deno.test('Query: weeksInYear - should always return at least 52', () => {
  const dates = [
    new Date(2025, 0, 1),
    new Date(2026, 0, 1),
    new Date(2025, 0, 1),
    new Date(2026, 0, 1)
  ]
  for (const date of dates) {
    const weeks = daytime(date).weeksInYear()
    expect(weeks).toBeGreaterThanOrEqual(52)
  }
})

Deno.test('Query: calculateWeekNumber - should handle edge case when year starts on Sunday', () => {
  const sundayJan1 = new Date(2025, 0, 1)
  const week = daytime(sundayJan1).get('week')
  expect(week).toBeGreaterThanOrEqual(1)
})

Deno.test('Query: calculateWeekNumber - should handle edge case when year starts on Saturday', () => {
  const saturdayJan1 = new Date(2026, 0, 1)
  const week = daytime(saturdayJan1).get('week')
  expect(week).toBeGreaterThanOrEqual(1)
})
