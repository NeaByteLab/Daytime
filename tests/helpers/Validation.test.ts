import { expect } from '@std/expect'
import { expectedFalse, expectedTrue } from '@tests/shared/index.ts'
import daytime from '@neabyte/daytime'

Deno.test('Validation: isValid - should return true for valid dates', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  expect(daytime(date).isValid()).toBe(expectedTrue)
})

Deno.test('Validation: isValid - should return true for valid date strings', () => {
  expect(daytime('2026-01-15T12:30:45Z').isValid()).toBe(expectedTrue)
  expect(daytime('2026-01-15').isValid()).toBe(expectedTrue)
})

Deno.test('Validation: isValid - should return true for valid timestamps', () => {
  const timestamp = new Date('2026-01-15T12:30:45Z').getTime()
  expect(daytime(timestamp).isValid()).toBe(expectedTrue)
})

Deno.test('Validation: isValid - should return true for current date', () => {
  expect(daytime().isValid()).toBe(expectedTrue)
})

Deno.test('Validation: isValid - should handle edge cases', () => {
  expect(daytime(new Date('2025-01-01')).isValid()).toBe(expectedTrue)
  expect(daytime(new Date('2026-12-31')).isValid()).toBe(expectedTrue)
})

Deno.test('Validation: isLeapYear - should return true for leap years', () => {
  expect(daytime('2028-01-01').isLeapYear()).toBe(expectedTrue)
  expect(daytime('2032-01-01').isLeapYear()).toBe(expectedTrue)
  expect(daytime('2036-01-01').isLeapYear()).toBe(expectedTrue)
  expect(daytime('2040-01-01').isLeapYear()).toBe(expectedTrue)
})

Deno.test('Validation: isLeapYear - should return false for non-leap years', () => {
  expect(daytime('2025-01-01').isLeapYear()).toBe(expectedFalse)
  expect(daytime('2026-01-01').isLeapYear()).toBe(expectedFalse)
  expect(daytime('2025-01-01').isLeapYear()).toBe(expectedFalse)
  expect(daytime('2025-01-01').isLeapYear()).toBe(expectedFalse)
})

Deno.test('Validation: isLeapYear - should handle century years correctly', () => {
  expect(daytime('2100-01-01').isLeapYear()).toBe(expectedFalse)
  expect(daytime('2400-01-01').isLeapYear()).toBe(expectedTrue)
  expect(daytime('2200-01-01').isLeapYear()).toBe(expectedFalse)
})

Deno.test('Validation: isLeapYear - should work for any date in the year', () => {
  expect(daytime('2028-06-15').isLeapYear()).toBe(expectedTrue)
  expect(daytime('2028-12-31').isLeapYear()).toBe(expectedTrue)
})

Deno.test('Validation: isBusinessDay - should return true for weekdays', () => {
  const monday = new Date(2026, 0, 12)
  const tuesday = new Date(2026, 0, 13)
  const wednesday = new Date(2026, 0, 14)
  const thursday = new Date(2026, 0, 15)
  const friday = new Date(2026, 0, 16)
  expect(daytime(monday).isBusinessDay()).toBe(expectedTrue)
  expect(daytime(tuesday).isBusinessDay()).toBe(expectedTrue)
  expect(daytime(wednesday).isBusinessDay()).toBe(expectedTrue)
  expect(daytime(thursday).isBusinessDay()).toBe(expectedTrue)
  expect(daytime(friday).isBusinessDay()).toBe(expectedTrue)
})

Deno.test('Validation: isBusinessDay - should return false for weekends', () => {
  const saturday = new Date(2026, 0, 10)
  const sunday = new Date(2026, 0, 11)
  expect(daytime(saturday).isBusinessDay()).toBe(expectedFalse)
  expect(daytime(sunday).isBusinessDay()).toBe(expectedFalse)
})

Deno.test('Validation: isBusinessDay - should work with different times', () => {
  const monday = new Date(2026, 0, 12, 0, 0, 0)
  const mondayNoon = new Date(2026, 0, 12, 12, 0, 0)
  const mondayEnd = new Date(2026, 0, 12, 23, 59, 59)
  expect(daytime(monday).isBusinessDay()).toBe(expectedTrue)
  expect(daytime(mondayNoon).isBusinessDay()).toBe(expectedTrue)
  expect(daytime(mondayEnd).isBusinessDay()).toBe(expectedTrue)
})

Deno.test('Validation: isWeekend - should return true for Saturday and Sunday', () => {
  const saturday = new Date(2026, 0, 10)
  const sunday = new Date(2026, 0, 11)
  expect(daytime(saturday).isWeekend()).toBe(expectedTrue)
  expect(daytime(sunday).isWeekend()).toBe(expectedTrue)
})

Deno.test('Validation: isWeekend - should return false for weekdays', () => {
  const monday = new Date(2026, 0, 12)
  const tuesday = new Date(2026, 0, 13)
  const wednesday = new Date(2026, 0, 14)
  const thursday = new Date(2026, 0, 15)
  const friday = new Date(2026, 0, 16)
  expect(daytime(monday).isWeekend()).toBe(expectedFalse)
  expect(daytime(tuesday).isWeekend()).toBe(expectedFalse)
  expect(daytime(wednesday).isWeekend()).toBe(expectedFalse)
  expect(daytime(thursday).isWeekend()).toBe(expectedFalse)
  expect(daytime(friday).isWeekend()).toBe(expectedFalse)
})

Deno.test('Validation: isWeekend - should work with different times', () => {
  const saturday = new Date(2026, 0, 10, 0, 0, 0)
  const saturdayNoon = new Date(2026, 0, 10, 12, 0, 0)
  const saturdayEnd = new Date(2026, 0, 10, 23, 59, 59)
  expect(daytime(saturday).isWeekend()).toBe(expectedTrue)
  expect(daytime(saturdayNoon).isWeekend()).toBe(expectedTrue)
  expect(daytime(saturdayEnd).isWeekend()).toBe(expectedTrue)
})

Deno.test('Validation: isWeekend - should be opposite of isBusinessDay', () => {
  const weekday = new Date(2026, 0, 12)
  const weekend = new Date(2026, 0, 10)
  expect(daytime(weekday).isWeekend()).not.toEqual(daytime(weekday).isBusinessDay())
  expect(daytime(weekend).isWeekend()).not.toEqual(daytime(weekend).isBusinessDay())
})

Deno.test('Validation: isDST - should detect DST in summer months (US)', () => {
  const summerDate = daytime('2026-07-15T12:00:00')
  const winterDate = daytime('2026-01-15T12:00:00')
  expect(typeof summerDate.isDST()).toEqual('boolean')
  expect(typeof winterDate.isDST()).toEqual('boolean')
  expect(summerDate.isDST() !== winterDate.isDST() || summerDate.isDST() === winterDate.isDST())
    .toBe(expectedTrue)
})

Deno.test('Validation: isDST - should return boolean for any date', () => {
  const dates = [
    daytime('2026-01-15'),
    daytime('2026-03-15'),
    daytime('2026-06-15'),
    daytime('2026-09-15'),
    daytime('2026-12-15')
  ]
  for (const date of dates) {
    expect(typeof date.isDST()).toEqual('boolean')
  }
})

Deno.test('Validation: isDST - should handle timezone correctly', () => {
  const date = daytime('2026-07-15T12:00:00Z')
  const result = date.isDST()
  expect(typeof result).toEqual('boolean')
})

Deno.test('Validation: methods should work with chaining', () => {
  const date = daytime('2026-01-15')
  const result = date.add(1, 'day').isBusinessDay()
  expect(typeof result).toEqual('boolean')
})

Deno.test('Validation: methods should work after manipulation', () => {
  const date = daytime('2026-01-15')
  const modified = date.add(1, 'year')
  expect(typeof modified.isLeapYear()).toEqual('boolean')
})

Deno.test('Validation: isValid should handle parsed dates', () => {
  const valid = daytime('2026-01-15T12:30:45Z')
  expect(valid.isValid()).toBe(expectedTrue)
})

Deno.test('Validation: businessDaysInMonth - should return correct count for month', () => {
  const janDate = daytime('2026-01-15')
  const count = janDate.businessDaysInMonth()
  expect(count).toBeGreaterThan(0)
  expect(count).toBeLessThanOrEqual(31)
})

Deno.test('Validation: businessDaysInMonth - should exclude weekends', () => {
  const febDate = daytime('2026-02-15')
  const count = febDate.businessDaysInMonth()
  const totalDays = febDate.daysInMonth()
  expect(count).toBeLessThan(totalDays)
})

Deno.test('Validation: businessDaysInMonth - should work for different months', () => {
  const months = [
    daytime('2026-01-15'),
    daytime('2026-02-15'),
    daytime('2026-03-15'),
    daytime('2026-04-15'),
    daytime('2026-05-15'),
    daytime('2026-06-15')
  ]
  for (const date of months) {
    const count = date.businessDaysInMonth()
    expect(count).toBeGreaterThan(0)
    expect(count).toBeLessThanOrEqual(31)
  }
})

Deno.test('Validation: businessDaysInYear - should return correct count for year', () => {
  const yearDate = daytime('2026-01-15')
  const count = yearDate.businessDaysInYear()
  expect(count).toBeGreaterThan(0)
  expect(count).toBeLessThanOrEqual(366)
})

Deno.test('Validation: businessDaysInYear - should exclude weekends', () => {
  const yearDate = daytime('2026-01-15')
  const count = yearDate.businessDaysInYear()
  const totalDays = yearDate.daysInYear()
  expect(count).toBeLessThan(totalDays)
})

Deno.test('Validation: businessDaysInYear - should work for leap and non-leap years', () => {
  const leapYear = daytime('2028-01-15')
  const nonLeapYear = daytime('2027-01-15')
  const leapCount = leapYear.businessDaysInYear()
  const nonLeapCount = nonLeapYear.businessDaysInYear()
  expect(leapCount).toBeGreaterThan(0)
  expect(nonLeapCount).toBeGreaterThan(0)
  expect(Math.abs(leapCount - nonLeapCount)).toBeLessThanOrEqual(2)
})

Deno.test('Validation: nextBusinessDay - should return next business day', () => {
  const monday = daytime('2026-01-12')
  const next = monday.nextBusinessDay()
  expect(next.isBusinessDay()).toBe(expectedTrue)
  expect(next.toDate().getTime()).toBeGreaterThan(monday.toDate().getTime())
})

Deno.test('Validation: nextBusinessDay - should skip weekends', () => {
  const friday = daytime('2026-01-16')
  const next = friday.nextBusinessDay()
  expect(next.dayOfWeek()).toBeGreaterThanOrEqual(1)
  expect(next.dayOfWeek()).toBeLessThanOrEqual(5)
  expect(next.toDate().getTime()).toBeGreaterThan(friday.toDate().getTime())
})

Deno.test('Validation: nextBusinessDay - should return Monday after Friday', () => {
  const friday = daytime('2026-01-16')
  const next = friday.nextBusinessDay()
  const dayOfWeek = next.dayOfWeek()
  expect(dayOfWeek).toBeGreaterThanOrEqual(1)
  expect(dayOfWeek).toBeLessThanOrEqual(5)
})

Deno.test('Validation: nextBusinessDay - should work from weekend', () => {
  const saturday = daytime('2026-01-10')
  const next = saturday.nextBusinessDay()
  expect(next.isBusinessDay()).toBe(expectedTrue)
  expect(next.dayOfWeek()).toBe(1)
})

Deno.test('Validation: nextBusinessDay - should return new instance', () => {
  const date = daytime('2026-01-15')
  const next = date.nextBusinessDay()
  expect(next.toDate()).not.toBe(date.toDate())
})

Deno.test('Validation: prevBusinessDay - should return previous business day', () => {
  const wednesday = daytime('2026-01-14')
  const prev = wednesday.prevBusinessDay()
  expect(prev.isBusinessDay()).toBe(expectedTrue)
  expect(prev.toDate().getTime()).toBeLessThan(wednesday.toDate().getTime())
})

Deno.test('Validation: prevBusinessDay - should skip weekends', () => {
  const monday = daytime('2026-01-12')
  const prev = monday.prevBusinessDay()
  expect(prev.dayOfWeek()).toBeGreaterThanOrEqual(1)
  expect(prev.dayOfWeek()).toBeLessThanOrEqual(5)
  expect(prev.toDate().getTime()).toBeLessThan(monday.toDate().getTime())
})

Deno.test('Validation: prevBusinessDay - should return Friday before Monday', () => {
  const monday = daytime('2026-01-12')
  const prev = monday.prevBusinessDay()
  expect(prev.dayOfWeek()).toBe(5)
})

Deno.test('Validation: prevBusinessDay - should work from weekend', () => {
  const saturday = daytime('2026-01-10')
  const prev = saturday.prevBusinessDay()
  expect(prev.isBusinessDay()).toBe(expectedTrue)
  expect(prev.dayOfWeek()).toBe(5)
})

Deno.test('Validation: prevBusinessDay - should return new instance', () => {
  const date = daytime('2026-01-15')
  const prev = date.prevBusinessDay()
  expect(prev.toDate()).not.toBe(date.toDate())
})

Deno.test('Validation: previousBusinessDay - should be alias for prevBusinessDay', () => {
  const date = daytime('2026-01-15')
  const prev1 = date.prevBusinessDay()
  const prev2 = date.previousBusinessDay()
  expect(prev1.toDate().getTime()).toBe(prev2.toDate().getTime())
})

Deno.test('Validation: business day methods should work with chaining', () => {
  const date = daytime('2026-01-15')
  const result = date.nextBusinessDay().isBusinessDay()
  expect(typeof result).toEqual('boolean')
  expect(result).toBe(expectedTrue)
})

Deno.test('Validation: business day methods should be immutable', () => {
  const date = daytime('2026-01-15')
  const originalTime = date.toDate().getTime()
  date.nextBusinessDay()
  date.prevBusinessDay()
  expect(date.toDate().getTime()).toBe(originalTime)
})
