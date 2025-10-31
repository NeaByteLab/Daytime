import { expect } from '@std/expect'
import type * as Types from '@app/Types.ts'
import daytime from '@neabyte/daytime'

Deno.test('Manipulate: add - should add milliseconds', () => {
  const date = new Date('2026-01-15T12:00:00.000Z')
  const result = daytime(date).add(500, 'milliseconds').toDate()
  expect(result.getTime()).toEqual(date.getTime() + 500)
})

Deno.test('Manipulate: add - should add seconds', () => {
  const date = new Date('2026-01-15T12:00:00Z')
  const result = daytime(date).add(30, 'seconds').toDate()
  expect(result.getTime()).toEqual(date.getTime() + 30 * 1000)
})

Deno.test('Manipulate: add - should add minutes', () => {
  const date = new Date('2026-01-15T12:00:00Z')
  const result = daytime(date).add(15, 'minutes').toDate()
  expect(result.getTime()).toEqual(date.getTime() + 15 * 60 * 1000)
})

Deno.test('Manipulate: add - should add hours', () => {
  const date = new Date('2026-01-15T12:00:00Z')
  const result = daytime(date).add(2, 'hours').toDate()
  expect(result.getTime()).toEqual(date.getTime() + 2 * 60 * 60 * 1000)
})

Deno.test('Manipulate: add - should add days', () => {
  const date = new Date('2026-01-15T12:00:00Z')
  const result = daytime(date).add(5, 'days').toDate()
  expect(result.getTime()).toEqual(date.getTime() + 5 * 24 * 60 * 60 * 1000)
})

Deno.test('Manipulate: add - should add weeks', () => {
  const date = new Date('2026-01-15T12:00:00Z')
  const result = daytime(date).add(2, 'weeks').toDate()
  expect(result.getTime()).toEqual(date.getTime() + 2 * 7 * 24 * 60 * 60 * 1000)
})

Deno.test('Manipulate: add - should add months', () => {
  const date = new Date('2026-01-15T12:00:00Z')
  const result = daytime(date).add(1, 'month').toDate()
  expect(result.getMonth()).toEqual(1)
  expect(result.getFullYear()).toEqual(2026)
})

Deno.test('Manipulate: add - should handle month overflow correctly', () => {
  const date = new Date('2026-01-15T12:00:00Z')
  const result = daytime(date).add(12, 'months').toDate()
  expect(result.getMonth()).toEqual(0)
  expect(result.getFullYear()).toEqual(2027)
})

Deno.test('Manipulate: add - should add years', () => {
  const date = new Date('2026-01-15T12:00:00Z')
  const result = daytime(date).add(2, 'years').toDate()
  expect(result.getFullYear()).toEqual(2028)
  expect(result.getMonth()).toEqual(0)
  expect(result.getDate()).toEqual(15)
})

Deno.test('Manipulate: add - should support singular and plural units', () => {
  const date = new Date('2026-01-15T12:00:00Z')
  const result1 = daytime(date).add(1, 'day').toDate()
  const result2 = daytime(date).add(1, 'days').toDate()
  expect(result1.getTime()).toEqual(result2.getTime())
})

Deno.test('Manipulate: add - should support short unit forms', () => {
  const date = new Date('2026-01-15T12:00:00Z')
  const result1 = daytime(date).add(1, 'hour').toDate()
  const result2 = daytime(date).add(1, 'h').toDate()
  expect(result1.getTime()).toEqual(result2.getTime())
})

Deno.test('Manipulate: subtract - should subtract milliseconds', () => {
  const date = new Date('2026-01-15T12:00:00.500Z')
  const result = daytime(date).subtract(500, 'milliseconds').toDate()
  expect(result.getTime()).toEqual(date.getTime() - 500)
})

Deno.test('Manipulate: subtract - should subtract seconds', () => {
  const date = new Date('2026-01-15T12:00:30Z')
  const result = daytime(date).subtract(30, 'seconds').toDate()
  expect(result.getTime()).toEqual(date.getTime() - 30 * 1000)
})

Deno.test('Manipulate: subtract - should subtract minutes', () => {
  const date = new Date('2026-01-15T12:15:00Z')
  const result = daytime(date).subtract(15, 'minutes').toDate()
  expect(result.getTime()).toEqual(date.getTime() - 15 * 60 * 1000)
})

Deno.test('Manipulate: subtract - should subtract hours', () => {
  const date = new Date('2026-01-15T14:00:00Z')
  const result = daytime(date).subtract(2, 'hours').toDate()
  expect(result.getTime()).toEqual(date.getTime() - 2 * 60 * 60 * 1000)
})

Deno.test('Manipulate: subtract - should subtract days', () => {
  const date = new Date('2026-01-20T12:00:00Z')
  const result = daytime(date).subtract(5, 'days').toDate()
  expect(result.getTime()).toEqual(date.getTime() - 5 * 24 * 60 * 60 * 1000)
})

Deno.test('Manipulate: subtract - should subtract weeks', () => {
  const date = new Date('2026-01-29T12:00:00Z')
  const result = daytime(date).subtract(2, 'weeks').toDate()
  expect(result.getTime()).toEqual(date.getTime() - 2 * 7 * 24 * 60 * 60 * 1000)
})

Deno.test('Manipulate: subtract - should subtract months', () => {
  const date = new Date('2026-03-15T12:00:00Z')
  const result = daytime(date).subtract(1, 'month').toDate()
  expect(result.getMonth()).toEqual(1)
  expect(result.getFullYear()).toEqual(2026)
})

Deno.test('Manipulate: subtract - should handle month underflow correctly', () => {
  const date = new Date('2026-01-15T12:00:00Z')
  const result = daytime(date).subtract(1, 'month').toDate()
  expect(result.getMonth()).toEqual(11)
  expect(result.getFullYear()).toEqual(2025)
})

Deno.test('Manipulate: subtract - should subtract years', () => {
  const date = new Date('2026-01-15T12:00:00Z')
  const result = daytime(date).subtract(2, 'years').toDate()
  expect(result.getFullYear()).toEqual(2024)
  expect(result.getMonth()).toEqual(0)
  expect(result.getDate()).toEqual(15)
})

Deno.test('Manipulate: should handle negative values', () => {
  const date = new Date('2026-01-15T12:00:00Z')
  const result1 = daytime(date).add(-5, 'days').toDate()
  const result2 = daytime(date).subtract(5, 'days').toDate()
  expect(result1.getTime()).toEqual(result2.getTime())
})

Deno.test('Manipulate: should return new instance (immutability)', () => {
  const date = new Date('2026-01-15T12:00:00Z')
  const original = daytime(date)
  const modified = original.add(1, 'day')
  expect(original.toDate().getTime()).toEqual(date.getTime())
  expect(modified.toDate().getTime()).toEqual(date.getTime() + 24 * 60 * 60 * 1000)
})

Deno.test('Manipulate: should handle leap year correctly', () => {
  const date = new Date('2028-02-29T12:00:00Z')
  const result = daytime(date).add(1, 'year').toDate()
  expect(result.getFullYear()).toEqual(2029)
  expect(result.getMonth()).toEqual(2)
  expect(result.getDate()).toEqual(1)
})

Deno.test('Manipulate: startOf - should return start of second', () => {
  const date = new Date('2026-01-15T12:30:45.789Z')
  const result = daytime(date).startOf('second').toDate()
  expect(result.getMilliseconds()).toEqual(0)
  expect(result.getSeconds()).toEqual(45)
})

Deno.test('Manipulate: startOf - should return start of minute', () => {
  const date = new Date('2026-01-15T12:30:45.789Z')
  const result = daytime(date).startOf('minute').toDate()
  expect(result.getSeconds()).toEqual(0)
  expect(result.getMilliseconds()).toEqual(0)
  expect(result.getMinutes()).toEqual(30)
})

Deno.test('Manipulate: startOf - should return start of hour', () => {
  const date = new Date('2026-01-15T12:30:45.789Z')
  const result = daytime(date).startOf('hour').toDate()
  expect(result.getMinutes()).toEqual(0)
  expect(result.getSeconds()).toEqual(0)
  expect(result.getMilliseconds()).toEqual(0)
  expect(result.getUTCHours()).toEqual(12)
})

Deno.test('Manipulate: startOf - should return start of day', () => {
  const date = new Date('2026-01-15T12:30:45.789Z')
  const result = daytime(date).startOf('day').toDate()
  expect(result.getHours()).toEqual(0)
  expect(result.getMinutes()).toEqual(0)
  expect(result.getSeconds()).toEqual(0)
  expect(result.getMilliseconds()).toEqual(0)
  expect(result.getDate()).toEqual(15)
})

Deno.test('Manipulate: startOf - should return start of week (Sunday)', () => {
  const date = new Date('2026-01-15T12:30:45.789Z')
  const result = daytime(date).startOf('week').toDate()
  expect(result.getDay()).toEqual(0)
  expect(result.getHours()).toEqual(0)
  expect(result.getMinutes()).toEqual(0)
  expect(result.getSeconds()).toEqual(0)
  expect(result.getMilliseconds()).toEqual(0)
})

Deno.test('Manipulate: startOf - should return start of month', () => {
  const date = new Date('2026-01-15T12:30:45.789Z')
  const result = daytime(date).startOf('month').toDate()
  expect(result.getDate()).toEqual(1)
  expect(result.getHours()).toEqual(0)
  expect(result.getMinutes()).toEqual(0)
  expect(result.getSeconds()).toEqual(0)
  expect(result.getMilliseconds()).toEqual(0)
})

Deno.test('Manipulate: startOf - should return start of quarter', () => {
  const date = new Date('2026-02-15T12:30:45.789Z')
  const result = daytime(date).startOf('quarter').toDate()
  expect(result.getMonth()).toEqual(0)
  expect(result.getDate()).toEqual(1)
  expect(result.getHours()).toEqual(0)
})

Deno.test('Manipulate: startOf - should return start of year', () => {
  const date = new Date('2026-06-15T12:30:45.789Z')
  const result = daytime(date).startOf('year').toDate()
  expect(result.getMonth()).toEqual(0)
  expect(result.getDate()).toEqual(1)
  expect(result.getHours()).toEqual(0)
  expect(result.getMinutes()).toEqual(0)
  expect(result.getSeconds()).toEqual(0)
  expect(result.getMilliseconds()).toEqual(0)
})

Deno.test('Manipulate: startOf - should support different unit forms', () => {
  const date = new Date('2026-01-15T12:30:45.789Z')
  const result1 = daytime(date).startOf('day').toDate()
  const result2 = daytime(date).startOf('days').toDate()
  const result3 = daytime(date).startOf('d').toDate()
  expect(result1.getTime()).toEqual(result2.getTime())
  expect(result1.getTime()).toEqual(result3.getTime())
})

Deno.test('Manipulate: startOf - should return new instance (immutability)', () => {
  const date = new Date('2026-01-15T12:30:45.789Z')
  const original = daytime(date)
  const modified = original.startOf('day')
  expect(original.toDate().getTime()).toEqual(date.getTime())
  expect(modified.toDate().getTime()).not.toEqual(date.getTime())
})

Deno.test('Manipulate: endOf - should return end of second', () => {
  const date = new Date('2026-01-15T12:30:45.123Z')
  const result = daytime(date).endOf('second').toDate()
  expect(result.getMilliseconds()).toEqual(999)
  expect(result.getSeconds()).toEqual(45)
})

Deno.test('Manipulate: endOf - should return end of minute', () => {
  const date = new Date('2026-01-15T12:30:15.123Z')
  const result = daytime(date).endOf('minute').toDate()
  expect(result.getSeconds()).toEqual(59)
  expect(result.getMilliseconds()).toEqual(999)
  expect(result.getMinutes()).toEqual(30)
})

Deno.test('Manipulate: endOf - should return end of hour', () => {
  const date = new Date('2026-01-15T12:30:45.123Z')
  const result = daytime(date).endOf('hour').toDate()
  expect(result.getMinutes()).toEqual(59)
  expect(result.getSeconds()).toEqual(59)
  expect(result.getMilliseconds()).toEqual(999)
  expect(result.getUTCHours()).toEqual(12)
})

Deno.test('Manipulate: endOf - should return end of day', () => {
  const date = new Date('2026-01-15T12:30:45.123Z')
  const result = daytime(date).endOf('day').toDate()
  expect(result.getHours()).toEqual(23)
  expect(result.getMinutes()).toEqual(59)
  expect(result.getSeconds()).toEqual(59)
  expect(result.getMilliseconds()).toEqual(999)
  expect(result.getDate()).toEqual(15)
})

Deno.test('Manipulate: endOf - should return end of week (Saturday)', () => {
  const date = new Date('2026-01-15T12:30:45.123Z')
  const result = daytime(date).endOf('week').toDate()
  expect(result.getDay()).toEqual(6)
  expect(result.getHours()).toEqual(23)
  expect(result.getMinutes()).toEqual(59)
  expect(result.getSeconds()).toEqual(59)
  expect(result.getMilliseconds()).toEqual(999)
})

Deno.test('Manipulate: endOf - should return end of month', () => {
  const date = new Date('2026-01-15T12:30:45.123Z')
  const result = daytime(date).endOf('month').toDate()
  expect(result.getMonth()).toEqual(0)
  expect(result.getDate()).toEqual(31)
  expect(result.getHours()).toEqual(23)
  expect(result.getMinutes()).toEqual(59)
  expect(result.getSeconds()).toEqual(59)
  expect(result.getMilliseconds()).toEqual(999)
})

Deno.test('Manipulate: endOf - should return end of quarter', () => {
  const date = new Date('2026-02-15T12:30:45.123Z')
  const result = daytime(date).endOf('quarter').toDate()
  expect(result.getMonth()).toEqual(2)
  expect(result.getDate()).toEqual(31)
  expect(result.getHours()).toEqual(23)
  expect(result.getMinutes()).toEqual(59)
  expect(result.getSeconds()).toEqual(59)
  expect(result.getMilliseconds()).toEqual(999)
})

Deno.test('Manipulate: endOf - should return end of year', () => {
  const date = new Date('2026-06-15T12:30:45.123Z')
  const result = daytime(date).endOf('year').toDate()
  expect(result.getMonth()).toEqual(11)
  expect(result.getDate()).toEqual(31)
  expect(result.getHours()).toEqual(23)
  expect(result.getMinutes()).toEqual(59)
  expect(result.getSeconds()).toEqual(59)
  expect(result.getMilliseconds()).toEqual(999)
})

Deno.test('Manipulate: endOf - should handle February correctly', () => {
  const date = new Date('2026-02-15T12:30:45.123Z')
  const result = daytime(date).endOf('month').toDate()
  expect(result.getMonth()).toEqual(1)
  expect(result.getDate()).toEqual(28)
})

Deno.test('Manipulate: endOf - should handle leap year February correctly', () => {
  const date = new Date('2028-02-15T12:30:45.123Z')
  const result = daytime(date).endOf('month').toDate()
  expect(result.getMonth()).toEqual(1)
  expect(result.getDate()).toEqual(29)
})

Deno.test('Manipulate: endOf - should return new instance (immutability)', () => {
  const date = new Date('2026-01-15T12:30:45.123Z')
  const original = daytime(date)
  const modified = original.endOf('day')
  expect(original.toDate().getTime()).toEqual(date.getTime())
  expect(modified.toDate().getTime()).not.toEqual(date.getTime())
})

Deno.test('Manipulate: diff - should calculate difference in milliseconds', () => {
  const date1 = new Date('2026-01-15T12:00:00.500Z')
  const date2 = new Date('2026-01-15T12:00:00.000Z')
  const result = daytime(date1).diff(date2, 'milliseconds')
  expect(result).toEqual(500)
})

Deno.test('Manipulate: diff - should calculate difference in seconds', () => {
  const date1 = new Date('2026-01-15T12:00:30Z')
  const date2 = new Date('2026-01-15T12:00:00Z')
  const result = daytime(date1).diff(date2, 'seconds')
  expect(result).toEqual(30)
})

Deno.test('Manipulate: diff - should calculate fractional seconds', () => {
  const date1 = new Date('2026-01-15T12:00:00.500Z')
  const date2 = new Date('2026-01-15T12:00:00.000Z')
  const result = daytime(date1).diff(date2, 'seconds')
  expect(result).toEqual(0.5)
})

Deno.test('Manipulate: diff - should calculate difference in minutes', () => {
  const date1 = new Date('2026-01-15T12:30:00Z')
  const date2 = new Date('2026-01-15T12:00:00Z')
  const result = daytime(date1).diff(date2, 'minutes')
  expect(result).toEqual(30)
})

Deno.test('Manipulate: diff - should calculate difference in hours', () => {
  const date1 = new Date('2026-01-15T14:00:00Z')
  const date2 = new Date('2026-01-15T12:00:00Z')
  const result = daytime(date1).diff(date2, 'hours')
  expect(result).toEqual(2)
})

Deno.test('Manipulate: diff - should calculate fractional hours', () => {
  const date1 = new Date('2026-01-15T12:30:00Z')
  const date2 = new Date('2026-01-15T12:00:00Z')
  const result = daytime(date1).diff(date2, 'hours')
  expect(result).toEqual(0.5)
})

Deno.test('Manipulate: diff - should calculate difference in days', () => {
  const date1 = new Date('2026-01-20T12:00:00Z')
  const date2 = new Date('2026-01-15T12:00:00Z')
  const result = daytime(date1).diff(date2, 'days')
  expect(result).toEqual(5)
})

Deno.test('Manipulate: diff - should return negative for past dates', () => {
  const date1 = new Date('2026-01-15T12:00:00Z')
  const date2 = new Date('2026-01-20T12:00:00Z')
  const result = daytime(date1).diff(date2, 'days')
  expect(result).toEqual(-5)
})

Deno.test('Manipulate: diff - should calculate difference in weeks', () => {
  const date1 = new Date('2026-01-29T12:00:00Z')
  const date2 = new Date('2026-01-15T12:00:00Z')
  const result = daytime(date1).diff(date2, 'weeks')
  expect(result).toBeCloseTo(2, 5)
})

Deno.test('Manipulate: diff - should calculate difference in months', () => {
  const date1 = new Date('2026-03-15T12:00:00Z')
  const date2 = new Date('2026-01-15T12:00:00Z')
  const result = daytime(date1).diff(date2, 'months')
  expect(result).toBeCloseTo(2, 0)
})

Deno.test('Manipulate: diff - should calculate difference in quarters', () => {
  const date1 = new Date('2026-07-15T12:00:00Z')
  const date2 = new Date('2026-01-15T12:00:00Z')
  const result = daytime(date1).diff(date2, 'quarters')
  expect(result).toBeCloseTo(2, 1)
})

Deno.test('Manipulate: diff - should calculate difference in years', () => {
  const date1 = new Date('2028-01-15T12:00:00Z')
  const date2 = new Date('2026-01-15T12:00:00Z')
  const result = daytime(date1).diff(date2, 'years')
  expect(result).toBeCloseTo(2, 1)
})

Deno.test('Manipulate: diff - should work with different input types', () => {
  const date1 = new Date('2026-01-20T12:00:00Z')
  const date2 = '2026-01-15T12:00:00Z'
  const date3 = date1.getTime() - 5 * 24 * 60 * 60 * 1000
  const result1 = daytime(date1).diff(date2, 'days')
  const result2 = daytime(date1).diff(date3, 'days')
  expect(result1).toBeCloseTo(5, 5)
  expect(result2).toBeCloseTo(5, 5)
})

Deno.test('Manipulate: diff - should support all unit forms', () => {
  const date1 = new Date('2026-01-20T12:00:00Z')
  const date2 = new Date('2026-01-15T12:00:00Z')
  const result1 = daytime(date1).diff(date2, 'day')
  const result2 = daytime(date1).diff(date2, 'days')
  const result3 = daytime(date1).diff(date2, 'd')
  expect(result1).toEqual(result2)
  expect(result1).toEqual(result3)
})

Deno.test('Manipulate: startOf - should throw error for invalid unit', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const invalidUnit = 'invalid' as Types.TimeUnit
  expect(() => {
    daytime(date).startOf(invalidUnit)
  }).toThrow(Error)
})

Deno.test('Manipulate: endOf - should throw error for invalid unit', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const invalidUnit = 'invalid' as Types.TimeUnit
  expect(() => {
    daytime(date).endOf(invalidUnit)
  }).toThrow(Error)
})

Deno.test('Manipulate: get - should throw error for invalid unit', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const invalidUnit = 'invalid' as Types.TimeUnit
  expect(() => {
    daytime(date).get(invalidUnit)
  }).toThrow(Error)
})

Deno.test('Manipulate: set - should throw error for invalid unit', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const invalidUnit = 'invalid' as Types.TimeUnit
  expect(() => {
    daytime(date).set(invalidUnit, 5)
  }).toThrow(Error)
})

Deno.test('Manipulate: diff - should throw error for invalid unit', () => {
  const date1 = new Date('2026-01-20T12:00:00Z')
  const date2 = new Date('2026-01-15T12:00:00Z')
  const invalidUnit = 'invalid' as Types.TimeUnit
  expect(() => {
    daytime(date1).diff(date2, invalidUnit)
  }).toThrow(Error)
})

Deno.test('Manipulate: add - should handle quarter unit', () => {
  const date = new Date('2026-01-15T12:00:00Z')
  const result = daytime(date).add(1, 'quarter').toDate()
  expect(result.getMonth()).toEqual(3)
  expect(result.getFullYear()).toEqual(2026)
})

Deno.test('Manipulate: subtract - should handle quarter unit', () => {
  const date = new Date('2026-04-15T12:00:00Z')
  const result = daytime(date).subtract(1, 'quarter').toDate()
  expect(result.getMonth()).toEqual(0)
  expect(result.getFullYear()).toEqual(2026)
})
