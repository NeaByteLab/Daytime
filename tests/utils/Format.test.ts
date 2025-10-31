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
  expect(daytime(date).format('Do')).toEqual('5th')
})

Deno.test('Format: should format ordinal day patterns', () => {
  const date1 = new Date('2026-01-01T12:30:45Z')
  const date2 = new Date('2026-01-02T12:30:45Z')
  const date3 = new Date('2026-01-03T12:30:45Z')
  const date4 = new Date('2026-01-04T12:30:45Z')
  const date11 = new Date('2026-01-11T12:30:45Z')
  const date12 = new Date('2026-01-12T12:30:45Z')
  const date13 = new Date('2026-01-13T12:30:45Z')
  const date21 = new Date('2026-01-21T12:30:45Z')
  const date22 = new Date('2026-01-22T12:30:45Z')
  const date23 = new Date('2026-01-23T12:30:45Z')
  expect(daytime(date1).format('Do')).toEqual('1st')
  expect(daytime(date2).format('Do')).toEqual('2nd')
  expect(daytime(date3).format('Do')).toEqual('3rd')
  expect(daytime(date4).format('Do')).toEqual('4th')
  expect(daytime(date11).format('Do')).toEqual('11th')
  expect(daytime(date12).format('Do')).toEqual('12th')
  expect(daytime(date13).format('Do')).toEqual('13th')
  expect(daytime(date21).format('Do')).toEqual('21st')
  expect(daytime(date22).format('Do')).toEqual('22nd')
  expect(daytime(date23).format('Do')).toEqual('23rd')
})

Deno.test('Format: should format Unix timestamp patterns', () => {
  const date = new Date('2026-01-15T12:30:45.789Z')
  const unixSeconds = Math.floor(date.getTime() / 1000)
  const unixMilliseconds = date.getTime()
  expect(daytime(date).format('X')).toEqual(unixSeconds.toString())
  expect(daytime(date).format('x')).toEqual(unixMilliseconds.toString())
})

Deno.test('Format: should format timezone offset patterns', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const offsetMinutes = -date.getTimezoneOffset()
  const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60)
  const offsetMins = Math.abs(offsetMinutes) % 60
  const offsetSign = offsetMinutes >= 0 ? '+' : '-'
  const expectedZZ = `${offsetSign}${String(offsetHours).padStart(2, '0')}${
    String(
      offsetMins
    ).padStart(2, '0')
  }`
  const expectedZ = `${offsetSign}${String(offsetHours).padStart(2, '0')}:${
    String(
      offsetMins
    ).padStart(2, '0')
  }`
  const resultZ = daytime(date).format('Z')
  const resultZZ = daytime(date).format('ZZ')
  expect(resultZ).toEqual(expectedZ)
  expect(resultZZ).toEqual(expectedZZ)
  expect(resultZ).toMatch(/^[+-]\d{2}:\d{2}$/)
  expect(resultZZ).toMatch(/^[+-]\d{4}$/)
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

Deno.test('Format: should handle custom locale code', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const resultEn = daytime(date).locale('en').format('dddd, MMMM')
  const resultId = daytime(date).locale('id').format('dddd, MMMM')
  expect(resultEn).toContain('Thursday')
  expect(resultEn).toContain('January')
  expect(resultId).toContain('Januari')
  expect(resultId).toContain('Kamis')
})

Deno.test('Format: should handle single-character tokens at start of string', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const resultX = daytime(date).format('X timestamp')
  const resultx = daytime(date).format('x timestamp')
  expect(resultX).toMatch(/^\d+ timestamp$/)
  expect(resultx).toMatch(/^\d+ timestamp$/)
})

Deno.test('Format: should handle single-character tokens at end of string', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const resultX = daytime(date).format('timestamp X')
  const resultx = daytime(date).format('timestamp x')
  expect(resultX).toMatch(/^timestamp \d+$/)
  expect(resultx).toMatch(/^timestamp \d+$/)
})

Deno.test('Format: should handle single-character tokens with separators', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const resultX = daytime(date).format('X-x-X')
  const resultx = daytime(date).format('x-X-x')
  expect(resultX).toMatch(/^\d+-\d+-\d+$/)
  expect(resultx).toMatch(/^\d+-\d+-\d+$/)
})

Deno.test('Format: should skip single-character tokens adjacent to alphabetic chars', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).format('xyz')
  expect(result).toEqual('xyz')
  const result2 = daytime(date).format('ABC')
  expect(result2).toEqual('ABC')
})

Deno.test('Format: should handle all new tokens in combination', () => {
  const date = new Date('2026-01-15T12:30:45.789Z')
  const result = daytime(date).format('YYYY-MM-DD Do HH:mm:ss Z ZZ X x')
  expect(result).toContain('2026')
  expect(result).toContain('01')
  expect(result).toContain('15th')
  expect(result).toMatch(/[+-]\d{2}:\d{2}/)
  expect(result).toMatch(/[+-]\d{4}/)
  expect(result).toMatch(/\d{10}/)
  expect(result).toMatch(/\d{13}/)
})

Deno.test('Format: should handle timezone offsets for different timezones', () => {
  const date1 = new Date('2026-01-15T12:00:00Z')
  const date2 = new Date('2026-07-15T12:00:00Z')
  const result1Z = daytime(date1).format('Z')
  const result2Z = daytime(date2).format('Z')
  const result1ZZ = daytime(date1).format('ZZ')
  const result2ZZ = daytime(date2).format('ZZ')
  expect(result1Z).toMatch(/^[+-]\d{2}:\d{2}$/)
  expect(result2Z).toMatch(/^[+-]\d{2}:\d{2}$/)
  expect(result1ZZ).toMatch(/^[+-]\d{4}$/)
  expect(result2ZZ).toMatch(/^[+-]\d{4}$/)
})

Deno.test('Format: should handle single-character tokens mixed with multi-character tokens', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).format('X-YYYY-x-ZZ')
  expect(result).toMatch(/^\d+-2026-\d+-[+-]\d{4}$/)
})

Deno.test('Format: should handle ordinal days with all edge cases', () => {
  const dates = []
  for (let day = 1; day <= 31; day++) {
    dates.push(new Date(`2026-01-${String(day).padStart(2, '0')}T12:30:45Z`))
  }
  const results = dates.map((d) => daytime(d).format('Do'))
  expect(results[0]).toEqual('1st')
  expect(results[1]).toEqual('2nd')
  expect(results[2]).toEqual('3rd')
  expect(results[3]).toEqual('4th')
  expect(results[10]).toEqual('11th')
  expect(results[11]).toEqual('12th')
  expect(results[12]).toEqual('13th')
  expect(results[20]).toEqual('21st')
  expect(results[21]).toEqual('22nd')
  expect(results[22]).toEqual('23rd')
  expect(results[30]).toEqual('31st')
})

Deno.test(
  'Format: should handle single-character token when prevChar is not alpha at start',
  () => {
    const date = new Date('2026-01-15T12:30:45Z')
    const result = daytime(date).format('X123')
    expect(result).toMatch(/^\d+123$/)
  }
)

Deno.test('Format: should handle single-character token when nextChar is not alpha at end', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).format('123x')
  expect(result).toMatch(/^123\d+$/)
})

Deno.test('Format: should handle single-character token with numeric prefix and suffix', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).format('123x456')
  expect(result).toMatch(/^123\d+456$/)
})

Deno.test('Format: should handle single-character token with punctuation', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const resultX = daytime(date).format('X!X?X')
  const resultx = daytime(date).format('x-x-x')
  expect(resultX).toMatch(/^\d+!\d+\?\d+$/)
  expect(resultx).toMatch(/^\d+-\d+-\d+$/)
})

Deno.test('Format: should handle all single-character tokens in various positions', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  expect(daytime(date).format('X')).toMatch(/^\d+$/)
  expect(daytime(date).format('x')).toMatch(/^\d+$/)
  expect(daytime(date).format('A')).toMatch(/^(AM|PM)$/)
  expect(daytime(date).format('a')).toMatch(/^(am|pm)$/)
  expect(daytime(date).format('D')).toMatch(/^\d+$/)
  expect(daytime(date).format('H')).toMatch(/^\d+$/)
  expect(daytime(date).format('M')).toMatch(/^\d+$/)
  expect(daytime(date).format('S')).toMatch(/^\d+$/)
  expect(daytime(date).format('d')).toMatch(/^\d+$/)
  expect(daytime(date).format('h')).toMatch(/^\d+$/)
  expect(daytime(date).format('m')).toMatch(/^\d+$/)
  expect(daytime(date).format('s')).toMatch(/^\d+$/)
})

Deno.test('Format: should handle single-character token searchStart progression', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).format('x x x')
  expect(result).toMatch(/^\d+ \d+ \d+$/)
})

Deno.test('Format: should handle when result does not include multi-character token', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).format('abc')
  expect(result).toEqual('abc')
})

Deno.test('Format: should handle boundary conditions for single-character tokens', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  expect(daytime(date).format('X').length).toBeGreaterThan(0)
  expect(daytime(date).format('x').length).toBeGreaterThan(0)
  expect(daytime(date).format('Z').length).toBeGreaterThan(0)
  expect(daytime(date).format('ZZ').length).toBeGreaterThan(0)
})

Deno.test('Format: should handle single-character token at index 0 (start)', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).format('X start')
  expect(result).toMatch(/^\d+ start$/)
})

Deno.test('Format: should handle single-character token at end (index = length-1)', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).format('end x')
  expect(result).toMatch(/^end \d+$/)
})

Deno.test('Format: should handle prevChar empty string when index is 0', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).format('X')
  expect(typeof result).toEqual('string')
  expect(result.length).toBeGreaterThan(0)
})

Deno.test('Format: should handle nextChar empty string when at end', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).format('x')
  expect(typeof result).toEqual('string')
  expect(result.length).toBeGreaterThan(0)
})

Deno.test('Format: should handle case when prevChar is alpha (skip token)', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).format('aXb')
  expect(result).toEqual('aXb')
})

Deno.test('Format: should handle case when nextChar is alpha (skip token)', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).format('aXb')
  expect(result).toEqual('aXb')
})

Deno.test(
  'Format: should handle case when both prevChar and nextChar are alpha (skip token)',
  () => {
    const date = new Date('2026-01-15T12:30:45Z')
    const result = daytime(date).format('aXb')
    expect(result).toEqual('aXb')
    const result2 = daytime(date).format('aX')
    expect(result2).toEqual('aX')
    const result3 = daytime(date).format('Xb')
    expect(result3).toEqual('Xb')
  }
)

Deno.test('Format: should handle empty pattern', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date).format('')
  expect(result).toEqual('')
})

Deno.test('Format: should handle pattern with only single-character token', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  expect(daytime(date).format('X')).toMatch(/^\d+$/)
  expect(daytime(date).format('x')).toMatch(/^\d+$/)
  expect(daytime(date).format('D')).toMatch(/^\d+$/)
})

Deno.test('Format: should handle all tokens comprehensively', () => {
  const date = new Date('2026-01-15T14:30:45.789Z')
  const result = daytime(date).format(
    'YYYY YY MMMM MMM MM M DD D Do dddd ddd dd d HH H hh h mm m ss s SSS SS S A a X x Z ZZ'
  )
  expect(result).toContain('2026')
  expect(result).toContain('26')
  expect(result).toContain('January')
  expect(result).toContain('Jan')
  expect(result).toContain('15th')
  expect(result).toContain('Thursday')
  expect(result).toContain('Thu')
  expect(result).toMatch(/[+-]\d{2}:\d{2}/)
  expect(result).toMatch(/[+-]\d{4}/)
  expect(result).toMatch(/\d{10}/)
  expect(result).toMatch(/\d{13}/)
})
