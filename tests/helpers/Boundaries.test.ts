import { assertEquals } from '@std/assert'
import * as Helpers from '@helpers/index.ts'

Deno.test('Boundaries: startOfYear - should return start of year', () => {
  const date = new Date(2026, 5, 15, 12, 30, 45, 789)
  const result = Helpers.startOfYear(date)
  assertEquals(result.getFullYear(), 2026)
  assertEquals(result.getMonth(), 0)
  assertEquals(result.getDate(), 1)
  assertEquals(result.getHours(), 0)
  assertEquals(result.getMinutes(), 0)
  assertEquals(result.getSeconds(), 0)
  assertEquals(result.getMilliseconds(), 0)
})

Deno.test('Boundaries: startOfMonth - should return start of month', () => {
  const date = new Date(2026, 5, 15, 12, 30, 45, 789)
  const result = Helpers.startOfMonth(date)
  assertEquals(result.getFullYear(), 2026)
  assertEquals(result.getMonth(), 5)
  assertEquals(result.getDate(), 1)
  assertEquals(result.getHours(), 0)
  assertEquals(result.getMinutes(), 0)
  assertEquals(result.getSeconds(), 0)
  assertEquals(result.getMilliseconds(), 0)
})

Deno.test('Boundaries: endOfMonth - should return end of month', () => {
  const date = new Date(2026, 0, 15, 12, 30, 45, 789)
  const result = Helpers.endOfMonth(date)
  assertEquals(result.getFullYear(), 2026)
  assertEquals(result.getMonth(), 0)
  assertEquals(result.getDate(), 31)
})

Deno.test('Boundaries: endOfMonth - should handle February correctly', () => {
  const date = new Date(2026, 1, 15, 12, 30, 45, 789)
  const result = Helpers.endOfMonth(date)
  assertEquals(result.getMonth(), 1)
  assertEquals(result.getDate(), 28)
})

Deno.test('Boundaries: endOfMonth - should handle leap year February', () => {
  const date = new Date(2028, 1, 15, 12, 30, 45, 789)
  const result = Helpers.endOfMonth(date)
  assertEquals(result.getMonth(), 1)
  assertEquals(result.getDate(), 29)
})

Deno.test('Boundaries: endOfMonth - should handle different months', () => {
  const feb = new Date(2026, 1, 15)
  const apr = new Date(2026, 3, 15)
  const jun = new Date(2026, 5, 15)
  assertEquals(Helpers.endOfMonth(feb).getDate(), 28)
  assertEquals(Helpers.endOfMonth(apr).getDate(), 30)
  assertEquals(Helpers.endOfMonth(jun).getDate(), 30)
})
