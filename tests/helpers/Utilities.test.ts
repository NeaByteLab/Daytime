import { assertEquals } from '@std/assert'
import * as Helpers from '@helpers/index.ts'

Deno.test('Utilities: padNumber - should pad numbers to specified length', () => {
  assertEquals(Helpers.padNumber(1, 2), '01')
  assertEquals(Helpers.padNumber(5, 2), '05')
  assertEquals(Helpers.padNumber(15, 2), '15')
  assertEquals(Helpers.padNumber(123, 2), '123')
  assertEquals(Helpers.padNumber(1, 3), '001')
  assertEquals(Helpers.padNumber(12, 3), '012')
  assertEquals(Helpers.padNumber(123, 3), '123')
})

Deno.test('Utilities: padNumber - should handle zero', () => {
  assertEquals(Helpers.padNumber(0, 2), '00')
  assertEquals(Helpers.padNumber(0, 3), '000')
})

Deno.test('Utilities: padNumber - should handle large numbers', () => {
  assertEquals(Helpers.padNumber(999, 3), '999')
  assertEquals(Helpers.padNumber(1000, 3), '1000')
})
