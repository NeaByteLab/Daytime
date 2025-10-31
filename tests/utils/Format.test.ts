import { expect } from '@std/expect'
import { expectedTrue } from '@tests/shared/index.ts'
import daytime from '@neabyte/daytime'

Deno.test('Format: should format year patterns', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  expect(daytime(date).format('YYYY')).toEqual('2026')
  expect(daytime(date).format('YY')).toEqual('26')
})

Deno.test('Format: should format month patterns', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  expect(daytime(date).format('MM')).toEqual('01')
  expect(daytime(date).format('M')).toEqual('1')
  expect(daytime(date).format('MMMM')).toEqual('January')
  expect(daytime(date).format('MMM')).toEqual('Jan')
})

Deno.test('Format: should format day patterns', () => {
  const date = new Date('2026-01-05T12:30:45Z')
  expect(daytime(date).format('DD')).toEqual('05')
  expect(daytime(date).format('D')).toEqual('5')
})

Deno.test('Format: should format hour patterns', () => {
  const date1 = new Date(Date.UTC(2026, 0, 15, 9, 30, 45))
  const date2 = new Date(Date.UTC(2026, 0, 15, 14, 30, 45))
  expect(daytime(date1).format('HH')).toEqual(String(date1.getHours()).padStart(2, '0'))
  expect(daytime(date1).format('H')).toEqual(String(date1.getHours()))
  const hour12One = date1.getHours() % 12 || 12
  expect(daytime(date1).format('hh')).toEqual(String(hour12One).padStart(2, '0'))
  expect(daytime(date1).format('h')).toEqual(String(hour12One))
  const hour12Two = date2.getHours() % 12 || 12
  expect(daytime(date2).format('hh')).toEqual(String(hour12Two).padStart(2, '0'))
  expect(daytime(date2).format('h')).toEqual(String(hour12Two))
})

Deno.test('Format: should format minute patterns', () => {
  const date = new Date('2026-01-15T12:05:45Z')
  expect(daytime(date).format('mm')).toEqual('05')
  expect(daytime(date).format('m')).toEqual('5')
})

Deno.test('Format: should format second patterns', () => {
  const date = new Date('2026-01-15T12:30:05Z')
  expect(daytime(date).format('ss')).toEqual('05')
  expect(daytime(date).format('s')).toEqual('5')
})

Deno.test('Format: should format millisecond patterns', () => {
  const date = new Date('2026-01-15T12:30:45.123Z')
  expect(daytime(date).format('SSS')).toEqual('123')
  expect(daytime(date).format('SS')).toEqual('12')
  expect(daytime(date).format('S')).toEqual('1')
})

Deno.test('Format: should format AM/PM patterns', () => {
  const date1 = new Date(Date.UTC(2026, 0, 15, 9, 30, 45))
  const date2 = new Date(Date.UTC(2026, 0, 15, 14, 30, 45))
  const hour1 = date1.getHours()
  const hour2 = date2.getHours()
  expect(daytime(date1).format('A')).toEqual(hour1 >= 12 ? 'PM' : 'AM')
  expect(daytime(date1).format('a')).toEqual(hour1 >= 12 ? 'pm' : 'am')
  expect(daytime(date2).format('A')).toEqual(hour2 >= 12 ? 'PM' : 'AM')
  expect(daytime(date2).format('a')).toEqual(hour2 >= 12 ? 'pm' : 'am')
})

Deno.test('Format: should format day of week patterns', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  expect(daytime(date).format('dddd')).toEqual('Thursday')
  expect(daytime(date).format('ddd')).toEqual('Thu')
  expect(daytime(date).format('dd')).toEqual('04')
  expect(daytime(date).format('d')).toEqual('4')
})

Deno.test('Format: should format complex patterns', () => {
  const date = new Date(Date.UTC(2026, 0, 15, 14, 30, 45, 123))
  expect(daytime(date).format('YYYY-MM-DD')).toEqual('2026-01-15')
  expect(daytime(date).format('HH:mm:ss')).toEqual(
    `${String(date.getHours()).padStart(2, '0')}:30:45`
  )
  expect(daytime(date).format('YYYY-MM-DD HH:mm:ss')).toEqual(
    `2026-01-15 ${String(date.getHours()).padStart(2, '0')}:30:45`
  )
})

Deno.test('Format: should format readable date patterns', () => {
  const date = new Date('2026-01-15T14:30:45Z')
  expect(daytime(date).format('dddd, MMMM DD, YYYY')).toEqual('Thursday, January 15, 2026')
})

Deno.test('Format: should format 12-hour time patterns', () => {
  const date1 = new Date(Date.UTC(2026, 0, 15, 9, 30, 45))
  const date2 = new Date(Date.UTC(2026, 0, 15, 14, 30, 45))
  const h1 = date1.getHours() % 12 || 12
  const h2 = date2.getHours() % 12 || 12
  const ampm1 = date1.getHours() >= 12 ? 'PM' : 'AM'
  const ampm2 = date2.getHours() >= 12 ? 'PM' : 'AM'
  expect(daytime(date1).format('hh:mm A')).toEqual(`${String(h1).padStart(2, '0')}:30 ${ampm1}`)
  expect(daytime(date1).format('h:mm a')).toEqual(`${h1}:30 ${ampm1.toLowerCase()}`)
  expect(daytime(date2).format('hh:mm A')).toEqual(`${String(h2).padStart(2, '0')}:30 ${ampm2}`)
  expect(daytime(date2).format('h:mm a')).toEqual(`${h2}:30 ${ampm2.toLowerCase()}`)
})

Deno.test('Format: should handle midnight correctly in 12-hour format', () => {
  const date1 = new Date(Date.UTC(2026, 0, 15, 0, 30, 45))
  const date2 = new Date(Date.UTC(2026, 0, 15, 12, 30, 45))
  const h1 = date1.getHours() % 12 || 12
  const h2 = date2.getHours() % 12 || 12
  const ampm1 = date1.getHours() >= 12 ? 'PM' : 'AM'
  const ampm2 = date2.getHours() >= 12 ? 'PM' : 'AM'
  expect(daytime(date1).format('hh:mm A')).toEqual(`${String(h1).padStart(2, '0')}:30 ${ampm1}`)
  expect(daytime(date2).format('hh:mm A')).toEqual(`${String(h2).padStart(2, '0')}:30 ${ampm2}`)
})

Deno.test('Format: should format with milliseconds', () => {
  const date = new Date(Date.UTC(2026, 0, 15, 12, 30, 45, 789))
  expect(daytime(date).format('HH:mm:ss.SSS')).toEqual(
    `${String(date.getHours()).padStart(2, '0')}:30:45.789`
  )
  expect(daytime(date).format('YYYY-MM-DD HH:mm:ss.SSS')).toEqual(
    `2026-01-15 ${String(date.getHours()).padStart(2, '0')}:30:45.789`
  )
})

Deno.test('Format: should handle edge case dates', () => {
  const date1 = new Date('2026-12-31T23:59:59.999')
  const date2 = new Date('2026-01-01T00:00:00.000')
  const result1 = daytime(date1).format('YYYY-MM-DD HH:mm:ss.SSS')
  const result2 = daytime(date2).format('YYYY-MM-DD HH:mm:ss.SSS')
  expect(result1.includes('2026-12-31')).toBe(expectedTrue)
  expect(result1.includes('59:59.999')).toBe(expectedTrue)
  expect(result2.includes('2026-01-01')).toBe(expectedTrue)
  expect(result2.includes('.000')).toBe(expectedTrue)
})

Deno.test('Format: toJSON - should return ISO string', () => {
  const date = new Date('2026-01-15T12:30:45.123Z')
  const result = daytime(date).toJSON()
  expect(result).toEqual(date.toISOString())
  expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)
})

Deno.test('Format: toJSON - should match toISO', () => {
  const date = new Date('2026-06-15T14:30:45.789Z')
  const d = daytime(date)
  expect(d.toJSON()).toEqual(d.toISO())
})

Deno.test('Format: toString - should return default string representation', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).toString()
  expect(typeof result).toEqual('string')
  expect(result.length).toBeGreaterThan(0)
})

Deno.test('Format: toString - should match Date.toString()', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).toString()
  expect(result).toEqual(date.toString())
})

Deno.test('Format: toArray - should return array of date components', () => {
  const date = new Date(2026, 0, 15, 14, 30, 45, 789)
  const result = daytime(date).toArray()
  expect(Array.isArray(result)).toBe(expectedTrue)
  expect(result.length).toEqual(7)
  expect(result[0]).toEqual(2026)
  expect(result[1]).toEqual(1)
  expect(result[2]).toEqual(15)
  expect(result[3]).toEqual(14)
  expect(result[4]).toEqual(30)
  expect(result[5]).toEqual(45)
  expect(result[6]).toEqual(789)
})

Deno.test('Format: toArray - should match get() results', () => {
  const date = new Date(2026, 5, 15, 14, 30, 45, 789)
  const d = daytime(date)
  const array = d.toArray()
  expect(array[0]).toEqual(d.get('year'))
  expect(array[1]).toEqual(d.get('month'))
  expect(array[2]).toEqual(d.get('day'))
  expect(array[3]).toEqual(d.get('hour'))
  expect(array[4]).toEqual(d.get('minute'))
  expect(array[5]).toEqual(d.get('second'))
  expect(array[6]).toEqual(d.get('millisecond'))
})

Deno.test('Format: toArray - should handle edge cases', () => {
  const date1 = new Date(2026, 0, 1, 0, 0, 0, 0)
  const date2 = new Date(2026, 11, 31, 23, 59, 59, 999)
  const result1 = daytime(date1).toArray()
  const result2 = daytime(date2).toArray()
  expect(result1).toEqual([2026, 1, 1, 0, 0, 0, 0])
  expect(result2).toEqual([2026, 12, 31, 23, 59, 59, 999])
})

Deno.test('Format: toObject - should return object with date components', () => {
  const date = new Date(2026, 0, 15, 14, 30, 45, 789)
  const result = daytime(date).toObject()
  expect(typeof result).toEqual('object')
  expect(result.year).toEqual(2026)
  expect(result.month).toEqual(1)
  expect(result.day).toEqual(15)
  expect(result.hour).toEqual(14)
  expect(result.minute).toEqual(30)
  expect(result.second).toEqual(45)
  expect(result.millisecond).toEqual(789)
})

Deno.test('Format: toObject - should have all required properties', () => {
  const date = new Date(2026, 5, 15, 14, 30, 45, 789)
  const result = daytime(date).toObject()
  expect('year' in result).toEqual(expectedTrue)
  expect('month' in result).toEqual(expectedTrue)
  expect('day' in result).toEqual(expectedTrue)
  expect('hour' in result).toEqual(expectedTrue)
  expect('minute' in result).toEqual(expectedTrue)
  expect('second' in result).toEqual(expectedTrue)
  expect('millisecond' in result).toEqual(expectedTrue)
})

Deno.test('Format: toObject - should match get() results', () => {
  const date = new Date(2026, 5, 15, 14, 30, 45, 789)
  const d = daytime(date)
  const obj = d.toObject()
  expect(obj.year).toEqual(d.get('year'))
  expect(obj.month).toEqual(d.get('month'))
  expect(obj.day).toEqual(d.get('day'))
  expect(obj.hour).toEqual(d.get('hour'))
  expect(obj.minute).toEqual(d.get('minute'))
  expect(obj.second).toEqual(d.get('second'))
  expect(obj.millisecond).toEqual(d.get('millisecond'))
})

Deno.test('Format: toObject - should handle edge cases', () => {
  const date1 = new Date(2026, 0, 1, 0, 0, 0, 0)
  const date2 = new Date(2026, 11, 31, 23, 59, 59, 999)
  const result1 = daytime(date1).toObject()
  const result2 = daytime(date2).toObject()
  expect(result1).toEqual({
    year: 2026,
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  })
  expect(result2).toEqual({
    year: 2026,
    month: 12,
    day: 31,
    hour: 23,
    minute: 59,
    second: 59,
    millisecond: 999
  })
})

Deno.test('Format: toUnix - should return Unix timestamp in seconds', () => {
  const date = new Date('2026-01-15T12:30:45.789Z')
  const result = daytime(date).toUnix()
  expect(typeof result).toEqual('number')
  expect(result).toEqual(Math.floor(date.getTime() / 1000))
})

Deno.test('Format: toUnix - should match valueOf() divided by 1000', () => {
  const date = new Date('2026-06-15T14:30:45.789Z')
  const d = daytime(date)
  expect(d.toUnix()).toEqual(Math.floor(d.valueOf() / 1000))
})

Deno.test('Format: toUnix - should handle edge cases', () => {
  const date1 = new Date(0)
  const date2 = new Date('1970-01-01T00:00:01Z')
  const date3 = new Date('2038-01-19T03:14:07Z')
  expect(daytime(date1).toUnix()).toEqual(0)
  expect(daytime(date2).toUnix()).toEqual(1)
  expect(daytime(date3).toUnix()).toEqual(2147483647)
})

Deno.test('Format: all methods should work with chaining', () => {
  const date = daytime('2026-01-15T12:30:45Z')
  const json = date.add(1, 'day').toJSON()
  const str = date.add(1, 'day').toString()
  const unix = date.add(1, 'day').toUnix()
  expect(typeof json).toEqual('string')
  expect(typeof str).toEqual('string')
  expect(typeof unix).toEqual('number')
})

Deno.test('Format: should handle edge case hour 0 in 12-hour format', () => {
  const date = new Date(2026, 0, 15, 0, 30, 45)
  const hour = date.getHours()
  const hour12 = hour % 12 || 12
  const ampm = hour >= 12 ? 'PM' : 'AM'
  expect(daytime(date).format('h')).toEqual(String(hour12))
  expect(daytime(date).format('hh')).toEqual(String(hour12).padStart(2, '0'))
  expect(daytime(date).format('A')).toEqual(ampm)
  expect(daytime(date).format('a')).toEqual(ampm.toLowerCase())
})

Deno.test('Format: should handle edge case hour 12 in 12-hour format', () => {
  const date = new Date(2026, 0, 15, 12, 30, 45)
  const hour = date.getHours()
  const hour12 = hour % 12 || 12
  const ampm = hour >= 12 ? 'PM' : 'AM'
  expect(daytime(date).format('h')).toEqual(String(hour12))
  expect(daytime(date).format('hh')).toEqual(String(hour12).padStart(2, '0'))
  expect(daytime(date).format('A')).toEqual(ampm)
  expect(daytime(date).format('a')).toEqual(ampm.toLowerCase())
})

Deno.test('Format: should handle edge case hour 23 in 12-hour format', () => {
  const date = new Date(2026, 0, 15, 23, 30, 45)
  const hour = date.getHours()
  const hour12 = hour % 12 || 12
  const ampm = hour >= 12 ? 'PM' : 'AM'
  expect(daytime(date).format('h')).toEqual(String(hour12))
  expect(daytime(date).format('hh')).toEqual(String(hour12).padStart(2, '0'))
  expect(daytime(date).format('A')).toEqual(ampm)
  expect(daytime(date).format('a')).toEqual(ampm.toLowerCase())
})

Deno.test('Format: should handle patterns without tokens', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).format('xyz')
  expect(result).toEqual('xyz')
})

Deno.test('Format: should handle patterns with partial matches', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).format('YYYYY')
  expect(result.includes('2026')).toBe(expectedTrue)
})

Deno.test('Format: should handle patterns with no matching tokens', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).format('XYZ')
  expect(result).toEqual('XYZ')
})

Deno.test('Format: should handle complex patterns with multiple token types', () => {
  const date = new Date('2026-06-15T14:30:45.789Z')
  const result = daytime(date).format('YYYY-MM-DD HH:mm:ss.SSS dddd MMMM')
  expect(result.includes('2026')).toBe(expectedTrue)
  expect(result.includes('06')).toBe(expectedTrue)
  expect(result.includes('15')).toBe(expectedTrue)
})

Deno.test('Format: should handle patterns with repeated tokens', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).format('YYYY-YYYY')
  expect(result).toEqual('2026-2026')
})
