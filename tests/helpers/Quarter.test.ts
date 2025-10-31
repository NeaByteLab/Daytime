import { assertEquals } from '@std/assert'
import * as Helpers from '@helpers/index.ts'

Deno.test('Quarter: getQuarterNumber - should return correct quarter for each month', () => {
  assertEquals(Helpers.getQuarterNumber(new Date(2026, 0, 15)), 1)
  assertEquals(Helpers.getQuarterNumber(new Date(2026, 1, 15)), 1)
  assertEquals(Helpers.getQuarterNumber(new Date(2026, 2, 15)), 1)
  assertEquals(Helpers.getQuarterNumber(new Date(2026, 3, 15)), 2)
  assertEquals(Helpers.getQuarterNumber(new Date(2026, 4, 15)), 2)
  assertEquals(Helpers.getQuarterNumber(new Date(2026, 5, 15)), 2)
  assertEquals(Helpers.getQuarterNumber(new Date(2026, 6, 15)), 3)
  assertEquals(Helpers.getQuarterNumber(new Date(2026, 7, 15)), 3)
  assertEquals(Helpers.getQuarterNumber(new Date(2026, 8, 15)), 3)
  assertEquals(Helpers.getQuarterNumber(new Date(2026, 9, 15)), 4)
  assertEquals(Helpers.getQuarterNumber(new Date(2026, 10, 15)), 4)
  assertEquals(Helpers.getQuarterNumber(new Date(2026, 11, 15)), 4)
})

Deno.test('Quarter: getQuarterStartMonth - should return correct start month', () => {
  assertEquals(Helpers.getQuarterStartMonth(1), 0)
  assertEquals(Helpers.getQuarterStartMonth(2), 3)
  assertEquals(Helpers.getQuarterStartMonth(3), 6)
  assertEquals(Helpers.getQuarterStartMonth(4), 9)
})

Deno.test('Quarter: getQuarterEndMonth - should return correct end month', () => {
  assertEquals(Helpers.getQuarterEndMonth(1), 2)
  assertEquals(Helpers.getQuarterEndMonth(2), 5)
  assertEquals(Helpers.getQuarterEndMonth(3), 8)
  assertEquals(Helpers.getQuarterEndMonth(4), 11)
})

Deno.test('Quarter: getQuarterStartMonthFromDate - should return correct start month', () => {
  assertEquals(Helpers.getQuarterStartMonthFromDate(new Date(2026, 0, 15)), 0)
  assertEquals(Helpers.getQuarterStartMonthFromDate(new Date(2026, 1, 15)), 0)
  assertEquals(Helpers.getQuarterStartMonthFromDate(new Date(2026, 2, 15)), 0)
  assertEquals(Helpers.getQuarterStartMonthFromDate(new Date(2026, 3, 15)), 3)
  assertEquals(Helpers.getQuarterStartMonthFromDate(new Date(2026, 5, 15)), 3)
  assertEquals(Helpers.getQuarterStartMonthFromDate(new Date(2026, 6, 15)), 6)
  assertEquals(Helpers.getQuarterStartMonthFromDate(new Date(2026, 9, 15)), 9)
})

Deno.test('Quarter: clampQuarter - should clamp values to valid range', () => {
  assertEquals(Helpers.clampQuarter(0), 1)
  assertEquals(Helpers.clampQuarter(1), 1)
  assertEquals(Helpers.clampQuarter(2), 2)
  assertEquals(Helpers.clampQuarter(3), 3)
  assertEquals(Helpers.clampQuarter(4), 4)
  assertEquals(Helpers.clampQuarter(5), 4)
  assertEquals(Helpers.clampQuarter(-1), 1)
  assertEquals(Helpers.clampQuarter(10), 4)
})
