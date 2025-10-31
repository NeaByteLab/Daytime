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

Deno.test(
  'Query: weeksInYear - should return correct value when year starts on different days',
  () => {
    const yearStartingWednesday = new Date(2025, 0, 1)
    const yearStartingThursday = new Date(2026, 0, 1)
    const weeks2025 = daytime(yearStartingWednesday).weeksInYear()
    const weeks2026 = daytime(yearStartingThursday).weeksInYear()
    expect(weeks2025).toBeGreaterThanOrEqual(52)
    expect(weeks2025).toBeLessThanOrEqual(53)
    expect(weeks2026).toBeGreaterThanOrEqual(52)
    expect(weeks2026).toBeLessThanOrEqual(53)
  }
)

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

Deno.test(
  'Query: calculateWeekNumber - should handle edge case when year starts on Saturday',
  () => {
    const saturdayJan1 = new Date(2026, 0, 1)
    const week = daytime(saturdayJan1).get('week')
    expect(week).toBeGreaterThanOrEqual(1)
  }
)

Deno.test('Query: dayOfYear - should return 1 for January 1st', () => {
  const jan1st2025 = new Date(2025, 0, 1)
  const jan1st2026 = new Date(2026, 0, 1)
  const jan1st2028 = new Date(2028, 0, 1)
  expect(daytime(jan1st2025).dayOfYear()).toEqual(1)
  expect(daytime(jan1st2026).dayOfYear()).toEqual(1)
  expect(daytime(jan1st2028).dayOfYear()).toEqual(1)
})

Deno.test('Query: dayOfYear - should handle month boundaries correctly', () => {
  const jan31 = new Date(2026, 0, 31)
  const feb1 = new Date(2026, 1, 1)
  const feb28 = new Date(2026, 1, 28)
  const mar1 = new Date(2026, 2, 1)
  expect(daytime(jan31).dayOfYear()).toEqual(31)
  expect(daytime(feb1).dayOfYear()).toEqual(32)
  expect(daytime(feb28).dayOfYear()).toEqual(59)
  expect(daytime(mar1).dayOfYear()).toEqual(60)
})

Deno.test('Query: dayOfYear - should handle leap year February correctly', () => {
  const feb28Leap = new Date(2028, 1, 28)
  const feb29Leap = new Date(2028, 1, 29)
  const mar1Leap = new Date(2028, 2, 1)
  expect(daytime(feb28Leap).dayOfYear()).toEqual(59)
  expect(daytime(feb29Leap).dayOfYear()).toEqual(60)
  expect(daytime(mar1Leap).dayOfYear()).toEqual(61)
})

Deno.test('Query: dayOfYear - should handle year-end correctly', () => {
  const dec30 = new Date(2025, 11, 30)
  const dec31NonLeap = new Date(2025, 11, 31)
  const dec31Leap = new Date(2028, 11, 31)
  expect(daytime(dec30).dayOfYear()).toEqual(364)
  expect(daytime(dec31NonLeap).dayOfYear()).toEqual(365)
  expect(daytime(dec31Leap).dayOfYear()).toEqual(366)
})

Deno.test('Query: dayOfYear - should work consistently across all months', () => {
  const months2026 = [
    { month: 0, day: 1, expected: 1 },
    { month: 1, day: 1, expected: 32 },
    { month: 2, day: 1, expected: 60 },
    { month: 3, day: 1, expected: 91 },
    { month: 4, day: 1, expected: 121 },
    { month: 5, day: 1, expected: 152 },
    { month: 6, day: 1, expected: 182 },
    { month: 7, day: 1, expected: 213 },
    { month: 8, day: 1, expected: 244 },
    { month: 9, day: 1, expected: 274 },
    { month: 10, day: 1, expected: 305 },
    { month: 11, day: 1, expected: 335 }
  ]
  for (const { month, day, expected } of months2026) {
    expect(daytime(new Date(2026, month, day)).dayOfYear()).toEqual(expected)
  }
})

Deno.test('Query: daysInMonth - should handle all months correctly', () => {
  const months2026 = [
    { month: 0, expected: 31 },
    { month: 1, expected: 28 },
    { month: 2, expected: 31 },
    { month: 3, expected: 30 },
    { month: 4, expected: 31 },
    { month: 5, expected: 30 },
    { month: 6, expected: 31 },
    { month: 7, expected: 31 },
    { month: 8, expected: 30 },
    { month: 9, expected: 31 },
    { month: 10, expected: 30 },
    { month: 11, expected: 31 }
  ]
  for (const { month, expected } of months2026) {
    expect(daytime(new Date(2026, month, 15)).daysInMonth()).toEqual(expected)
  }
})

Deno.test('Query: daysInYear - should correctly identify century leap years', () => {
  expect(daytime(new Date(2000, 5, 15)).daysInYear()).toEqual(366)
  expect(daytime(new Date(2400, 5, 15)).daysInYear()).toEqual(366)
})

Deno.test('Query: weekOfMonth - should handle months starting on different weekdays', () => {
  const months = [
    new Date(2026, 0, 1),
    new Date(2026, 1, 1),
    new Date(2026, 2, 1),
    new Date(2026, 3, 1),
    new Date(2026, 4, 1)
  ]
  for (const date of months) {
    const week = daytime(date).weekOfMonth()
    expect(week).toBeGreaterThanOrEqual(1)
    expect(week).toBeLessThanOrEqual(5)
  }
})

Deno.test('Query: weekOfMonth - should correctly calculate for middle of month', () => {
  const midJan = new Date(2026, 0, 15)
  const midFeb = new Date(2026, 1, 14)
  const midMar = new Date(2026, 2, 15)
  expect(daytime(midJan).weekOfMonth()).toBeGreaterThanOrEqual(2)
  expect(daytime(midFeb).weekOfMonth()).toBeGreaterThanOrEqual(2)
  expect(daytime(midMar).weekOfMonth()).toBeGreaterThanOrEqual(2)
})

Deno.test('Query: weekOfMonth - should handle end of month correctly', () => {
  const lastDays = [
    new Date(2026, 0, 31),
    new Date(2026, 1, 28),
    new Date(2028, 1, 29),
    new Date(2026, 3, 30)
  ]
  for (const date of lastDays) {
    const week = daytime(date).weekOfMonth()
    expect(week).toBeGreaterThanOrEqual(4)
    expect(week).toBeLessThanOrEqual(6)
  }
})

Deno.test('Query: weeksInMonth - should handle February correctly', () => {
  const feb2026 = new Date(2026, 1, 15)
  const feb2028 = new Date(2028, 1, 15)
  expect(daytime(feb2026).weeksInMonth()).toBeGreaterThanOrEqual(4)
  expect(daytime(feb2028).weeksInMonth()).toBeGreaterThanOrEqual(4)
})

Deno.test('Query: weeksInMonth - should handle months with 31 days', () => {
  const longMonths = [
    new Date(2026, 0, 15),
    new Date(2026, 2, 15),
    new Date(2026, 4, 15),
    new Date(2026, 6, 15),
    new Date(2026, 7, 15),
    new Date(2026, 9, 15),
    new Date(2026, 11, 15)
  ]
  for (const date of longMonths) {
    const weeks = daytime(date).weeksInMonth()
    expect(weeks).toBeGreaterThanOrEqual(4)
    expect(weeks).toBeLessThanOrEqual(6)
  }
})

Deno.test('Query: weeksInMonth - should handle months with 30 days', () => {
  const shortMonths = [
    new Date(2026, 3, 15),
    new Date(2026, 5, 15),
    new Date(2026, 8, 15),
    new Date(2026, 10, 15)
  ]
  for (const date of shortMonths) {
    const weeks = daytime(date).weeksInMonth()
    expect(weeks).toBeGreaterThanOrEqual(4)
    expect(weeks).toBeLessThanOrEqual(6)
  }
})

Deno.test('Query: weeksInYear - should return 53 for years that need it', () => {
  const yearsWith53Weeks = [new Date(2025, 5, 15), new Date(2032, 5, 15)]
  for (const date of yearsWith53Weeks) {
    const weeks = daytime(date).weeksInYear()
    expect(weeks).toBeGreaterThanOrEqual(52)
    expect(weeks).toBeLessThanOrEqual(53)
  }
})

Deno.test('Query: weeksInYear - should be consistent for same year', () => {
  const dates2026 = [new Date(2026, 0, 1), new Date(2026, 5, 15), new Date(2026, 11, 31)]
  const weeks = daytime(dates2026[0]).weeksInYear()
  for (const date of dates2026) {
    expect(daytime(date).weeksInYear()).toEqual(weeks)
  }
})

Deno.test('Query: calculateWeekNumber - should handle all months of year', () => {
  for (let month = 0; month < 12; month++) {
    const date = new Date(2026, month, 15)
    const week = daytime(date).get('week')
    expect(week).toBeGreaterThanOrEqual(1)
    expect(week).toBeLessThanOrEqual(53)
  }
})

Deno.test('Query: calculateWeekNumber - should increase throughout year', () => {
  const jan1 = new Date(2026, 0, 1)
  const jun15 = new Date(2026, 5, 15)
  const dec31 = new Date(2026, 11, 31)
  const weekJan = daytime(jan1).get('week')
  const weekJun = daytime(jun15).get('week')
  const weekDec = daytime(dec31).get('week')
  expect(weekJun).toBeGreaterThanOrEqual(weekJan)
  expect(weekDec).toBeGreaterThanOrEqual(weekJun)
})

Deno.test('Query: dayOfWeek - should handle all weekdays correctly', () => {
  const testDates = [
    { date: new Date(2026, 0, 4), expected: 0 },
    { date: new Date(2026, 0, 5), expected: 1 },
    { date: new Date(2026, 0, 6), expected: 2 },
    { date: new Date(2026, 0, 7), expected: 3 },
    { date: new Date(2026, 0, 8), expected: 4 },
    { date: new Date(2026, 0, 9), expected: 5 },
    { date: new Date(2026, 0, 10), expected: 6 }
  ]
  for (const { date, expected } of testDates) {
    expect(daytime(date).dayOfWeek()).toEqual(expected)
  }
})

Deno.test('Query: all methods should work together', () => {
  const date = daytime('2026-06-15')
  expect(date.dayOfWeek()).toBeGreaterThanOrEqual(0)
  expect(date.dayOfWeek()).toBeLessThanOrEqual(6)
  expect(date.dayOfYear()).toBeGreaterThanOrEqual(1)
  expect(date.dayOfYear()).toBeLessThanOrEqual(366)
  expect(date.daysInMonth()).toBeGreaterThanOrEqual(28)
  expect(date.daysInMonth()).toBeLessThanOrEqual(31)
  expect(date.daysInYear()).toBeGreaterThanOrEqual(365)
  expect(date.daysInYear()).toBeLessThanOrEqual(366)
  expect(date.weekOfMonth()).toBeGreaterThanOrEqual(1)
  expect(date.weeksInMonth()).toBeGreaterThanOrEqual(4)
  expect(date.weeksInYear()).toBeGreaterThanOrEqual(52)
})

Deno.test('Query: lastWeekday - should return last Monday of month', () => {
  const date = daytime('2026-01-15')
  const lastMonday = date.lastWeekday(1)
  expect(lastMonday.dayOfWeek()).toEqual(1)
  expect(lastMonday.month()).toEqual(1)
})

Deno.test('Query: lastWeekday - should return last Friday of month', () => {
  const date = daytime('2026-01-15')
  const lastFriday = date.lastWeekday(5)
  expect(lastFriday.dayOfWeek()).toEqual(5)
  expect(lastFriday.month()).toEqual(1)
})

Deno.test('Query: lastWeekday - should work for all weekdays', () => {
  const date = daytime('2026-01-15')
  for (let weekday = 0; weekday <= 6; weekday++) {
    const result = date.lastWeekday(weekday)
    expect(result.dayOfWeek()).toEqual(weekday)
    expect(result.month()).toEqual(1)
  }
})

Deno.test('Query: lastWeekday - should work for different months', () => {
  const months = [0, 1, 2, 5, 8, 11]
  for (const month of months) {
    const date = daytime(new Date(2026, month, 15))
    const lastMonday = date.lastWeekday(1)
    expect(lastMonday.dayOfWeek()).toEqual(1)
    expect(lastMonday.month()).toEqual(month + 1)
  }
})

Deno.test('Query: lastWeekday - should handle February in leap years', () => {
  const date = daytime('2028-02-15')
  const lastMonday = date.lastWeekday(1)
  expect(lastMonday.dayOfWeek()).toEqual(1)
  expect(lastMonday.month()).toEqual(2)
})

Deno.test('Query: nearestWeekday - should keep weekday as-is', () => {
  const monday = daytime('2026-01-05')
  const tuesday = daytime('2026-01-06')
  const wednesday = daytime('2026-01-07')
  expect(monday.nearestWeekday().dayOfWeek()).toEqual(1)
  expect(tuesday.nearestWeekday().dayOfWeek()).toEqual(2)
  expect(wednesday.nearestWeekday().dayOfWeek()).toEqual(3)
})

Deno.test('Query: nearestWeekday - should move Saturday to Friday', () => {
  const saturday = daytime('2026-01-03')
  const nearest = saturday.nearestWeekday()
  expect(nearest.dayOfWeek()).toEqual(5)
  expect(nearest.day()).toEqual(2)
})

Deno.test('Query: nearestWeekday - should move Sunday to Monday', () => {
  const sunday = daytime('2026-01-04')
  const nearest = sunday.nearestWeekday()
  expect(nearest.dayOfWeek()).toEqual(1)
  expect(nearest.day()).toEqual(5)
})

Deno.test('Query: nearestWeekday - should work for all weekdays', () => {
  const dates = [
    { date: '2026-01-04', original: 0, expected: 1 },
    { date: '2026-01-05', original: 1, expected: 1 },
    { date: '2026-01-06', original: 2, expected: 2 },
    { date: '2026-01-07', original: 3, expected: 3 },
    { date: '2026-01-08', original: 4, expected: 4 },
    { date: '2026-01-09', original: 5, expected: 5 },
    { date: '2026-01-03', original: 6, expected: 5 }
  ]
  for (const { date, expected } of dates) {
    const result = daytime(date).nearestWeekday()
    expect(result.dayOfWeek()).toEqual(expected)
  }
})

Deno.test('Query: nextWeekday - should find next Monday', () => {
  const date = daytime('2026-01-05')
  const nextMonday = date.nextWeekday(1)
  expect(nextMonday.dayOfWeek()).toEqual(1)
  expect(nextMonday.day()).toEqual(12)
})

Deno.test('Query: nextWeekday - should find next Friday', () => {
  const date = daytime('2026-01-05')
  const nextFriday = date.nextWeekday(5)
  expect(nextFriday.dayOfWeek()).toEqual(5)
  expect(nextFriday.day()).toEqual(9)
})

Deno.test('Query: nextWeekday - should work for all weekdays', () => {
  const date = daytime('2026-01-15')
  for (let weekday = 0; weekday <= 6; weekday++) {
    const result = date.nextWeekday(weekday)
    expect(result.dayOfWeek()).toEqual(weekday)
    expect(result.toDate().getTime()).toBeGreaterThan(date.toDate().getTime())
  }
})

Deno.test('Query: nextWeekday - should advance to next week if same weekday', () => {
  const monday = daytime('2026-01-05')
  const nextMonday = monday.nextWeekday(1)
  expect(nextMonday.dayOfWeek()).toEqual(1)
  expect(nextMonday.day()).toEqual(12)
})

Deno.test('Query: nthWeekday - should find 1st Monday of month', () => {
  const date = daytime('2026-01-15')
  const firstMonday = date.nthWeekday(1, 1)
  expect(firstMonday.dayOfWeek()).toEqual(1)
  expect(firstMonday.month()).toEqual(1)
  expect(firstMonday.day()).toEqual(5)
})

Deno.test('Query: nthWeekday - should find 2nd Friday of month', () => {
  const date = daytime('2026-01-15')
  const secondFriday = date.nthWeekday(2, 5)
  expect(secondFriday.dayOfWeek()).toEqual(5)
  expect(secondFriday.month()).toEqual(1)
  expect(secondFriday.day()).toEqual(9)
})

Deno.test('Query: nthWeekday - should find 3rd Wednesday of month', () => {
  const date = daytime('2026-01-15')
  const thirdWednesday = date.nthWeekday(3, 3)
  expect(thirdWednesday.dayOfWeek()).toEqual(3)
  expect(thirdWednesday.month()).toEqual(1)
  expect(thirdWednesday.day()).toEqual(21)
})

Deno.test('Query: nthWeekday - should handle last occurrence correctly', () => {
  const date = daytime('2026-01-15')
  const fourthMonday = date.nthWeekday(4, 1)
  expect(fourthMonday.dayOfWeek()).toEqual(1)
  expect(fourthMonday.month()).toEqual(1)
})

Deno.test('Query: nthWeekday - should work for all weekdays', () => {
  const date = daytime('2026-01-15')
  for (let weekday = 0; weekday <= 6; weekday++) {
    const result = date.nthWeekday(1, weekday)
    expect(result.dayOfWeek()).toEqual(weekday)
    expect(result.month()).toEqual(1)
  }
})

Deno.test('Query: nthWeekday - should handle different months', () => {
  const months = [0, 1, 2, 5, 8, 11]
  for (const month of months) {
    const date = daytime(new Date(2026, month, 15))
    const firstMonday = date.nthWeekday(1, 1)
    expect(firstMonday.dayOfWeek()).toEqual(1)
    expect(firstMonday.month()).toEqual(month + 1)
  }
})

Deno.test('Query: prevWeekday - should find previous Monday', () => {
  const date = daytime('2026-01-15')
  const prevMonday = date.prevWeekday(1)
  expect(prevMonday.dayOfWeek()).toEqual(1)
  expect(prevMonday.day()).toEqual(12)
})

Deno.test('Query: prevWeekday - should find previous Friday', () => {
  const date = daytime('2026-01-15')
  const prevFriday = date.prevWeekday(5)
  expect(prevFriday.dayOfWeek()).toEqual(5)
  expect(prevFriday.day()).toEqual(9)
})

Deno.test('Query: prevWeekday - should work for all weekdays', () => {
  const date = daytime('2026-01-15')
  for (let weekday = 0; weekday <= 6; weekday++) {
    const result = date.prevWeekday(weekday)
    expect(result.dayOfWeek()).toEqual(weekday)
    expect(result.toDate().getTime()).toBeLessThan(date.toDate().getTime())
  }
})

Deno.test('Query: prevWeekday - should go back to previous week if same weekday', () => {
  const monday = daytime('2026-01-12')
  const prevMonday = monday.prevWeekday(1)
  expect(prevMonday.dayOfWeek()).toEqual(1)
  expect(prevMonday.day()).toEqual(5)
})

Deno.test('Query: weekday methods should work with chaining', () => {
  const date = daytime('2026-01-15')
  const result = date.nextWeekday(1).add(1, 'day').prevWeekday(5)
  expect(typeof result.toDate()).toEqual('object')
})

Deno.test('Query: weekday methods should maintain immutability', () => {
  const date = daytime('2026-01-15')
  const originalTime = date.toDate().getTime()
  date.nextWeekday(1)
  date.prevWeekday(5)
  date.nearestWeekday()
  expect(date.toDate().getTime()).toEqual(originalTime)
})
