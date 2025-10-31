import { expect } from '@std/expect'
import { expectedTrue } from '@tests/shared/index.ts'
import daytime from '@neabyte/daytime'

Deno.test('Parse: should parse undefined input as current date', () => {
  const result = daytime()
  const now = new Date()
  const diff = Math.abs(result.toDate().getTime() - now.getTime())
  expect(diff < 1000).toBe(expectedTrue)
})

Deno.test('Parse: should parse Date object', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date)
  expect(result.toDate().getTime()).toEqual(date.getTime())
})

Deno.test('Parse: should create new Date instance (immutability)', () => {
  const date = new Date('2026-01-15T12:30:45Z')
  const result = daytime(date)
  date.setTime(0)
  expect(result.toDate().getTime()).toEqual(new Date('2026-01-15T12:30:45Z').getTime())
})

Deno.test('Parse: should parse ISO string', () => {
  const dateString = '2026-01-15T12:30:45Z'
  const result = daytime(dateString)
  expect(result.toISO()).toEqual('2026-01-15T12:30:45.000Z')
})

Deno.test('Parse: should parse various date strings', () => {
  const formats = [
    '2026-01-15T12:30:45Z',
    '2026-01-15T12:30:45.123Z',
    '2026-01-15',
    'January 15, 2026'
  ]
  for (const format of formats) {
    const result = daytime(format)
    expect(result.toDate() instanceof Date).toBe(expectedTrue)
  }
})

Deno.test('Parse: should parse timestamp number', () => {
  const timestamp = new Date('2026-01-15T12:30:45Z').getTime()
  const result = daytime(timestamp)
  expect(result.toDate().getTime()).toEqual(timestamp)
})

Deno.test('Parse: should parse object with toDate method', () => {
  const mockDate = {
    toDate(): Date {
      return new Date('2026-01-15T12:30:45Z')
    }
  }
  const result = daytime(mockDate)
  expect(result.toISO()).toEqual('2026-01-15T12:30:45.000Z')
})

Deno.test('Parse: should throw error for invalid string', () => {
  expect(() => {
    daytime('invalid-date-string')
  }).toThrow(Error)
})

Deno.test('Parse: should throw error for invalid input type', () => {
  expect(() => {
    daytime({ invalid: 'object' } as unknown as Date)
  }).toThrow(Error)
})

Deno.test('Parse: should handle null as current date', () => {
  const result = daytime(null as unknown as undefined)
  const now = new Date()
  const diff = Math.abs(result.toDate().getTime() - now.getTime())
  expect(diff < 1000).toBe(expectedTrue)
})
