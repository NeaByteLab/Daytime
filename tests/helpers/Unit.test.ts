import { assertEquals } from '@std/assert'
import { expectedFalse, expectedTrue } from '@tests/shared/index.ts'
import * as Helpers from '@helpers/index.ts'

Deno.test('Unit: getCanonicalUnit - should normalize all unit variations', () => {
  assertEquals(Helpers.getCanonicalUnit('year'), 'year')
  assertEquals(Helpers.getCanonicalUnit('years'), 'year')
  assertEquals(Helpers.getCanonicalUnit('y'), 'year')
  assertEquals(Helpers.getCanonicalUnit('quarter'), 'quarter')
  assertEquals(Helpers.getCanonicalUnit('quarters'), 'quarter')
  assertEquals(Helpers.getCanonicalUnit('q'), 'quarter')
  assertEquals(Helpers.getCanonicalUnit('month'), 'month')
  assertEquals(Helpers.getCanonicalUnit('months'), 'month')
  assertEquals(Helpers.getCanonicalUnit('M'), 'month')
  assertEquals(Helpers.getCanonicalUnit('week'), 'week')
  assertEquals(Helpers.getCanonicalUnit('weeks'), 'week')
  assertEquals(Helpers.getCanonicalUnit('w'), 'week')
  assertEquals(Helpers.getCanonicalUnit('isoWeek'), 'isoWeek')
  assertEquals(Helpers.getCanonicalUnit('isoWeeks'), 'isoWeek')
  assertEquals(Helpers.getCanonicalUnit('isoweek'), 'isoWeek')
  assertEquals(Helpers.getCanonicalUnit('isoweeks'), 'isoWeek')
  assertEquals(Helpers.getCanonicalUnit('day'), 'day')
  assertEquals(Helpers.getCanonicalUnit('days'), 'day')
  assertEquals(Helpers.getCanonicalUnit('d'), 'day')
  assertEquals(Helpers.getCanonicalUnit('hour'), 'hour')
  assertEquals(Helpers.getCanonicalUnit('hours'), 'hour')
  assertEquals(Helpers.getCanonicalUnit('h'), 'hour')
  assertEquals(Helpers.getCanonicalUnit('minute'), 'minute')
  assertEquals(Helpers.getCanonicalUnit('minutes'), 'minute')
  assertEquals(Helpers.getCanonicalUnit('second'), 'second')
  assertEquals(Helpers.getCanonicalUnit('seconds'), 'second')
  assertEquals(Helpers.getCanonicalUnit('s'), 'second')
  assertEquals(Helpers.getCanonicalUnit('millisecond'), 'millisecond')
  assertEquals(Helpers.getCanonicalUnit('milliseconds'), 'millisecond')
  assertEquals(Helpers.getCanonicalUnit('ms'), 'millisecond')
})

Deno.test('Unit: getCanonicalUnit - should return original for unknown units', () => {
  assertEquals(Helpers.getCanonicalUnit('unknown'), 'unknown')
  assertEquals(Helpers.getCanonicalUnit('invalid'), 'invalid')
})

Deno.test('Unit: isDay - should return true for day units', () => {
  assertEquals(Helpers.isDay('day'), expectedTrue)
  assertEquals(Helpers.isDay('days'), expectedTrue)
  assertEquals(Helpers.isDay('d'), expectedTrue)
  assertEquals(Helpers.isDay('hour'), expectedFalse)
  assertEquals(Helpers.isDay('dayz'), expectedFalse)
})

Deno.test('Unit: isHour - should return true for hour units', () => {
  assertEquals(Helpers.isHour('hour'), expectedTrue)
  assertEquals(Helpers.isHour('hours'), expectedTrue)
  assertEquals(Helpers.isHour('h'), expectedTrue)
  assertEquals(Helpers.isHour('minute'), expectedFalse)
})

Deno.test('Unit: isMillisecond - should return true for millisecond units', () => {
  assertEquals(Helpers.isMillisecond('millisecond'), expectedTrue)
  assertEquals(Helpers.isMillisecond('milliseconds'), expectedTrue)
  assertEquals(Helpers.isMillisecond('ms'), expectedTrue)
  assertEquals(Helpers.isMillisecond('second'), expectedFalse)
})

Deno.test('Unit: isMinute - should return true for minute units', () => {
  assertEquals(Helpers.isMinute('minute'), expectedTrue)
  assertEquals(Helpers.isMinute('minutes'), expectedTrue)
  assertEquals(Helpers.isMinute('m'), expectedTrue)
  assertEquals(Helpers.isMinute('month'), expectedFalse)
  assertEquals(Helpers.isMinute('millisecond'), expectedFalse)
})

Deno.test('Unit: isMonth - should return true for month units', () => {
  assertEquals(Helpers.isMonth('month'), expectedTrue)
  assertEquals(Helpers.isMonth('months'), expectedTrue)
  assertEquals(Helpers.isMonth('M'), expectedTrue)
  assertEquals(Helpers.isMonth('minute'), expectedFalse)
})

Deno.test('Unit: isQuarter - should return true for quarter units', () => {
  assertEquals(Helpers.isQuarter('quarter'), expectedTrue)
  assertEquals(Helpers.isQuarter('quarters'), expectedTrue)
  assertEquals(Helpers.isQuarter('q'), expectedTrue)
  assertEquals(Helpers.isQuarter('Q'), expectedFalse)
})

Deno.test('Unit: isSecond - should return true for second units', () => {
  assertEquals(Helpers.isSecond('second'), expectedTrue)
  assertEquals(Helpers.isSecond('seconds'), expectedTrue)
  assertEquals(Helpers.isSecond('s'), expectedTrue)
  assertEquals(Helpers.isSecond('millisecond'), expectedFalse)
})

Deno.test('Unit: isWeek - should return true for week units', () => {
  assertEquals(Helpers.isWeek('week'), expectedTrue)
  assertEquals(Helpers.isWeek('weeks'), expectedTrue)
  assertEquals(Helpers.isWeek('w'), expectedTrue)
  assertEquals(Helpers.isWeek('day'), expectedFalse)
})

Deno.test('Unit: isYear - should return true for year units', () => {
  assertEquals(Helpers.isYear('year'), expectedTrue)
  assertEquals(Helpers.isYear('years'), expectedTrue)
  assertEquals(Helpers.isYear('y'), expectedTrue)
  assertEquals(Helpers.isYear('month'), expectedFalse)
})

Deno.test('Unit: normalizeUnit - should convert to lowercase', () => {
  assertEquals(Helpers.normalizeUnit('YEAR'), 'year')
  assertEquals(Helpers.normalizeUnit('Month'), 'month')
  assertEquals(Helpers.normalizeUnit('DAY'), 'day')
  assertEquals(Helpers.normalizeUnit('Week'), 'week')
})
