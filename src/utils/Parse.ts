import type * as Types from '@app/Types.ts'
import * as Helpers from '@helpers/index.ts'

/**
 * Parses various date input types into a Date object.
 * @param input - The date input (Date, number, string, or object with toDate method)
 * @returns A Date object
 * @throws {Error} When input is invalid or date string cannot be parsed
 */
export function parseDateInput(input?: Types.DateInput): Date {
  if (input === undefined || input === null) {
    return new Date()
  }
  if (input instanceof Date) {
    return Helpers.cloneDate(input)
  }
  if (typeof input === 'number') {
    return new Date(input)
  }
  if (typeof input === 'string') {
    const parsed = new Date(input)
    if (!Helpers.isValid(parsed)) {
      throw new Error(`Invalid date string: ${input}`)
    }
    return parsed
  }
  if (input && typeof input === 'object' && 'toDate' in input) {
    return (input as { toDate(): Date }).toDate()
  }
  throw new Error(`Invalid date input: ${input}`)
}
