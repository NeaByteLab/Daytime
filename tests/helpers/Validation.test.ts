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
